// 抖音粉丝数查询脚本，支持 aweme 和直播 profile

let body = $response.body;
let url = $request.url;

try {
  let obj = JSON.parse(body);

  if (url.includes("/aweme/v1/web/user/profile/other/")) {
    // 普通抖音个人页
    if (obj.user && obj.user.follower_count !== undefined) {
      let count = obj.user.follower_count;
      $notification.post("抖音粉丝数 (普通)", "粉丝数获取成功", `当前粉丝数：${count}`);
    } else {
      $notification.post("抖音粉丝数 (普通)", "获取失败", "未找到 follower_count 字段");
    }

  } else if (url.includes("/webcast/user/profile/")) {
    // 直播个人页
    if (obj.data && obj.data.user_profile && obj.data.user_profile.follow_info && obj.data.user_profile.follow_info.follower_count !== undefined) {
      let count = obj.data.user_profile.follow_info.follower_count;
      $notification.post("抖音粉丝数 (直播)", "粉丝数获取成功", `当前粉丝数：${count}`);
    } else {
      $notification.post("抖音粉丝数 (直播)", "获取失败", "未找到 follower_count 字段");
    }

  } else {
    $notification.post("抖音粉丝数", "未知请求", url);
  }

} catch (e) {
  $notification.post("抖音粉丝数", "解析失败", e);
}

$done({});
