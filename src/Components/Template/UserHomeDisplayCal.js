import React,{Component} from 'react'
import PreLoaderSmall from './PreLoaderSmall'
import GetThisUserDetails from '../API/GetThisUserDetails'

class UserHomeDisplayCal extends Component {

  state = {
    expectedCal : 0,
    actualCal : 0,
    isDataNotReady:true
  }

  componentDidMount(){
    
    GetThisUserDetails()
    
    setTimeout(() => {
      this.dataCheck()
    }, 1000);

  }

  dataCheck = () => {
    if(localStorage.getItem('thisUser').length>2){

      this.setState({
        isDataNotReady:false
      })

      this.setState({
        expectedCal : parseInt(localStorage.getItem('thisUser').split(" ")[0])
      })

      this.setState({
        actualCal : this.getActualCal(localStorage.getItem('thisUser'))
      })

    }else{

      this.setState({
        isDataNotReady:true
      })

    }
  }

  getActualCal = (data) => {

   

      var array = data.split("},")[data.split("},").length-2].split("=")[1].split(",")

      var answer = 0;

      for(var i = 0 ; i < array.length ;i++){
        answer += parseInt(array[i].split(":")[1].replace("]",""))
      }

    return answer

  }



  render(){

    if(this.state.isDataNotReady){
      return(
        <PreLoaderSmall/>
      )
    }


    return (
        <div>
           
           <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
          <div className="ui statistic">
        <div className=" value">
          {this.state.expectedCal}
        </div>
        <div className="label">
          EXPECTED
        </div>
      </div>
          </div>
          <div className="column">
          <div className="ui statistic">
        <div className="value">
          {this.state.actualCal}
        </div>
        <div className="label">
          ACTUAL
        </div>
      </div>
          </div>
        </div>
        <div className="ui vertical divider">
          CALORIES
        </div>
      </div>
           

        </div>
    )
}
  
}

export default UserHomeDisplayCal
