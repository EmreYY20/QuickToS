// background.js
async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/EE21/BART-ToSSimplify",
		{
			headers: { Authorization: "Bearer HUGGINFACEKEY" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}
