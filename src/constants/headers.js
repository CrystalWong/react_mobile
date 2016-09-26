/**
 * 通用头信息-GET.
 */
export function COMMON_HEADERS(key, value) {
	let result = {
		"content-type": "application/json"
	};

	key && (result[key] = value);
	return result;
}

/**
 * 通用头信息-POST.
 */
export function COMMON_HEADERS_POST(key, value){
	let result = {
		// "content-type": "application/x-www-form-urlencoded"  //post默认
		"content-type": "application/json"
	};

	key && (result[key] = value);
	return result;
}

export let SIGN = "97EAC9AE44F9D5C1F53DABC1F5C156BF"