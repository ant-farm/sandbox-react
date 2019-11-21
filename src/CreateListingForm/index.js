import React from "react";
import {
	Form,
	Button,
	Label,
	Header,
	Modal,
	Segment,
	Image
} from "semantic-ui-react";

// class CreateListing extends React.Component {
// 	constructor(){
// 		super()

// 		this.state= {
// 			client_name: '',
// 			client_number: '',
// 			property_address: '',
// 			list_price: ''
// 		}

// 	}
// 	handleChange = (e) => {
// 		this.setState({
// 			[e.currentTarget.name]: e.currentTarget.value
// 		})
// 	}
// 		render(){
// 		return(
// 			   <Segment>
// 		        <h4>Create Listing</h4>
// 		        <Modal trigger={<Button>Show Modal</Button>}>
// 				    <Modal.Header>Select a Photo</Modal.Header>
// 				    <Modal.Content image>
// 				      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
// 				      <Modal.Description>
// 				        <Header>Create a listing</Header>
// 				        <p>
// 				         <Form onSubmit={(e) => this.props.addListing(e, this.state)}>
// 				          <Label>Client Name:</Label>
// 				          <Form.Input type='text' name='client_name' value={this.state.client_name} onChange={this.handleChange}/>
// 				          <Label>Client Number:</Label>
// 				          <Form.Input type='text' name='client_number' value={this.state.client_number} onChange={this.handleChange}/>
// 				          <Label>Property Address:</Label>
// 				          <Form.Input type='text' name='property_address' value={this.state.property_address} onChange={this.handleChange}/>
// 				          <Label>List price:</Label>
// 				          <Form.Input type='text' name='list_price' value={this.state.list_price} onChange={this.handleChange}/>
// 				          <Button type='Submit'>Create Listing</Button>
// 				        </Form>
// 				        </p>
// 				      </Modal.Description>
// 				    </Modal.Content>
// 				  </Modal>

// 		      </Segment>
// 			      )

// 		}
// 	}

class CreateListing extends React.Component {
	constructor() {
		super();

		this.state = {
			client_name: "",
			client_number: "",
			property_address: "",
			list_price: "",
			open: false
		};
	}
	 	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	// state = { open: false }

	show = dimmer => () => this.setState({ dimmer, open: true });
	close = () => this.setState({ open: false });

	render() {
		const { open } = this.state;

		return (
			<div>
				<Button onClick={this.show("blurring")}>Create Listing</Button>

				<Modal dimmer={dimmer} open={open} onClose={this.close}>
					<Modal.Header>Select a Photo</Modal.Header>
					<Modal.Content image>
						<Image
							wrapped
							size="medium"
							src="https://media.giphy.com/media/UqqVRaP8y4uo1GNxbN/giphy.gif"
						/>
						<Modal.Description>
							<Header>New Client Information</Header>
							<Form
								onSubmit={e =>
									this.props.addListing(e, this.state)
								}
							>
								<Label>Client Name:</Label>
								<Form.Input
									type="text"
									name="client_name"
									value={this.state.client_name}
									onChange={this.handleChange}
								/>
								<Label>Client Number:</Label>
								<Form.Input
									type="text"
									name="client_number"
									value={this.state.client_number}
									onChange={this.handleChange}
								/>
								<Label>Property Address:</Label>
								<Form.Input
									type="text"
									name="property_address"
									value={this.state.property_address}
									onChange={this.handleChange}
								/>
								<Label>List price:</Label>
								<Form.Input
									type="text"
									name="list_price"
									value={this.state.list_price}
									onChange={this.handleChange}
								/>
								<Modal.Actions>
									<Button color="black" onClick={this.close}>
										Cancel
									</Button>
									<Button
										type='Submit'
										positive
										icon="checkmark"
										labelPosition="right"
										content="Create Listing!"
									/>
							</Modal.Actions>
							</Form>
						</Modal.Description>
					</Modal.Content>
					
				</Modal>
			</div>
		);
	}
}

export default CreateListing;