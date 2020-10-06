
const getLogin=async(data,csrftoken)=>{
  const url = "https://nutricalculator.herokuapp.com/api/auth/login";
  const result = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "X-CSRFToken": csrftoken,
        // "kXi4Qapw1lDDTSNjmFwUbdWbf03SeQdOiKjEyFH0NcOLX9dKemoFHyUKPREfk09W",
      "Accept": "application/json",
      "Content-Type":"application/json",
    },
    body: JSON.stringify(data),
  });
  return result.json()
}

export default  getLogin