/*
雅俗共赏
2024年9月6日 21:04:37
Author：Andy
https://apps-api.lianaishouce.cn/user/getUserInfo
{"code":0,"msg":"操作成功","data":{"userId":"20131731092131","memberStatus":0,"memberExpireTime":1725599743066,"memberExpireTimeStr":"2024-09-06 13:15:43","registerTime":"2024-09-06 13:15:43","memberStatusStr":"未开通","accountSourceType":1,"accountSourceTypeEnumStr":"微信","avatar":"https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELxbWvb3dORKs9HiaibjncS5d6lw5oYz9Zg4rW8pe8wMnq0vCDOic5ib9rj2OzfCQJ9CuNMrUib27Ess2lggqbb6VQ1WKFasQSUosh17sQUtdUoJcQ/132","remainNum":0,"vipLevel":0,"nickname":"AndyEason","sex":0,"sexStr":"未知","status":0,"statusStr":"正常","sign":"c6b1f8738eda5832564c4a488511f4d7","timestamp":1725628822981,"isForeverVip":false}}


*/

var Q = JSON.parse($response.body);
Q.code = 0;
Q.msg = "操作成功";

Q.data.accountSourceType = 1;
Q.data.accountSourceTypeEnumStr = "微信";
Q.data.avatar = "https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELxbWvb3dORKs9HiaibjncS5d6lw5oYz9Zg4rW8pe8wMnq0vCDOic5ib9rj2OzfCQJ9CuNMrUib27Ess2lggqbb6VQ1WKFasQSUosh17sQUtdUoJcQ/132";
Q.data.isForeverVip = true;//会员
Q.data.memberExpireTime = "4102415999000";
Q.data.memberExpireTimeStr = "2099-12-31 23:59:59";
Q.data.memberStatus = 1;
Q.data.memberStatusStr = "已开通";
Q.data.nickname = "Andy破解";
Q.data.registerTime = "2024-09-06 13:15:43";
Q.data.remainNum = 0;
Q.data.sex = 0;
Q.data.status = 0;
Q.data.statusStr = "正常";
Q.data.sexStr = "未知";
Q.data.vipLevel = 4;
$done({body : JSON.stringify(Q)});