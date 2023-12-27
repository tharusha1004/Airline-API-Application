import React, {Component} from 'react'
import toastr from 'cogo-toast';
// import Create from './Create'
// import Edit from './Edit'
import axios from 'axios';
import { BrowserRouter, Link } from 'react-router-dom';
import AddFlight from './AddFlight';
import { confirm } from 'react-bootstrap-confirmation';

class Index extends Component
{
	constructor() {
		super();
		//--- Declare state variable for this component ---//
		this.state = {
			flights     : [],
			editFlight : {},
		}
		//--- Declare method for this component ---//
		this.handleUpdateState = this.handleUpdateState.bind(this);
		// call the microservice
		this.handleAxiosGet();
	}

	// Get Airports from flight microservice
	handleAxiosGet() {
		axios.get("http://localhost:8082/v1/all-flights")
			.then(
				res => {
					this.setState({flights: res.data});
					console.log(res.data)
				}
			)
	}

	//--- Update state variable while any user insert or update ---//
	handleUpdateState(data, operation) {
		//--- 'operation==1' means update user ---//
		if(operation === 1) {
			this.setState(prevState => ({
				flights : prevState.flights.filter(flight => {
					if(flight.id === data.id)
						return Object.assign(flight, data);
					else
						return flight;
				})
			}))
			return;
		}
		//--- 'operation==0' means insert user ---//
		var new_flights = this.state.flights.concat(data);
		this.setState({
			flights : new_flights
		})
	}
	// --- Find editable user and update state variable ---//
	handleEditFlight(flightId) {
		this.setState({
			editFlight : this.state.flights.find(x => x.id === flightId)
		})
	}
	//--- Delete user and update state ---//
	async handleDeleteFlight(id) {
		const result = await confirm("Are you Ok with the Deletion?");
		if(result)
		{
			axios.delete('http://127.0.0.1:8082/v1/flights/'+ id)
			.then(
				toastr.success('Flight has successfully deleted!', {position : 'top-right', heading: 'Done'}),
				setTimeout(()=> window.location.reload(), 5000)
			)
		}
		else{
		}
	}

    render() {
      return(
          	<div className="card mt-4">
			    <div className="card-header">
			        <h4 className="card-title"> Flights </h4>
					<Link to="/add-flight">
			        <button type="button" className="btn btn-primary btn-sm pull-right" > Add Flight </button>
					</Link>
			    </div>
			    <div className="card-body">
			        <div className="col-md-12">
                        <table className="table table-bordered ">
                            <thead>
                                <tr>
                                    <th> Id </th>
                                    <th> Aircraft IATA Code </th>
                                    <th> Airline IATA Code </th>
                                    <th> Airline Name </th>
									<th> Flight Date  </th>
                                    <th> Departure </th>
                                    <th> Arrival </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
								this.state.flights.map(flightx=>(
									<tr key={flightx.id}>
										<td> {flightx.id} </td>
                                	    <td> {flightx.aircraft_iata} </td>
                                		<td> {flightx.airline_iata} </td>
                                		<td> {flightx.airline_name} </td>
										<td> {flightx.flight_date} </td>
                                		<td> {flightx.segments[0].country} </td>
										<td> {flightx.segments[1].country}</td>
                                		<td>
											<Link to={'/edit-flight/'  + flightx.id}>
                                				<button className="btn btn-info btn-sm mr-2" > Edit </button>
											</Link>
                                			<button className="btn btn-danger btn-sm" onClick={this.handleDeleteFlight.bind(this, flightx.id)}> Delete </button>
                                		</td>
									</tr>
								))
							}
                            </tbody>
                        </table>
			        </div>
			    </div>
			    {/* <Create updateState = {this.handleUpdateState} />
			    <Edit updateState = {this.handleUpdateState} flight = {this.state.editFlight} /> */}
			</div>
        )
    }
}
export default Index