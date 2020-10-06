const getPlants = async () => {
  const url = "https://nutricalculator.herokuapp.com/calc/plants";
  const call = await fetch(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.message;
    });
  const response = await call.json();
  return response;
};

export default getPlants;
