#!/usr/bin/expect

set branch [lindex $argv 0]

spawn git pull origin $branch

expect {
	"Enter passphrase for key '/root/.ssh/id_ed25519':" {
		send "root\r";
	}
}
expect eof
