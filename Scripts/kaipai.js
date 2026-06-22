/*
# > 开拍解锁永久会员

[rewrite_local]
^https?:\/\/api-sub\.meitu\.com\/v2\/user\/(login_vip_check|vip_info|info_by_entrance).*json url script-response-body https://raw.githubusercontent.com/andyeason/quanX/main/Scripts/kaipai.js
[mitm] 
hostname = api-sub.meitu.com

*/

var body = $response.body;
var hausd0rff = JSON.parse(body);

hausd0rff.data = {
    'active_sub_type': 2,
    'account_type': 1,
    'sub_type_name': '续期',
    'active_sub_order_id': '永久会员',
    'trial_period_invalid_time': '',
    'current_order_invalid_time': '32495508000000',
    'active_order_id': '1230010086',
    'limit_type': 0,
    'active_sub_type_name': '续期',
    'use_vip': true,
    'have_valid_contract': true,
    'derive_type_name': '开拍会员',
    'derive_type': 1,
    'in_trial_period': false,
    'is_vip': true,
    'membership': {
        'id': '4',
        'display_name': '开拍会员',
        'level': 1,
        'level_name': '开拍会员'
    },
    'active_promotion_status_list': [2],
    'sub_type': 2,
    'account_id': '7069961436340181123',
    'invalid_time': '32495529599000',
    'valid_time': '1569664800000',
    'active_product_id': '0',
    'active_promotion_status': 2,
    'show_renew_flag': true
};

$done({
    'body': JSON.stringify(hausd0rff)
});