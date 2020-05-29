import { BaseURL} from "./Properties";

function VerifyUsername(data){

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(BaseURL+"/user/check/"+data, requestOptions)
    .then(response => response.text())
    .then(result => localStorage.setItem('username',result))
    .catch(error => console.log('error', error));
  
}

export default VerifyUsername

