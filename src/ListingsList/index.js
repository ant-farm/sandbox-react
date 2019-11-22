import React from 'react';
import ShowListing from "../ShowListing"
import { Card, Button, Feed, Label } from 'semantic-ui-react'


function ListingsList(props) {
 	console.log("this is props in ListingsList")
 	console.log(props)
	const listings = props.listings.map(listing => {
		return (
			<Card key={listing.id}>
				<Card.Content>

					<Feed>
						<Feed.Label> <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
						</Feed.Label>
					
					</Feed>
					<Card.Header>{listing.client_name}</Card.Header>
					<Card.Description>{listing.list_price}</Card.Description>
					<Button onClick={() => props.showListing(listing.id)}>Show More</Button>
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