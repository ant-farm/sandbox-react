import React from 'react';
import './App.css';
import ListingsContainer from './ListingsContainer';
import LoginRegisterForm from './LoginRegisterForm'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      loggedIn: false,
      loggedInUser: null
    }
  }


  login = async(loginInfo) => {
    const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/agents/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(loginInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsedLoginResponse = await response.json()
    if(parsedLoginResponse.status.code === 200) {
      this.setState({
        loggedIn: true,
        loggedInUser: parsedLoginResponse.data
      })
    } else{
      console.log('Login Failed')
      console.log(parsedLoginResponse);
    }
  }

  register = async (registerInfo) => {
    const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/agents/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(registerInfo),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    const parsedRegisterResponse = await response.json()
    if(parsedRegisterResponse.status.code === 201){
      this.setState({
        loggedIn: true,
        loggedInUser: parsedRegisterResponse.data
      })
    } else {
      console.log('Register Failed')
      console.log(parsedRegisterResponse)
    }
  }

  render(){
    return(
      <div className='App'>
        {
          this.state.loggedIn
          ?
          <ListingsContainer user={this.state.loggedInUser}/>
          :
          <LoginRegisterForm login={this.login} register={this.register} />
        }

      </div>
    );
  }
}

export default App;
