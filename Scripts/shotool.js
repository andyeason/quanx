if (!$response.body) {
  $done({});
}
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("mod=config")) {
  if (obj?.data) {
	delete obj.data.modalNotice;
  }
}

body = JSON.stringify(obj);
$done({body});