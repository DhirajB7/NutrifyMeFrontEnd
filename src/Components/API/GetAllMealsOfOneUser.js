import Axios from 'axios'
import { getValueFromCookie } from "./CookieOperations";
import { BaseURL } from './Properties';

const path = '/meal/all/'

async function GetAllMealsOfOneUser(data){

  const token =  getValueFromCookie("Authorization").trim()

    
    let flag = false

    let key = ''

  await Axios.get(BaseURL+path+data,{ headers: { Authorization: token}})
                        .then((response)=>{
                        key = response
                        })
                        .catch((err) => {
                          flag = true
                          console.log(err)
                        alert("NO DATA FETCHED FROM BACKEND.")
                        })


                        if(!flag){
                          localStorage.setItem("myMealsLength",key.data.length)
                          return key
                         }
   
}

export default GetAllMealsOfOneUser