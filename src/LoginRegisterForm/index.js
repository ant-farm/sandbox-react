import React from 'react'
import '../App.css'
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
  // style={{backgroundImage: 'url("https://i1.wp.com/architecturian.co/wp-content/uploads/2019/04/21Contemporary-Home-Exterior-.jpg?fit=1200%2C798&ssl=1")'}} >

	render() {
    return(

      <div className='background-image' style={{backgroundColor: 'wheat'}}> 
  
      <div className="LoginRegisterForm">
    
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }} >
            <Segment stacked>
       
            <Header as='h2' color='teal' textAlign='center' >
               Welcome to Sandbox
            </Header>

        <Form size='large' onSubmit={this.handleSubmit}>
          {
            this.state.action === "register"
            ?
            
            <React.Fragment>
              <Form.Input 
                icon='user'
                iconPosition='left'
                placeholder='First Name'
                type="text" 
                name="first_name" 
                value={this.state.first_name}
                onChange={this.handleChange}
              />
              <Form.Input 
                icon='user'
                iconPosition='left'
                placeholder='Last Name'
                type="text" 
                name="last_name" 
                value={this.state.last_name}
                onChange={this.handleChange}
              />
              <Form.Input 
                icon='phone volume'
                iconPosition='left'
                placeholder='Phone Number'
                type="text" 
                name="phone_number" 
                value={this.state.phone_number}
                onChange={this.handleChange}
              />
              <Form.Input 
                icon="warehouse icon"
                iconPosition='left'
                placeholder='Company'
                type="text" 
                name="company_name" 
                value={this.state.company_name}
                onChange={this.handleChange}
              />

            </React.Fragment>
           
            :
            null
          }
            
              

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
                
           
            </Form>
            {
              this.state.action === "register"
              ?
              <small >Already have an account? Log in <span onClick={this.switchForm}>here</span>.</small>
              :
              <small >Need an account? Sign up <span onClick={this.switchForm}>here</span>!</small>  
            }
               </Segment>
          </Grid.Column>
        </Grid>
     
        </div>
        </div>
      )
  }
}





export default LoginRegisterForm