import { BaseURL } from "./Properties";
import { getValueFromCookie } from "./CookieOperations";

function PutUserStatus(un,status){
 var myHeaders = new Headers();
myHeaders.append("Authorization", getValueFromCookie("Authorization"));

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(BaseURL+"/user/"+un+"/status/"+status, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export default PutUserStatus