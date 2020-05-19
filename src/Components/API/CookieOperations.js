export function getValueFromCookie(data){
 
        return localStorage.getItem(data)
    
  }


 export function deleteAllCookies(){
    var allCookies = document.cookie.split(';')
  
    // The "expire" attribute of every cookie is  
    // Set to "Thu, 01 Jan 1970 00:00:00 GMT" 
    for (var i = 0; i < allCookies.length; i++) {
           document.cookie = allCookies[i] + "=;expires=" + new Date(0).toUTCString(); 
    }
    
  }

