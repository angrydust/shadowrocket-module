// 抖音粉丝数查询小火箭脚本

let body = $response.body;

try {
  let obj = JSON.parse(body);
  if (obj.user && obj.user.follower_count !== undefined) {
    let count = obj.user.follower_count;
    $notification.post("抖音粉丝数", "粉丝数量获取成功", `当前粉丝数：${count}`);
  } else {
    $notification.post("抖音粉丝数", "获取失败", "未找到 follower_count 字段");
  }
} catch (e) {
  $notification.post("抖音粉丝数", "解析失败", e);
}

$done({});
