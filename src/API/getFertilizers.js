

 const getFertilizers= async ()=>{
    const url = "https://nutricalculator.herokuapp.com/calc/fertilizers"
    const res=await fetch(url).then((response)=>{
        console.log(response.json())
        return response.json()
    }).catch((error)=>{
        return error
    })
    const results= await res.json()
    return results
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
