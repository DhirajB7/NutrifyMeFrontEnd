import { BaseURL } from "./Properties";
import { getValueFromCookie } from "./CookieOperations";

function PutMealDescription(mealName,newDesc){
 var myHeaders = new Headers();
myHeaders.append("Authorization", getValueFromCookie("Authorization"));

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(BaseURL+"/meal/"+mealName+"/desc/"+newDesc, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export default PutMealDescription