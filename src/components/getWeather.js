

const getWeather = async ({ lat, lng }) => {
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9281dccaff366986bb8ab36a4dcaba3f`;
  try {
    const response = await fetch(url).then((result)=>{console.log(result.json())})
    const res = await response();
    return res
  } catch (error) {
  }
}

export default getWeather