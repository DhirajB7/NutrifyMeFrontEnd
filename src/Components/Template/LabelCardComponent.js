import React from 'react'
import UserHomeUserMealsLabel from './UserHomeUserMealsLabel'
import OneLineGap from './OneLineGap'

function LabelCardComponent(props) {
    console.log(props.obj.map(a => a.split(":")[0]))
    console.log(props.obj.map(a => a.split(":")[1]))
    return (
        <React.Fragment>
            <br/>
        <div className="ui big teal tag label">
       {props.date}
        </div>

        <OneLineGap/>

        <div className="ui six cards">
           {
               props.obj.map(a => {
               return <UserHomeUserMealsLabel foodName={a.split(":")[0]} cal={a.split(":")[1]}/>
                })
           }
            
        </div>

        <br/>
        <hr/>
        <hr/>
        
        

    
</React.Fragment>
    )
}

export default LabelCardComponent
