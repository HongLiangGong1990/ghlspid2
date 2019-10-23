function FindProxyForURL(url, host)
{
    url  = url.toLowerCase();
    host = host.toLowerCase();

    if (shExpMatch(url,"*baidu*")) {
            return "PROXY 115.226.132.148:24631; DIRECT";
        };
    
    return "DIRECT";
}