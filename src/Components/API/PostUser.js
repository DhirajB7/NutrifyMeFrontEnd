import { BaseURL } from './Properties';



async function PostUser(data){

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify(
    { 
      "userId":data.username,
      "username":data.username,
      "firstname":data.firstname,
      "lastname":data.lastname,
      "email":data.email,
      "password":data.password,
      "phone":parseInt(data.phonenumber),
      "role":"USER",
      "caloriesPerDay":parseInt(data.cal),
      "userStatus":false
    }
    );
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch(BaseURL+"/user", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export default PostUser