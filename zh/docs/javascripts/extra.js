window.MathJax = {
    tex: {
        inlineMath: [
            ["\\(", "\\)"]
        ],
        displayMath: [
            ["\\[", "\\]"]
        ],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex"
    }
};

document$.subscribe(() => {
    MathJax.typesetPromise()
})
var items=document.getElementsByTagName("a");
for(var i=0;i<items.length;i++){
    if(items[i].getAttribute("href").indexOf("http")==0){
        items[i].setAttribute("target","_blank")
    }
}