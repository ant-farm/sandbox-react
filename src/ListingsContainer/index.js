import React, { Component } from "react";
import ListingsList from "../ListingsList";
import CreateListing from "../CreateListingForm";
import EditListingModal from "../EditListingModal";
import { Grid } from "semantic-ui-react";
class ListingsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listings: [],
			editModalOpen: false,
			listingToEdit: {
				client_name: "",
				list_price: ""
			}
		}
	}
	componentDidMount() {
		this.getListings();
	}
	getListings = async () => {
		try {
			const listings = await fetch(
				process.env.REACT_APP_API_URL + "/api/v1/listings/",
				{
					credentials: "include"
				}
			);
			const parsedListings = await listings.json();
			console.log(parsedListings);
			this.setState({
				listings: parsedListings.data
			});
		} catch (err) {
			console.log(err);
		}
	};
	addListing = async (e, listingFromForm) => {
		e.preventDefault();
		console.log(listingFromForm);
		try {
			const createdListingResponse = await fetch(
				process.env.REACT_APP_API_URL + "/api/v1/listings/",
				{
					method: "POST",
					credentials: "include",
					body: JSON.stringify(listingFromForm),
					headers: {
						"Content-Type": "application/json"
					}
				}
			);
			const parsedResponse = await createdListingResponse.json();
			console.log(parsedResponse, "this is the response");
			this.setState({
				listings: [...this.state.listings, parsedResponse.data]
			});
		} catch (err) {
			console.log(err);
		}
	};
	deleteListing = async (id) => {
		console.log(id);
		const deleteListingResponse = await fetch(
			process.env.REACT_APP_API_URL + "/api/v1/listings/" + id,
			{
				method: "DELETE",
				credentials: "include"
			}
		);
		const deleteListingParsed = await deleteListingResponse.json();
		console.log(deleteListingParsed);
		this.setState({listings: this.state.listings.filter((listing) => listing.id !== id)});
	};
	editListing = (idOfListingToEdit) => {
		console.log('we are in editListing() in ListingsContainer')
		const listingToEdit = this.state.listings.find(
			listing => listing.id === idOfListingToEdit
		);
		this.setState({
			editModalOpen: true,
			listingToEdit: listingToEdit
		});
	};
	handleEditChange = (event) => {
		this.setState({
			listingToEdit: {
				...this.state.listingToEdit,
				[event.target.name]: event.target.value
			}
		});
	};
	updateListing = async (e) => {
		e.preventDefault();
		console.log('THIS IS IT!!@O$@#$#@O$%@#%')
		console.log(this.state.listingToEdit)
		const body = {
			client_name: this.state.listingToEdit.client_name,
			list_price: this.state.listingToEdit.list_price
		}
		try {
			const url = process.env.REACT_APP_API_URL + "/api/v1/listings/" + this.state.listingToEdit.id
			const updateResponse = await fetch(url, {
				method: "PUT",
				credentials: "include",
				body: JSON.stringify(body),
				headers: {
					"Content-Type": "application/json"
				}
			});
			const updateResponseParsed = await updateResponse.json();
			console.log("response from db after trying to update a listing");
			console.log(updateResponseParsed);
			const newListingArrayWithUpdate = this.state.listings.map(
				(listing) => {
					if (listing.id === updateResponseParsed.data.id) {
						listing = updateResponseParsed.data;
					}
					return listing;
				}
			);
			this.setState({
				listings: newListingArrayWithUpdate
			});
			this.closeModal();
		} catch (err) {
			console.log("Error: ",err);
		}
	};
	closeModal = () => {
		this.setState({
			editModalOpen: false
		});
	};
	render() {
		return (
			<Grid
				columns={2}
				divided
				textAlign="center"
				style={{ height: "100%" }}
				verticalAlign="top"
				stackable
			>
				<Grid.Row>
					<Grid.Column>
						<ListingsList
							listings={this.state.listings}
							deleteListing={this.deleteListing}
							editListing={this.editListing}
						/>
					</Grid.Column>
					<Grid.Column>
					<CreateListing 
								addListing={this.addListing}
								closeModal={this.closeModal}
								 />
					</Grid.Column>
					<EditListingModal
						open={this.state.editModalOpen}
						updateListing={this.updateListing}
						listingToEdit={this.state.listingToEdit}
						closeModal={this.closeModal}
						handleEditChange={this.handleEditChange}
					/>
				</Grid.Row>
			</Grid>
		);
	}
}
export default ListingsContainer