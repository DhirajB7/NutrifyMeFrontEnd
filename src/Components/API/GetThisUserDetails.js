import { getValueFromCookie } from "./CookieOperations";
import { BaseURL } from "./Properties";

async function GetThisUserDetails(){
    var myHeaders = new Headers();
myHeaders.append("Authorization", getValueFromCookie("Authorization"));

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

await fetch(BaseURL+"/user/this/"+getValueFromCookie("Username"), requestOptions)
  .then(response => response.text())
  .then(result =>{
    localStorage.setItem('thisUser',result)
  })
  .catch(error => console.log('error', error));
}

export default GetThisUserDetails