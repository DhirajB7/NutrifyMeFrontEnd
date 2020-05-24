import Axios from 'axios'
import { getValueFromCookie } from "./CookieOperations";
import { BaseURL } from './Properties';

const path = '/user/all'

const token =  getValueFromCookie("Authorization").trim()

async function GetAllUsers(){

 return await Axios.get(BaseURL+path,{ headers: { Authorization: token}})
                        .then((response)=>{
                        return response.data
                        })
                        .catch((err) => {
                        alert("NO DATA FETCHED FROM BACKEND.")
                        })
   
}

export default GetAllUsers