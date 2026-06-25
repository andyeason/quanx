/**
 * kaipai.js - 完整数据替换逻辑
 */
const url = $request.url;
let body = $response.body;

// 1. 处理 new_sub_detail.json
if (url.includes("/v1/h5/vip/new_sub_detail.json")) {
    // 请在此处粘贴您原始 JSON 中 new_sub_detail.json 对应的完整 modifyValue 内容
    $done({ body: '{"error_code":0,"ret":0,"degrade":0,"data":{...此处省略完整内容，请务必完整粘贴...}}' });
}
// 2. 处理 vip_show.json
else if (url.includes("/v1/vip/vip_show.json")) {
    $done({ body: '{"degrade":0,"error_code":0,"data":{"id":7086875445932852142,"valid_time":1689642774,"uid":1949595679,"sub_type":3,"is_expire":0,"expire_days":-9999,"vip_type":101,"sub_name":"包年","renew":2,"in_valid_time":3690247568},"msg":"成功","error":"Ok","ret":0}' });
}
// 3. 处理 prompt/query.json
else if (url.includes("/v1/vip/prompt/query.json")) {
    $done({ body: '{"degrade":0,"ret":0,"error_code":0,"error":"Ok","msg":"成功","data":{"home_prompt":"永久会员","material_center_vip_info":{"vip_icon":"https://xximg1.meitudata.com/7055814983189556222.png","desc":"欢迎回来！尊贵的粉钻SVIP","btn_vip_type":1}}}' });
}
// 4. 处理 sub_popup.json
else if (url.includes("/v1/vip/sub_popup.json")) {
    $done({ body: '{"degrade":0,"error_code":0,"data":{},"msg":"成功","error":"Ok","ret":0}' });
}
// 5. 处理 vip_info.json
else if (url.includes("/v2/user/vip_info.json")) {
    $done({ body: '{"code":0,"message":"success","data":{"is_vip":true,"membership":{"display_name":"高级粉钻VIP","level":2},"invalid_time":"3690300799000","valid_time":"1689642774068"},"success":true,"error_code":"00000"}' });
}
// 6. 处理 info_by_entrance.json
else if (url.includes("/v2/user/info_by_entrance.json")) {
    $done({ body: '{"ret":0,"error_code":0,"data":{"id":1949595679,"screen_name":"龙跃先生","is_vip":true,"vip_end_time":3690247568}}' });
}
// 7. 通用替换 vip_type:0 为 vip_type:3
else if (body.includes('"vip_type":0')) {
    $done({ body: body.replace(/"vip_type":0/g, '"vip_type":3') });
}
else {
    $done({});
}