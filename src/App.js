 
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
export class App extends Component {

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);

    
    
  }
  render() {
    return (
      <div>
        <GoogleLogin
        clientId="27982403622-l1pstu95oo4531v40bcp8qdf6406nubq.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle} 
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        
        />
      </div>
    )
  }
}

export default App