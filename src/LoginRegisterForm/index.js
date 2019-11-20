import React from 'react'
import { Form, Button, Label } from 'semantic-ui-react'

class LoginRegisterForm extends React.Component{
	constructor(){
		super()

		this.state= {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			phone_number: '',
			company_name: '',
			action: 'login'
		}
	}

	loginRegister = () => {
		if(this.state.action === 'login') {
			this.props.login({
				email: this.state.email,
				password: this.state.password
			})
		} else{
			this.props.register({
				first_name: this.state.first_name,
				last_name: this.state.last_name,
				email: this.state.email,
				password: this.state.password,
				phone_number: this.state.phone_number,
				company_name: this.state.company_name
			})
		}
	}

	switchForm = () => {
		if(this.state.action === 'login'){
			this.setState({
				action: 'register'
			})
		} else{
			this.setState({
				action: 'login'
			})
		}
	}

	handleChange = (e) => {
		e.preventDefault()
		this.loginRegister()
	}

	render() {
    return(
      <div className="LoginRegisterForm">
        <Form onSubmit={this.handleSubmit}>
          {
            this.state.action === "register"
            ?
            <React.Fragment>
              <Label>Email:</Label>
              <Form.Input 
                type="text" 
                name="email" 
                value={this.state.email}
                onChange={this.handleChange}
              />
            </React.Fragment>
            :
            null
          }

          <Label>Email:</Label>
          <Form.Input 
            type="email" 
            name="email" 
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Label>Password:</Label>
          <Form.Input 
            type="password" 
            name="password" 
            value={this.state.password}
            onChange={this.handleChange}
          />          
          <Button type="Submit">{this.state.action === "register" ? "Register" : "Log in" }</Button>
        </Form>
        {
          this.state.action === "register"
          ?
          <small>Already have an account? Log in <span onClick={this.switchForm}>here</span>.</small>
          :
          <small>Need an account? Sign up <span onClick={this.switchForm}>here</span>!</small>  
        }
      </div>
    )
  }

}

export default LoginRegisterForm