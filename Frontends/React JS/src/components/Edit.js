import React, {Component} from 'react'
import toastr from 'cogo-toast';

class Edit extends Component
{
	constructor() {
		super();
		//--- Declare method for this component ---//
		this.state = {
			errors    : [],
			id  : '',
			aircraft_iata  : '',
			airline_iata  : '',
			airline_name : '',
			flight_date : '',
			flight_status : '' 
		}
		//--- Declare method for this component ---//
		this.baseState = this.state
		this.hasErrorFor = this.hasErrorFor.bind(this);
		this.renderErrorFor = this.renderErrorFor.bind(this);
		this.handleUpdateFlight = this.handleUpdateFlight.bind(this);
		this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
	}
	//--- Receive props while update modal open ---//
	UNSAFE_componentWillReceiveProps(flight_data) {
		this.setState({
			flight_id         : flight_data.flight.id,
			aircraft_iata     : flight_data.flight.aircraft_iata ,
			airline_iata      : flight_data.flight.airline_iata,
			airline_name      : flight_data.flight.airline_name,
			flight_date       : flight_data.flight.flight_date,
			flight_status     : flight_data.flight.flight_status 
		})
	}
	//--- Update state variable value while input field change ---//
	handleInputFieldChange(e) {
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	//--- Update state users variable by props method ---//
	handleUpdateFlight(e) {
		e.preventDefault()
		//--- Declare state variable for this component ---//
		const data = {
			id 		      : this.state.id,
			aircraft_iata : this.state.aircraft_iata,
			airline_iata  : this.state.airline_iata,
			airline_name  : this.state.airline_name,
			flight_date   : this.state.flight_date, 
            flight_status : this.state.flight_status
		}
		if( !this.checkValidation(data) ) {
			this.reset();
			this.props.updateState(data, 1);
			document.getElementById("closeEditModal").click();
			toastr.warn('Flight data updated successfully!', {position : 'top-right', heading: 'Done'});
		}
	}
    //--- Validate all input field ---//
    checkValidation(fields) {
    	var error = {};
    	if(fields.aircraft_iata.length === 0) {
    		error.aircraft_iata = ['This field is required!'];
    	}
    	if(fields.airline_iata.length === 0) {
    		error.airline_iata = ['This field is required!'];
    	}
    	if(fields.airline_name.length === 0) {
    		error.airline_name = ['This field is required!'];
    	}
		if(fields.flight_date.length === 0) {
    		error.flight_date  = ['This field is required!'];
    	}
    	if(fields.flight_status.length === 0) {
    		error.flight_status = ['This field is required!'];
    	}
		this.setState({
			errors : error
		})
		if(fields.aircraft_iata.length === 0 || fields.airline_iata.length === 0 || fields.airline_name.length === 0 || fields.flight_date.length === 0 || fields.flight_status.length === 0) {
			return true;
		} else {
			return false;
		}
    }
    //--- Reset all state variable while update user ---//
	reset() {
        this.setState(this.baseState);
    }
    //--- Check that any validation errors occure for input field ---//
	hasErrorFor(fieldName) {
		return !!this.state.errors[fieldName];
	}
	//--- Render error for specific validation fail input field ---//
	renderErrorFor(fieldName) {
    	if (this.hasErrorFor(fieldName)) {
	        return (
	        	<em className="error invalid-feedback"> {this.state.errors[fieldName][0]} </em>
	        )
      	}
    }

    render() {
      return(
			<div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  	<div className="modal-dialog" role="document">
			    	<div className="modal-content">
			      		<div className="modal-header">
			        		<h5 className="modal-title">Update Flight information</h5>
			        		<button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          			<span aria-hidden="true">&times;</span>
			        		</button>
			      		</div>
			        <form onSubmit={this.handleUpdateUser}>
			      		<div className="modal-body">
						    <div className="form-group">
			            		<label htmlFor="aircraft_iata" className="col-form-label">Aircraft IATA Code:</label>
			            		<input type="text" className={`form-control form-control-sm ${this.hasErrorFor('aircraft_iata') ? 'is-invalid' : ''}`}
			            		 id="aircraft_iata" name="aircraft_iata" placeholder="Aircraft IATA Code" onChange={this.handleInputFieldChange} value={this.state.aircraft_iata }/>
			            		{this.renderErrorFor('aircraft_iata')}
			         	 	</div>
			          		<div className="form-group">
			            		<label htmlFor="airline_iata " className="col-form-label">Airline IATA Code:</label>
			            		<input type="text" className={`form-control form-control-sm ${this.hasErrorFor('airline_iata') ? 'is-invalid' : ''}`}
			            		 id="airline_iata" name="airline_iata" placeholder="Airline IATA Code" onChange={this.handleInputFieldChange} value={this.state.airline_iata }/>
			            		{this.renderErrorFor('airline_iata')}
			         	 	</div>
			          		<div className="form-group">
			            		<label htmlFor="airline_name" className="col-form-label">Airline Name:</label>
			            		<input type="text" className={`form-control form-control-sm ${this.hasErrorFor('airline_name') ? 'is-invalid' : ''}`}
			            		 id="airline_name" name="airline_name" placeholder="Airline Name" onChange={this.handleInputFieldChange} value={this.state.airline_name }/>
			            		{this.renderErrorFor('airline_name')}
			         	 	</div>
							  <div className="form-group">
			            		<label htmlFor="flight_date" className="col-form-label">Flight Date:</label>
			            		<input type="text" className={`form-control form-control-sm ${this.hasErrorFor('flight_date') ? 'is-invalid' : ''}`}
			            		 id="flight_date" name="flight_date" placeholder="Flight Date" onChange={this.handleInputFieldChange} value={this.state.flight_date }/>
			            		{this.renderErrorFor('airline_iata')}
			         	 	</div>
			          		<div className="form-group">
			            		<label htmlFor="flight_status" className="col-form-label">Flight Status:</label>
			            		<input type="text" className={`form-control form-control-sm ${this.hasErrorFor('flight_status') ? 'is-invalid' : ''}`}
			            		 id="flight_status" name="flight_status" placeholder="Flight Status" onChange={this.handleInputFieldChange} value={this.state.flight_status }/>
			            		{this.renderErrorFor('flight_status')}
			         	 	</div>
			      		</div>
			      		<div className="modal-footer">
			        		<button type="button" id="closeEditModal" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
			        		<button type="submit" className="btn btn-primary btn-sm">Save Changes</button>
			      		</div>
			   		</form>
			    	</div>
			  	</div>
			</div>
        )
    }
}
export default Edit