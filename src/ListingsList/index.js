import React from 'react';

function ListingsList(props) {
	const listings = props.listings.map(listing => {
		return (
			<div className='card' key={listing.id}>
				<div className='card-body'>
					<div className='card-title'>{listing.property_address}</div>
					<p className='card-text'>
					{listing.client_name},
					{listing.client_number},
					{listing.list_price}
					</p>
				</div>
					<button type='button' className='btn btn-secondary' onClick={() => props.deleteListing(listing.id)}>Delete Listing</button>
					<button type='button' className='btn btn-primary' onClick={() => props.editListing(listing.id)}>Edit Listing</button>
			</div>
		);
	});
	
 return (
      	<div>
        { listings }
        </div>
    )
}

export default ListingsList