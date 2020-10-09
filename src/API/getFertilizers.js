

 const getFertilizers= async (csrftoken)=>{
    const url = "https://nutricalculator.herokuapp.com/calc/fertilizers"
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
        console.log(response.json());
        return response.json();
      })
      .catch((error) => {
          console.log(error)
        return error;
      });
      return res
    
}

export default getFertilizers
// axios({
//       "method": "GET",
//       "url": "https://quotes15.p.rapidapi.com/quotes/random/",
//       "headers": {
//         "content-type": "application/octet-stream",
//         "x-rapidapi-host": "quotes15.p.rapidapi.com",
//         "x-rapidapi-key": process.env.REACT_APP_API_KEY
//       }, "params": {
//         "language_code": "en"
//       }
//     })
//     .then((response) => {
//       setResponseData(response.data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
