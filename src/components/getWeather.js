
const weatherData= async (cood)=>{
  var unirest = require("unirest");
  var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/weather");

  req.query({
    "callback": "test",
    "id": "2172797",
    "units": "%22metric%22 or %22imperial%22",
    "mode": "xml%2C html",
    "q": "London%2Cuk"
  });

  req.headers({
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": "a8e7f2ee07mshdbf885eace139f5p1ca9e6jsn1a68504bd49d",
    "useQueryString": true
  });
req.body({
  "lat":cood.lat,
  "long":cood.long
})

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
}
// const getWeather = async ({ lat, lng }) => {
  
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9281dccaff366986bb8ab36a4dcaba3f`;
//   try {
//     const response = await fetch(url).then((result)=>{console.log(result.json())})
//     const res = await response();
//     return res
//   } catch (error) {
//   }
// }

export default weatherData

