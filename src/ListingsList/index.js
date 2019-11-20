import React from 'react';

function ListingsList(props) {
	const listings = props.listings.map(listing => {
		return (
			<div class='card' key={listing.id}>
				<div class='card-body'>
					<div class='card-title'>{listing.property_address}</div>
					<p class='card-text'>
					{listing.client_name}
					{listing.client_number}
					{listing.list_price}
					</p>
				</div>
					<button type='button' class='btn btn-primary' onClick={() => props.deleteListing(listing.id)}>Delete Listing</button>
					<button type='button' class='btn btn-primary' onClick={() => props.editListing(listing.id)}>Edit Listing</button>
			</div>
		);
	});
	
 return (
      // <Card.Group>
        { listings }
      // </Card.Group>
    )
}

export default ListingsList