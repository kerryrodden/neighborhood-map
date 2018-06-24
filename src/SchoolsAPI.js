// Helper code for fetching from SFGov's school database

const resource = 'https://data.sfgov.org/resource/mmsr-vumy.json';
const token = 'VjBUoKnmXv033dhB9pFiiqBju';

const headers = {
  'Accept': 'application/json',
  'X-App-Token': token
};

export const getAllPublicElementary = () => {
  const query = 'SELECT * WHERE ccsf_entity="SFUSD" AND lower_grade < 1 AND upper_grade > 1';
  const url = resource + '?$' + encodeURIComponent(query);
  console.log(url);
  return fetch(url, { headers })
    .then(response => response.json());
}
