import React from 'react';
import { Form, Button, Label, Header, Modal, Segment} from 'semantic-ui-react'

 
class CreateListing extends React.Component {
	constructor(){
		super()
		
		this.state= {
			client_name: '',
			client_number: '',
			property_address: '',
			list_price: ''
		}

	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
		render(){
		return(
			   <Segment>
		        <h4>Create Listing</h4>
		        <Form onSubmit={(e) => this.props.addListing(e, this.state)}>
		          <Label>Client Name:</Label>
		          <Form.Input type='text' name='client_name' value={this.state.client_name} onChange={this.handleChange}/>
		          <Label>Client Number:</Label>
		          <Form.Input type='text' name='client_number' value={this.state.client_number} onChange={this.handleChange}/>
		          <Label>Property Address:</Label>
		          <Form.Input type='text' name='property_address' value={this.state.property_address} onChange={this.handleChange}/>
		          <Label>List price:</Label>
		          <Form.Input type='text' name='list_price' value={this.state.list_price} onChange={this.handleChange}/>
		          <Button type='Submit'>Create Listing</Button>
		        </Form>
		      </Segment>
			      )

		}
	}


// class CreateListing extends Component {
// 	constructor(){
// 		super();

// 	}
// 		// <div>
// 		// 		<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
// 		// 		  Create Listing
// 		// 		</button>
// 		// 		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
// 		// 		  <div class="modal-dialog" role="document">
// 		// 		    <div class="modal-content">
// 		// 		      <div class="modal-header">
// 		// 		        <h5 class="modal-title" id="exampleModalLabel">New Listing</h5>
// 		// 		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
// 		// 		          <span aria-hidden="true">&times;</span>
// 		// 		        </button>
// 		// 		      </div>
// 		// 		      <div class="modal-body">
// 		// 		          <form onSubmit={(e) => this.props.addListing(e, this.state)}>
// 		// 			          <label>Client name:</label>
// 		// 			          <form type='text' name='client_name' value={this.state.client_name} onChange={this.handleChange}/>
// 		// 			          <label>Client number:</label>
// 		// 			          <form type='text' name='client_number' value={this.state.client_number} onChange={this.handleChange}/>
// 		// 			          <label>Property address:</label>
// 		// 			          <form type='text' name='property_address' value={this.state.property_address} onChange={this.handleChange}/>
// 		// 			            <label>List price:</label>
// 		// 			          <form type='text' name='list_price' value={this.state.list_price} onChange={this.handleChange}/>
// 		// 			          <button type='Submit'>Create Listing</button>
// 		// 			        </form>
// 		// 		      </div>
// 		// 		      <div class="modal-footer">
// 		// 		        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
// 		// 		        <button type="button" class="btn btn-primary">Save changes</button>
// 		// 		      </div>
// 		// 		    </div>
// 		// 		  </div>
// 		// 		</div>

			
// 			// </div>


// 	handleChange = (e) => {
// 		this.setState({
// 			[e.currentTarget.name]: e.currentTarget.value
// 		})
// 	}

// 	render() {
// 		return(
// 			<div>

// 			     <Modal open={props.open} closeIcon onClose={props.closeModal}>
// 			        <Header>Create Listing</Header>
// 			        <Modal.Content>
// 			          <Form onSubmit={props.addListing}>
// 			            <Label> Client Name: </Label>
// 			            <Form.Input 
// 			              type="text"  
// 			              name="client_name" 
// 			              value={props.listingToEdit.client_name} 
// 			              onChange={props.handleEditChange}
// 			            />
// 			            <Label> List Price: </Label>
// 			            <Form.Input 
// 			              type="text"  
// 			              name="list_price" 
// 			              value={props.listingToEdit.list_price} 
// 			              onChange={props.handleEditChange}
// 			            />
// 			            <Modal.Actions>
// 			              <Button color='green' type="submit">Update Listing</Button>
// 			            </Modal.Actions>
// 			          </Form>
// 			        </Modal.Content>
// 			      </Modal>
// 			      </div>
// 			)
// 	}
// }

export default CreateListing