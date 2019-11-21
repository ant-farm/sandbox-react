import React from 'react';
import { Card, Button } from 'semantic-ui-react'


function ListingsList(props) {
	const listings = props.listings.map(listing => {
		return (
			<Card key={listing.id}>
				<Card.Content>
					<Card.Header>{listing.client_name}</Card.Header>
					<Card.Description>{listing.list_price}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Button onClick={() => props.deleteListing(listing.id)}>Delete Listing</Button>
					<Button onClick={() => props.editListing(listing.id)}>Edit Listing</Button>
				</Card.Content>
			</Card>
		);
	});
 return (
      <Card.Group>
        { listings }
      </Card.Group>
    )
}


export default ListingsList