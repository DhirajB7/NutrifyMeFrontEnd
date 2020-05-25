import React from 'react'

function Message(props) {
    return (
        <div className="ui green huge message">
        <div className="header">
          {props.heading}
        </div>
        {props.message}
      </div>
    )
}

export default Message