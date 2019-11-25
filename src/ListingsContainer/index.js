import React, { Component } from "react";
import ListingsList from "../ListingsList";
import CreateListingForm from "../CreateListingForm";
import EditListingModal from "../EditListingModal";
import ShowAgent from "../ShowAgent"
import ShowListing from "../ShowListing"
import { Button, Grid } from "semantic-ui-react";


class ListingsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listings: [],
			editModalOpen: false,
			createModalOpen: false,
			showModalOpen: false,
			listingToShow: {
				client_name: "",
				client_number: "",
				property_address: "",
				list_price: ""
			},
			listingToEdit: {
				client_name: "",
				list_price: ""
			},
			newListing: {
				client_name: "",
				client_number: "",
				property_address: "",
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
	addListing = async (e) => {
		e.preventDefault();
		console.log(this.state.newListing);
		try {
			const createdListingResponse = await fetch(
				process.env.REACT_APP_API_URL + "/api/v1/listings/",
				{
					method: "POST",
					credentials: "include",
					body: JSON.stringify(this.state.newListing),
					headers: {
						"Content-Type": "application/json"
					}
				}
			);
			const parsedResponse = await createdListingResponse.json();
			console.log(parsedResponse, "this is the response");
			this.setState({
				listings: [
				...this.state.listings, 
				parsedResponse.data
				]
			});
			this.closeModal();
		} 
		catch (err) {
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
		event.preventDefault();
		this.setState({
			listingToEdit: {
				...this.state.listingToEdit,
				[event.target.name]: event.target.value
			}
		});
	};
	handleCreateChange = (event) => {
		event.preventDefault();
		console.log(" we are hitting the handleCreateChange function");
		this.setState({
			newListing: {
				...this.state.newListing,
				[event.target.name]: event.target.value
			}
		})
	}


	showListing = async (idOfListingToShow) => {
		const listingToShow = this.state.listings.find(
			listing => listing.id === idOfListingToShow
		);
		console.log('this is the listingtoshow')
		console.log(listingToShow)
		this.setState({
			showModalOpen: true,
			listingToShow: listingToShow
		})
	}





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

	createModalOpen = () => {
		this.setState({
			createModalOpen: true
		});

	};

	showModalOpen = () => {
		this.setState({
			showModalOpen: true
		})
	}

	closeModal = () => {
		this.setState({
			editModalOpen: false,
			createModalOpen: false,
			showModalOpen: false
		});
	};



	render() {
		return (

			<div>
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
						<ShowAgent user={this.props.user}
						/>
					<Button onClick={this.props.logout}> Logout</Button>	
					<Button onClick={this.createModalOpen}>Create Listing</Button>
					</Grid.Column>
					<Grid.Column>
						<ListingsList
							showModalOpen={this.state.showModalOpen}
							listingToShow={this.state.listingToShow}
							listings={this.state.listings}
							showListing={this.showListing}
							deleteListing={this.deleteListing}
							editListing={this.editListing}
							closeModal={this.closeModal}
						/>
					</Grid.Column>
					
					<Grid.Column>
					<ShowListing 
				        showModalOpen={this.state.showModalOpen}
				        listingToShow={this.state.listingToShow}
				        showListing={this.showListing}
				        listings={this.state.listings}
				        closeModal={this.closeModal}
			        />
					</Grid.Column>
					<Grid.Column>
					<CreateListingForm 
						open={this.state.createModalOpen}
						addListing={this.addListing}
						handleCreateChange={this.handleCreateChange}
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
			
			</div>
		);
	}
}
export default ListingsContainer


