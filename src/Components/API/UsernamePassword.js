import Axios from 'axios'
import { BaseURL } from './Properties'


const path = '/login'

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
      await Axios.post(BaseURL+path,JSON.stringify(bodyData))
                    .then((response)=> {
                        key = response.data
                    }
                    )

                    .catch(()=>{
                        flag = true;
                        alert("WRONG USERNAME OR WORNG PASSWORD, TRY AGAIN.")
                    })

    if(!flag){
        localStorage.setItem('status',key.status)
       return key
    }
    
}

export default UsernamePassword