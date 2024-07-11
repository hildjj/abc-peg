version = "%abc-" @integer "." @integer

integer = n:$[0-9+] { return parseInt(n, 10); }
