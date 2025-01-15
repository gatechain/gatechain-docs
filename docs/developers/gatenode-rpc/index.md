# Gatenode-openrpc 使用指南
可以通过 gatenode-openrpc 访问 Gatenode的 RPC 服务。

如果尚未安装gatenode的相关依赖项，请先进行安装。

## 项目设置
首先，将gatenode-openrpc作为依赖项添加到你的项目中：

```bash
go get github.com/gatechain/gatenode-openrpc
```

要使用以下方法，你将需要节点的 URL 以及你的认证令牌。要获取你的认证令牌，请查看相关指南。若要在启动节点时不使用认证令牌运行节点，你可以在启动节点时使用 “--rpc.skip-auth” 标志。这样你就可以将空字符串作为你的认证令牌传入。
默认的 URL 是 “http://localhost:26658” 。 如果你想使用订阅方法，比如下文提到的 “SubscribeHeaders” 方法，你必须使用 “ws” 协议来替代 “http” 协议，即使用 “ws://localhost:26658”。

## 提交和检索Blobs
“blob.Submit” 方法接收一组Blobs，以及一个 gas 价格作为参数，并返回成功提交Blob时的区块高度。

命名空间可以通过 “share.NewBlobNamespaceV0” 生成。
Blobs可以通过 “blob.NewBlobV0” 生成。
你可以使用 “blob.NewSubmitOptions()”，它能让gatenode自动确定一个合适的 gas 价格。要设置你自己的 gas 价格，可以使用 “blob.NewSubmitOptions(blob.WithGasPrice(X))”。可用的选项有 “WithGasPrice”、“WithGas”、“WithKeyName” 以及 “WithSignerAddress”。
“blob.GetAll” 方法接收一个高度值以及一组命名空间作为参数，并返回在给定命名空间中找到的Blobs列表。

```go
import (
    "bytes"
    "context"
    "fmt"

    client "github.com/gatechain/gatenode-openrpc"
    "github.com/gatechain/gatenode-openrpc/types/blob"
    "github.com/gatechain/gatenode-openrpc/types/share"
)

// SubmitBlob向“test”命名空间提交一个包含“Hello, World!”内容的Blob。它使用正在运行的节点上的默认签名者。
func SubmitBlob(ctx context.Context, url string, token string) error {
    client, err := client.NewClient(ctx, url, token)
    if err != nil {
        return err
    }

    // 让我们向“test”命名空间提交内容
    namespace, err := share.NewBlobNamespaceV0([]byte("test"))
    if err != nil {
        return err
    }

    // 创建一个Blob
    helloWorldBlob, err := blob.NewBlobV0(namespace, []byte("Hello, World!"))
    if err != nil {
        return err
    }

    // 向网络提交这个Blob
    height, err := client.Blob.Submit(ctx, []*blob.Blob{helloWorldBlob}, blob.NewSubmitOptions())
    if err != nil {
        return err
    }

    fmt.Printf("Blob被包含在高度为 %d 的位置\n", height)

    // 从网络中检索这个Blob
    retrievedBlobs, err := client.Blob.GetAll(ctx, height, []share.Namespace{namespace})
    if err != nil {
        return err
    }

    fmt.Printf("Blobs是否相等？ %v\n", bytes.Equal(helloWorldBlob.Commitment, retrievedBlobs[0].Commitment))
    return nil
}
```

## 订阅新的Blobs
你可以使用“blob.Subscribe” 方法来订阅命名空间中的新Blobs。该方法会返回一个通道，当有新的Blobs产生时，这个通道将会接收它们。在这个示例中，我们将检索 “test” 命名空间中的Blobs。

```go
func SubscribeBlobs(ctx context.Context, url string, token string) error {
    client, err := client.NewClient(ctx, url, token)
    if err != nil {
        return err
    }

    // 创建一个用于筛选Blobs的命名空间
    namespace, err := share.NewBlobNamespaceV0([]byte("test"))
    if err != nil {
        return err
    }

    // 使用一个<-chan *blob.SubscriptionResponse通道来订阅新的Blobs
    blobChan, err := client.Blob.Subscribe(ctx, namespace)
    if err != nil {
        return err
    }

    for {
        select {
        case resp := <-blobChan:
            fmt.Printf("在test命名空间的高度为 %d 处发现了 %d 个Blobs \n", resp.Height, len(resp.Blobs))
        case <-ctx.Done():
            return nil
        }
    }
}
```

## 订阅新区块头
另外，你可以使用 “header.Subscribe” 方法来订阅新区块头。该方法会返回一个通道，当有新区块头产生时，这个通道将会接收它们。在这个示例中，我们将获取新区块头所在高度的所有Blobs。

```go
// SubscribeHeaders订阅新区块头，并获取“test”命名空间中新区块头所在高度的所有Blobs。
func SubscribeHeaders(ctx context.Context, url string, token string) error {
    client, err := client.NewClient(ctx, url, token)
    if err != nil {
        return err
    }

    // 创建一个用于筛选Blobs的命名空间
    namespace, err := share.NewBlobNamespaceV0([]byte("test"))
    if err != nil {
        return err
    }

    // 使用一个<-chan *header.ExtendedHeader通道来订阅新区块头
    headerChan, err := client.Header.Subscribe(ctx)
    if err != nil {
        return err
    }

    for {
        select {
        case header := <-headerChan:
            // 获取新区块头所在高度的所有Blobs
            blobs, err := client.Blob.GetAll(context.TODO(), header.Height(), []share.Namespace{namespace})
            if err != nil {
                fmt.Printf("获取Blobs时出错： %v\n", err)
            }

            fmt.Printf("在test命名空间的高度为 %d 处发现了 %d 个Blobs\n", header.Height(), len(blobs))
        case <-ctx.Done():
            return nil
        }
    }
}
```


## 获取扩展数据块（EDS）
你可以使用 “share.GetEDS” 方法来获取扩展数据块（EDS）。该方法接收一个区块头作为参数，并返回给定高度的扩展数据块（EDS）。
```go
// GetEDS获取给定高度的扩展数据块（EDS）。
func GetEDS(ctx context.Context, url string, token string, height uint64) (*rsmt2d.ExtendedDataSquare, error) {
    client, err := client.NewClient(ctx, url, token)
    if err != nil {
        return nil, err
    }

    // 首先获取你想要从中获取扩展数据块（EDS）的区块的区块头
    header, err := client.Header.GetByHeight(ctx, height)
    if err != nil {
        return nil, err
    }

    // 获取扩展数据块（EDS）
    return client.Share.GetEDS(ctx, header)
}
```


## go-da
go-da 为模块化区块链定义了一个通用的数据可用性接口。Gatenode-openrpc支持 go-da 的所有接口。

### 数据可用性（DA）接口

| Method        | Params                                                   | Return          |
| ------------- | -------------------------------------------------------- | --------------- |
| `MaxBlobSize` |                                                          | `uint64`        |
| `Get`         | `ids []ID, namespace Namespace`                          | `[]Blobs`       |
| `GetIDs`      | `height uint64, namespace Namespace`                     | `[]ID`          |
| `GetProofs`   | `ids []id, namespace Namespace`                          | `[]Proof`       |
| `Commit`      | `blobs []Blob, namespace Namespace`                      | `[]Commitment`  |
| `Validate`    | `ids []Blob, proofs []Proof, namespace Namespace`        | `[]bool`        |
| `Submit`      | `blobs []Blob, gasPrice float64, namespace Namespace`    | `[]ID`          |
