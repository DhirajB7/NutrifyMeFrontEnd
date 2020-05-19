import axios from 'axios'


const baseURL = "http://127.0.0.1:8080/login"

/**
 * @return json with auth and role
 * @param {*} username 
 * @param {*} password 
 */
async function UsernamePassword(username,password) {

    let bodyData = {
         username:username,
         password:password
    }

    let flag = false

    let key = ''
      await axios.post(baseURL,JSON.stringify(bodyData))
                    .then((response)=> key = response.data)
                    .catch(()=>{
                        flag = true;
                        alert("WRONG USERNAME OR WORNG PASSWORD, TRY AGAIN.")
                    })

    if(!flag){
       return key
    }
    
}

export default UsernamePassword