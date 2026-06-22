/*
# > 开拍解锁永久会员
[rewrite_local]
^https?:\/\/api\.account\.meitu\.com\/users\/show_current\.json|https?:\/\/api-sub\.meitu\.com\/v2\/user\/info_by_entrance\.json|https?:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info\.json|https?:\/\/api\.dreamavatar\.com\/v1\/api\/2d\/product\/query|https?:\/\/api\.dreamavatar\.com\/v1\/api\/2d\/ai\/video\/pretreate|https?:\/\/api\.dreamavatar\.com\/v1\/api\/2d\/user\/rights|https?:\/\/api\.dreamavatar\.com\/v1\/api\/2d\/ai\/video\/generate.*? url script-response-body https://raw.githubusercontent.com/andyeason/quanX/main/Scripts/kaipai.js


[mitm]
hostname = api.account.meitu.com,api-sub.meitu.com,api-sub.meitu.com,api.dreamavatar.com,api.dreamavatar.com,api.dreamavatar.com,api.dreamavatar.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"has_recharge\":\w+/g,'"has_recharge":true');
body = body.replace(/"has_income\":\w+/g,'"has_income":true');
body = body.replace(/"idcard_status\":\d/g,'"idcard_status":1');
body = body.replace(/"blue_v_status\":\d/g,'"blue_v_status":1');
body = body.replace(/"red_v_status\":\d/g,'"red_v_status":1');
body = body.replace(/"profile_status\":\d/g,'"profile_status":1');
body = body.replace(/"is_vip\":\w+/g,'"is_vip":true');
body = body.replace(/"use_vip\":\w+/g,'"use_vip":true');
body = body.replace(/"limit_type\":\d/g,'"limit_type":1,"valid_time":"1699963630215","invalid_time":"10088413749000","sub_type":3,"sub_type_name":"续期","active_product_id":"0","active_order_id":"7130164253000222784","active_sub_order_id":"7130164253243492418","active_sub_type":3,"active_sub_type_name":"续期","active_promotion_status":2,"active_promotion_status_list":[2]');
body = body.replace(/"in_trial_period\":\w+/g,'"in_trial_period":true,"trial_period_invalid_time":"10088413749000","current_order_invalid_time":"10088413749000","derive_type":3,"derive_type_name":"高级会员","membership":{"id":"28","display_name":"开拍高级会员","level":2,"level_name":"高级会员"}');
body = body.replace(/"product_level\":\d/g,'"product_level":2');
body = body.replace(/"enough\":\w+/g,'"enough":true');
body = body.replace(/"num_left\":\d+/g,'"num_left":999999');
body = body.replace(/"num_left_str\":".*?"/g,'"num_left_str":"999999秒"');
body = body.replace(/"available\":\d+/g,'"available":999999');
body = body.replace(/"non_member_title\":".*?"/g,'"non_member_title":"你是尊贵的永久会员，可享999999s视频生成效果。"');
body = body.replace(/"normal_title\":".*?"/g,'"normal_title":"生成视频需消耗时长额度，剩余 999999秒",');
body = body.replace(/"total\":\d+/g,'"total":999999');
body = body.replace(/"code\":1901/g,'"code":0');
body = body.replace(/"msg\":"时长不足"/g,'"msg":"ok"');
body = body.replace(/"data\":{}/g,'"data":{"avatar_id":"999999999999999","current_time_unix":1699967142,"need_seconds":80,"submit_time_unix":1699967142}');
$done(body);