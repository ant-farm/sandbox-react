import React from 'react'
import { Header, Modal, Button, Icon, Card } from 'semantic-ui-react'


function ShowListing (props) {
	console.log(props.listingToShow);
	return(
		<Modal open={props.showModalOpen} closeIcon onClose={props.closeModal}>
		    <Header icon='archive' content='Client Information' />
		    <Modal.Content>
		    		<Card.Header>{props.client_name}</Card.Header>
						<Card.Description>{props.client_number}'s phone number</Card.Description>
						<Card.Description>Current list price: {props.list_price}</Card.Description>
						<Card.Description>Property address: {props.property_address}</Card.Description>
						<Card.Description>On market since: {props.days_on_market}</Card.Description>
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