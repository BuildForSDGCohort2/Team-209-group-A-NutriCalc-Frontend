
const getLocation= async ()=>{
    const url = "https://apility-io-ip-geolocation-v1.p.rapidapi.com/%7Bip%7D";
    try {
        const resp = async()=>{await fetch(url, {
          method: "GET",
          query: { format: "json" },
          headers: {
            "x-rapidapi-host": "apility-io-ip-geolocation-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "ad6b92cfdf0msh41581692f8b3841p131574jsnde26edf72323",
            useQueryString: true,
          },
        });}
        const {response}= await resp()
        return response
        
    } catch (error) {
        console.log(error)
    }
    
}

export default getLocation