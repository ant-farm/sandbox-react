
import React, { Component } from "react";
import {
	Form,
	Button,
	Label,
	Header,
	Modal,
	Segment,
	Image
} from "semantic-ui-react";

function CreateListingForm(props) {

		return (
				<Modal open={props.open} closeIcon onClose={props.closeModal}>
					<Modal.Header>Create New Listing</Modal.Header>

					<Modal.Content image >
						<Image
							wrapped
							size="medium"
							src="https://media.giphy.com/media/UqqVRaP8y4uo1GNxbN/giphy.gif"
						/>
						<Modal.Description>
							<Header>New Client Information</Header>
							<Form
								onSubmit={props.addListing}>
								<Label>Client Name:</Label>
								<Form.Input
									type="text"
									name="client_name"
									value={props.client_name}
									onChange={props.handleCreateChange}
								/>
								<Label>Client Number:</Label>
								<Form.Input
									type="text"
									name="client_number"
									value={props.client_number}
									onChange={props.handleCreateChange}
								/>
								<Label>Property Address:</Label>
								<Form.Input
									type="text"
									name="property_address"
									value={props.property_address}
									onChange={props.handleCreateChange}
								/>
								<Label>List price:</Label>
								<Form.Input
									type="text"
									name="list_price"
									value={props.list_price}
									onChange={props.handleCreateChange}
								/>
								<Modal.Actions>
									<Button color="black" onClick={props.closeModal}>
										Cancel
									</Button>
									<Button
										color='green'
										type='Submit'
										content="Create Listing!"
									/>
							</Modal.Actions>
							</Form>
						</Modal.Description>
					</Modal.Content>
					</Modal>
		);
	}
export default CreateListingForm;