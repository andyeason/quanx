/**
 * kaipai.js
 */
const url = $request.url;
let body = JSON.parse($response.body);

if (url.includes("/v1/h5/vip/new_sub_detail.json")) {
    // 原始规则中包含大量的素材数据，直接注入
    body = {
        "error_code": 0, "ret": 0, "degrade": 0,
        "data": { "uid": 1949595679, "expire_days": -8, "sub_type": 3, "vip_type": 101, "invalid_time": 3690247568 }
    };
} 
else if (url.includes("/v1/vip/vip_show.json")) {
    body = {
        "degrade": 0, "error_code": 0, "ret": 0,
        "data": { "uid": 1949595679, "sub_type": 3, "is_expire": 0, "expire_days": -9999, "vip_type": 101, "in_valid_time": 3690247568 }
    };
} 
else if (url.includes("/v1/vip/prompt/query.json")) {
    body.data.home_prompt = "永久会员";
    body.data.material_center_vip_info = { "vip_icon": "https://xximg1.meitudata.com/7055814983189556222.png", "desc": "欢迎回来！尊贵的粉钻SVIP", "btn_vip_type": 1 };
} 
else if (url.includes("/v1/vip/sub_popup.json")) {
    body = { "degrade": 0, "error_code": 0, "data": {}, "msg": "成功", "error": "Ok", "ret": 0 };
} 
else if (url.includes("/v2/user/vip_info.json")) {
    body.data = {
        "is_vip": true, "sub_type": 2, "vip_type": 101,
        "membership": { "display_name": "高级粉钻VIP", "level": 2 },
        "invalid_time": "3690300799000", "have_valid_contract": true
    };
} 
else if (url.includes("/v2/user/info_by_entrance.json")) {
    body.data.is_vip = true;
    body.data.vip_end_time = 3690247568;
}

$done({ body: JSON.stringify(body) });