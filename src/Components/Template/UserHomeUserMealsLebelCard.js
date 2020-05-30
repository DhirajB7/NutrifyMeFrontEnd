import React, { Component } from 'react'
import PreLoader from './PreLoader';
import LabelCardComponent from './LabelCardComponent';

class UserHomeUserMealsLebelCard extends Component {


    
    state = {
        isDataNotReady:true
      }

      componentDidMount(){
        
        setTimeout(() => {
          this.dataCheck()
        }, 700);
    
      }

      dataCheck = () => {
        if(localStorage.getItem('thisUser').length>2){
    
          this.setState({
            isDataNotReady:false
          })

        }else{
    
          this.setState({
            isDataNotReady:true
          })
    
        }
      }


    render(){

        if(this.state.isDataNotReady){
            return(
              <PreLoader/>
            )
          }

    return (

    <React.Fragment>

            {localStorage.getItem('thisUser').split("{")
              .filter(element =>element.includes("/")).map(a => {
               return  <LabelCardComponent key={a} date={a.split("=")[0]} obj={a.split("=")[1].replace("[","").replace("]},","").split(",")}/> 
                  }) }
    
     

     </React.Fragment>

     
    )
}


}

export default UserHomeUserMealsLebelCard
