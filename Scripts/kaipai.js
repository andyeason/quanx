/**
 * kaipai.js
 */
const url = $request.url;

if (url.includes("/v1/h5/vip/new_sub_detail.json")) {
    $done({ body: JSON.stringify({
        "error_code": 0, "ret": 0, "degrade": 0,
        "data": { 
            "uid": 1949595679, "exchange_vip": 0, "expire_days": -8, "new_material_num": 10000, 
            "platform": 2, "sub_type": 3, "old_vip_type": 4, "invalid_time": 3690247568,
            "materials": [
                { "type": 6, "name": "海报边框", "items": [{"material_id": "10092371", "material_name": "圣诞水晶球", "url": "https://xxtool-release.zone1.meitudata.com/material/joViVXdRWVmBZgL.png"}, {"material_id": "10092550", "material_name": "重曝杂志", "url": "https://xxtool-release.zone1.meitudata.com/material/KvmIpZn521Eq5X6.png"}, {"material_id": "10092555", "material_name": "梦幻泡泡", "url": "https://xxtool-release.zone1.meitudata.com/material/zXkfX24Jjj6zB4l.png"}, {"material_id": "10092519", "material_name": "精致取色", "url": "https://xxtool-release.zone1.meitudata.com/material/3dgS1ZQPw54eopz.png"}, {"material_id": "10092556", "material_name": "泡沫镜子", "url": "https://xxtool-release.zone1.meitudata.com/material/oodiWgJdjRVRLYL.png"}, {"material_id": "10092473", "material_name": "简笔春日", "url": "https://xxtool-release.zone1.meitudata.com/material/Pv4Id05LjpP6bX2.png"}, {"material_id": "10092529", "material_name": "花语日记", "url": "https://xxtool-release.zone1.meitudata.com/material/joViVG5Xj1q9KGB.png"}, {"material_id": "10092637", "material_name": "童真万岁", "url": "https://xxtool-release.zone1.meitudata.com/material/1W8SmeVdxl5g41m.png"}] },
                { "type": 8, "name": "马赛克", "items": [{"material_id": "10331249", "material_name": "兔兔熊熊", "url": "https://xxtool-release.zone1.meitudata.com/material/gzbfKl6p196jGg5.jpeg"}, {"material_id": "10331242", "material_name": "花漾", "url": "https://xxtool-release.zone1.meitudata.com/material/GqvtJmgO8k1mZqZ.jpeg"}, {"material_id": "10331239", "material_name": "元宵快乐", "url": "https://xxtool-release.zone1.meitudata.com/material/kmzs285y4kVGwKn.jpeg"}, {"material_id": "10331253", "material_name": "花瓣雨", "url": "https://xxtool-release.zone1.meitudata.com/material/wZouv9gVR93JKNj.jpeg"}, {"material_id": "10071203", "material_name": "好运壁纸", "url": "https://xxtool-release.zone1.meitudata.com/material/Q1Pfyx1wBR4ZBdm.jpeg"}, {"material_id": "10331241", "material_name": "女生节", "url": "https://xxtool-release.zone1.meitudata.com/material/NpzfzP0JqYN5bGK.jpeg"}, {"material_id": "10071189", "material_name": "针织圣诞", "url": "https://xxtool-release.zone1.meitudata.com/material/qmVsRaod4Lp19yj.jpeg"}, {"material_id": "10071188", "material_name": "圣诞日", "url": "https://xxtool-release.zone1.meitudata.com/material/Lgvuj5QxLaEK09D.jpeg"}] }
            ],
            "prices": [
                { "sub_id": "6917712101800963397", "sub_name": "连续包月", "product_id": "com.meitu.mtxx.autorenew.vip36", "price": 2000, "title": "连续包月", "agreement_desc": "到期自动续费￥20/月, 可随时取消" },
                { "sub_id": "6917712105294818673", "sub_name": "连续包年", "product_id": "com.meitu.mtxx.autorenew.vip38", "price": 16800, "title": "￥168/年", "agreement_desc": "到期自动续费￥168/年, 可随时取消" }
            ],
            "hbp_vip": { "sub_type": 3, "valid_time": 1689642774, "renew": 2, "expire_days": -888, "is_expire": 0, "in_valid_time": 3690247568, "s": 0 },
            "vip_type": 101,
            "xx_vip": { "sub_type": 3, "valid_time": 1689642774, "renew": 2, "expire_days": -888, "is_expire": 0, "in_valid_time": 3690247568, "s": 0 }
        },
        "msg": "成功", "error": "Ok"
    })});
} 
else if (url.includes("/v1/vip/vip_show.json")) {
    $done({ body: JSON.stringify({
        "degrade": 0, "error_code": 0,
        "data": { "uid": 1949595679, "sub_type": 3, "is_expire": 0, "expire_days": -9999, "vip_type": 101, "in_valid_time": 3690247568 },
        "msg": "成功", "error": "Ok", "ret": 0
    })});
} 
else if (url.includes("/v1/vip/prompt/query.json")) {
    $done({ body: JSON.stringify({
        "degrade": 0, "ret": 0, "error_code": 0, "error": "Ok", "msg": "成功",
        "data": { "home_prompt": "永久会员", "material_center_vip_info": { "vip_icon": "https://xximg1.meitudata.com/7055814983189556222.png", "desc": "欢迎回来！尊贵的粉钻SVIP", "btn_vip_type": 1 } }
    })});
} 
else if (url.includes("/v1/vip/sub_popup.json") || url.includes("/v2/user/vip_info.json") || url.includes("/v2/user/info_by_entrance.json")) {
    // 这里采用通用成功响应，避免重复代码
    $done({ body: JSON.stringify({ "code": 0, "message": "success", "data": { "is_vip": true, "vip_type": 101, "invalid_time": 3690247568 } }) });
} 
else {
    $done({});
}