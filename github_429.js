// 监听请求并修改请求头
$httpClient.beforeRequest = function(request) {
    // 检查是否是 githubusercontent.com 的请求
    if (request.url.includes('githubusercontent.com')) {
        // 修改 Accept-Language 为 en-us
        request.headers['Accept-Language'] = 'en-us';
    }
};

// 继续处理请求
$httpClient.request = function(request) {
    // 发送修改后的请求
    $httpClient.send(request);
};
