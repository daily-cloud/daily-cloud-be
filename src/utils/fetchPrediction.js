async function fetchPrediction(content) {
  // Create form data
  const formData = new URLSearchParams();
  formData.append('text', content);

  // Fetch prediction
  const response = await fetch(
    'https://daily-cloud-predict-api-e5zoegfyha-et.a.run.app/api/predict/depression',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formData.toString(),
    }
  );
  const prediction = await response.json();
  const result = await prediction;

  return result;
}

module.exports = fetchPrediction;
