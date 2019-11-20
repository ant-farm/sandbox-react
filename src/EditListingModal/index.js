import React from 'react'
import { Form, Button, Label, Header, Modal } from 'semantic-ui-react';

function EditListingModal(props) {
	return(
      <Modal open={props.open} closeIcon onClose={props.closeModal}>
        <Header>Edit Listing</Header>
        <Modal.Content>
          <Form onSubmit={props.updateListing}>
            <Label> Client Name: </Label>
            <Form.Input 
              type="text"  
              name="client_name" 
              value={props.listingToEdit.client_name} 
              onChange={props.handleEditChange}
            />
            <Label> List Price: </Label>
            <Form.Input 
              type="text"  
              name="list_price" 
              value={props.listingToEdit.list_price} 
              onChange={props.handleEditChange}
            />
            <Modal.Actions>
              <Button color='green' type="submit">Update Listing</Button>
            </Modal.Actions>
          </Form>
        </Modal.Content>
      </Modal>

    )
}
export default EditListingModal