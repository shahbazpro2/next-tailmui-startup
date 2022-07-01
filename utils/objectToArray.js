function objectToArray(obj, arr = []) {
	if (typeof obj === "object") {
		for (var key in obj) {
			if (typeof obj[key] === "object") {
				objectToArray(obj[key], arr)
			} else {
				if (key === 'icabbi_error') arr.push(`${key}: ${obj[key]}`)
				else if (key !== "code") arr.push(obj[key])
			}
		}
		return arr
	}
	arr.push(obj)

	return arr
}

export default objectToArray
