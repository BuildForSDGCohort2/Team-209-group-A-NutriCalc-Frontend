
const getFarms = async () => {
  const url = "https://nutricalculator.herokuapp.com/calc/farms";
  const call =await fetch(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.message;
    });
  const response = await call();
  return response.json();
};

export default getFarms;


