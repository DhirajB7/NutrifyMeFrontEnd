import Axios from 'axios'


const baseURL = 'http://localhost:8080/login'

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
      await Axios.post(baseURL,JSON.stringify(bodyData))
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