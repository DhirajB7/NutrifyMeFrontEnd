import Axios from 'axios'
import { getValueFromCookie } from "./CookieOperations";
import { BaseURL } from './Properties';

const path = '/meal/all'

async function GetAllMeals(){

  const token =  getValueFromCookie("Authorization").trim()

    
    let flag = false

    let key = ''

  await Axios.get(BaseURL+path,{ headers: { Authorization: token}})
                        .then((response)=>{
                        key = response
                        })
                        .catch((err) => {
                          flag = true
                          console.log(err)
                        alert("NO DATA FETCHED FROM BACKEND.")
                        })


                        if(!flag){
                          localStorage.setItem("mealsLength",key.data.length)
                          return key
                         }
   
}

export default GetAllMeals