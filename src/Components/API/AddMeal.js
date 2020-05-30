import { getValueFromCookie } from "./CookieOperations";
import { BaseURL } from "./Properties";

function AddMeal(foodName,foodDescription){

var user = getValueFromCookie("Username")

var myHeaders = new Headers();
myHeaders.append("Authorization", getValueFromCookie("Authorization") );
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "foodName":foodName,
    "foodDescription":foodDescription,
    "calorie":0,
    "date":"date",
    "time":"time",
    "addedByUserName":user
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(BaseURL+"/meal/add/"+user, requestOptions)
  .then(response => response.text())
  .then(result => {
    alert(result)
    window.location.reload()
  })
  .catch(error => console.log('error', error));

  

}

export default AddMeal