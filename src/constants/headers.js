/**
 * 通用头信息-GET.
 */
export function COMMON_HEADERS(key, value) {
	let result = {
		"Verification-Hash": "normandiedada",
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
		// "Verification-Hash": "normandiedada",
		"content-type": "application/x-www-form-urlencoded"
	};

	key && (result[key] = value);
	return result;
}