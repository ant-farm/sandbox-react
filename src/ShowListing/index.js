import React from 'react'
import { Header, Modal, Button, Icon, Card } from 'semantic-ui-react'


function ShowListing (props) {
	console.log(props.listingToShow);
	return(
		<Modal open={props.showModalOpen} closeIcon onClose={props.closeModal}>
		    <Header>{props.listingToShow.client_name}'s Information</Header>
		    <Modal.Content>
		    			
						<Card.Description>{props.listingToShow.client_name}'s phone number {props.listingToShow.client_number}</Card.Description>
						<Card.Description>Current list price: {props.listingToShow.list_price}</Card.Description>
						<Card.Description>Property address: {props.listingToShow.property_address}</Card.Description>
						<Card.Description>On market since: {props.listingToShow.days_on_market}</Card.Description>
		    </Modal.Content>
		    <Modal.Actions>

		      <Button color='green' onClick={props.closeModal} inverted>
		         Close
		      </Button>
		    </Modal.Actions>
		  </Modal>

		)
}





export default ShowListing