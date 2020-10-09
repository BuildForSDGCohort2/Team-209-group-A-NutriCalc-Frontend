const getPlants = async (csrftoken) => {
  const url = "https://nutricalculator.herokuapp.com/calc/plants";
  const res = await fetch(url, {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "X-CSRFToken": csrftoken,
      // "kXi4Qapw1lDDTSNjmFwUbdWbf03SeQdOiKjEyFH0NcOLX9dKemoFHyUKPREfk09W",
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error.message;
    });
  
  return res;
};

export default getPlants;
