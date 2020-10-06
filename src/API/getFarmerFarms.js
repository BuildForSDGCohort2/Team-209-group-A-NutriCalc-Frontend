 

const getFarmerFarms = async ({id}) => {
  const url = `https://nutricalculator.herokuapp.com/calc/farmer/${id}/farms`;
  const res =await fetch(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.message;
    });
  const response = await res.json();
  return response;
};

export default getFarmerFarms;








 