import React from 'react'
import { Form, Button, Label, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.loginRegister()
	}

	render() {
    return(
      <div className="LoginRegisterForm">
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
               Log-in to your account
            </Header>

        <Form size='large' onSubmit={this.handleSubmit}>
          {
            this.state.action === "register"
            ?
            <Segment stacked>
            <React.Fragment>
              <Label>First name:</Label>
              <Form.Input 
                type="text" 
                name="first_name" 
                value={this.state.first_name}
                onChange={this.handleChange}
              />
               <Label>Last name:</Label>
              <Form.Input 
                type="text" 
                name="last_name" 
                value={this.state.last_name}
                onChange={this.handleChange}
              />
                <Label>Phone number:</Label>
              <Form.Input 
                type="text" 
                name="phone_number" 
                value={this.state.phone_number}
                onChange={this.handleChange}
              />
                <Label>Company:</Label>
              <Form.Input 
                type="text" 
                name="company" 
                value={this.state.company}
                onChange={this.handleChange}
              />

            </React.Fragment>
            </Segment>
            :
            null
          }
            
              <Segment stacked>
                <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                placeholder='E-mail address'
                type="email" 
                name="email" 
                value={this.state.email}
                onChange={this.handleChange} 
                />

                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name="password" 
                  value={this.state.password}
                  onChange={this.handleChange}
                  />

                <Button color='teal' fluid size='large' type="Submit">{this.state.action === "register" ? "Register" : "Log in" }</Button>
                
              </Segment>
            </Form>
            {
              this.state.action === "register"
              ?
              <small>Already have an account? Log in <span onClick={this.switchForm}>here</span>.</small>
              :
              <small>Need an account? Sign up <span onClick={this.switchForm}>here</span>!</small>  
            }
          </Grid.Column>
        </Grid>
        </div>

      )
  }
}





export default LoginRegisterForm