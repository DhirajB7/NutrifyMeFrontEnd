import React from 'react'

function Login() {

    return (
       

        <div style={{height: '100vh'}} className="ui center aligned middle aligned grid">
            <div style={{maxWidth: '450px'}} className="column">
                <h2 className="ui teal center aligned header"> Log-in to your account</h2>
                <form className="ui large form">
                    <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui fluid left icon input">
                                <input type="text" placeholder="E-mail address" />
                                <i aria-hidden="true" className="user icon" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui fluid left icon input">
                                <input type="password" placeholder="Password" />
                                <i aria-hidden="true" className="lock icon" />
                            </div>
                        </div>
                    <button className="ui teal large fluid button">Login</button>
                    </div>
                </form>
                <div className="ui message"><a href="/">BACK TO HOME PAGE</a></div>
             </div>
            </div>

            
    )
}

export default Login
