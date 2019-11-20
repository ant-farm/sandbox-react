import React, { Component } from 'react';

class CreateListing extends Component {
	constructor(){
		super();

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
			<div>
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				  Create Listing
				</button>
				<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title" id="exampleModalLabel">New Listing</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				          <form onSubmit={(e) => this.props.addListing(e, this.state)}>
					          <label>Client name:</label>
					          <form type='text' name='client_name' value={this.state.client_name} onChange={this.handleChange}/>
					          <label>Client number:</label>
					          <form type='text' name='client_number' value={this.state.client_number} onChange={this.handleChange}/>
					          <label>Property address:</label>
					          <form type='text' name='property_address' value={this.state.property_address} onChange={this.handleChange}/>
					            <label>List price:</label>
					          <form type='text' name='list_price' value={this.state.list_price} onChange={this.handleChange}/>
					          <button type='Submit'>Create Listing</button>
					        </form>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				        <button type="button" class="btn btn-primary">Save changes</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
			)
	}
}

export default CreateListing