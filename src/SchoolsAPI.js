// Helper code for fetching from SFGov's school database

const resource = 'https://data.sfgov.org/resource/mmsr-vumy.json';
const token = 'VjBUoKnmXv033dhB9pFiiqBju';

const headers = {
  'Accept': 'application/json',
  'X-App-Token': token
};

// Extract fields from the JSON that we want to use, and put them in a convenient form.
const preprocess = (json) => {
  return json.map(result => ({
    name: result.campus_name,
    position: {
      lat: result.location_1.coordinates[1],
      lng: result.location_1.coordinates[0]
    },
    address: result.campus_address,
    gradeRange: result.grade_range,
    district: result.supervisor_district,
    id: result.map_label,
    open: false
  }));
}

  // This query retrieves all of the public schools that include kindergarten
export const getAllPublicElementary = () => {
  const query = 'SELECT * WHERE ccsf_entity="SFUSD" AND lower_grade < 1 AND upper_grade > 1';
  const url = resource + '?$query=' + encodeURIComponent(query);
  return fetch(url, { headers })
    .then(response => response.json())
    .then(json => preprocess(json));
}
