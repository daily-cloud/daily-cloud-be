async function fetchPrediction(content) {
  const apiUrl =
    'https://daily-cloud-predict-api-e5zoegfyha-et.a.run.app/api/predict/depression';

  // Create form data
  const formData = new URLSearchParams();
  formData.append('text', content);

  // Fetch prediction
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: formData.toString(),
  });
  const responseJson = await response.json();

  const result = {
    depression: responseJson.data.depression,
    confidenceScore: responseJson.data.confidenceScore,
  };

  return result;
}

module.exports = fetchPrediction;
