const getScores = async (id) => {
  const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  const response = await fetch(apiUrl, { method: 'GET' });
  const scores = await response.json();
  return scores;
};
const postScores = async (id, body) => {
  const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export { getScores, postScores };