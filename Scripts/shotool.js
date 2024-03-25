if (!$response.body) {
  $done({});
}
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("mod=config")) {
	obj.data.modalNotice.show = false;
}

body = JSON.stringify(obj);
$done({body});