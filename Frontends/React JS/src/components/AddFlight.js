import axios from 'axios'
import React, { Component } from 'react'
import '../index.css'
import toastr from 'cogo-toast';
import { Link } from 'react-router-dom';

export default class AddFlight extends Component {

  constructor(props) {
    super(props)

    this.state = {
      aircraft_iata: "",
      airline_iata: "",
      airline_name: "",
      flight_date: "",
      flight_status: "",
  
      dep_airport : "",
      dep_city: "",
      dep_country: "",
      dep_iata: "",
      dep_lat: "",
      dep_lng: "",
      dep_segment_order: "",
      
      arr_airport : "",
      arr_city: "",
      arr_country: "",
      arr_iata: "",
      arr_lat: "",
      arr_lng: "",
      arr_segment_order: ""
      
    }
  }

  changeAircraftIATACode = (event) => {
    this.setState({aircraft_iata: event.target.value})
  }

  changeAirlineIATACode = (event) => {
    this.setState({airline_iata: event.target.value})
  }

  changeAirlineName = (event) => {
    this.setState({airline_name: event.target.value})
  }

  changeFlightDate = (event) => {
    this.setState({flight_date: event.target.value})
  }

  changeFlightStatus = (event) => {
    this.setState({flight_status: event.target.value})
  }

  changeDepAirport = (event) => {
    this.setState({dep_airport: event.target.value})
  }

  changeDepCity = (event) => {
    this.setState({dep_city: event.target.value})
  }

  changeDepCountry = (event) => {
    this.setState({dep_country: event.target.value})
  }

  changeDepIATACode = (event) => {
    this.setState({dep_iata: event.target.value})
  }

  changeDepLatitude = (event) => {
    this.setState({dep_lat: event.target.value})
  }

  changeDepLongitude = (event) => {
    this.setState({dep_lng: event.target.value})
  }

  changeDepSegmentOrder = (event) => {
    this.setState({dep_segment_order: event.target.value})
  }

  changeArrAirport = (event) => {
    this.setState({arr_airport: event.target.value})
  }

  changeArrCity = (event) => {
    this.setState({arr_city: event.target.value})
  }

  changeArrCountry = (event) => {
    this.setState({arr_country: event.target.value})
  }

  changeArrIATACode = (event) => {
    this.setState({arr_iata: event.target.value})
  }

  changeArrLatitude = (event) => {
    this.setState({arr_lat: event.target.value})
  }

  changeArrLongitude = (event) => {
    this.setState({arr_lng: event.target.value})
  }

  changeArrSegmentOrder = (event) => {
    this.setState({arr_segment_order: event.target.value})
  }

  submitForm = () => {
    let flight = {

      aircraft_iata: this.state.aircraft_iata,
      airline_iata: this.state.airline_iata,
      airline_name: this.state.airline_name,
      flight_date: this.state.flight_date,
      flight_status: this.state.flight_status,
      segments: [
          {
              airport: this.state.dep_airport,
              city: this.state.dep_city,
              country: this.state.dep_country,
              iata: this.state.dep_iata,
              lat: this.state.dep_lat,
              lng: this.state.dep_lng,
              segment_order: 1,
              segment_type: "departure"
          },
          {
              airport: this.state.arr_airport,
              city: this.state.arr_city,
              country: this.state.arr_country,
              iata: this.state.arr_iata,
              lat: this.state.arr_lat,
              lng: this.state.arr_lng,
              segment_order: 2,
              segment_type: "arrival"
          }
      ]
  }

    axios.post(`http://127.0.0.1:8082/v1/flights`, flight)
      .then(
        toastr.success('Flight has successfully Submitted!', {position : 'top-right', heading: 'Done'}),
        setTimeout(()=> window.location.replace("/flights"), 5000)
        )
  }


  print = (event) => {
    console.log(this.state) 
  }

  render() {
    return (
      <div>
        <div className='container'>
        <Link to='/flights'>
          <img className='mt-5 mb-0 ml-0' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACqklEQVRoge2aP2sUQRjGf6ZwI2IwYE47A1qoxMp0iQpBEgIWlmo+gyj5GGKhKIht8BOIUQNahFiEYCfEy+WwMP4hAUEIgjEhWrw7YdnM7s3uzM7OQR54irtl3nuee2dm33l34QBh4ZDDWP3AVWAEuACcARrA0fj6b2Ad+AwsA++BeeCXQw2lEQFTwBywA/wryB3gNXA7juUdR4Bp4JuBWFN+Be4Bvb5MTAJthwbSXAUmqjQQAY8qNJDmDJJ5pzgJfPBoQnEJ2TCcYBBJt28Tiq1YgxUGgGaNJhTbwKmyJnqpZzrlTbNSW/TTAMSn+bioickARGdx3NREBKwEIDiLqxjeNKcDENuJdzuZiJBSoW6hnbhGh4U/ZfkD68AlYNSDmVt5RuYsTQzFcYY9GHmVZaKfcqV42sRQ/LlqI9tAn87IjZIBN4CLcYxzwA8PJhSvK/E9CSOjOncdsAGMAR+RTMxjUUqUwBXdl7N0TyYUX+iMtAoEqGNN6NjUGflpODiETCS17MOW4eBh3WDHGDHU8kcN6NkfIwhY6So7tb4bjvM2tYpUvKEs9k86I7bbbx2Z2dt+k3NxWecuBwPAWyQjTeTAo011hdBmxFWJ4jMzeyVKEsfprqLxLxlFI8Abi8C+y/iXSeHp/Xomy6EBGsC72ITzVqcGz/MudtNR93BSeDojW8ADo/+jXtxH1kguIsJok2axRYGO40QAgnXcBa6ZmlB4EoDwNB8WNQGSvqUAxCsuklrgRXCCMNZLG3nYZIVBih2DXXMFOG1rQqFBPdNsESlOnUI9DN31ZOIZFT97H6faqdakxBZbFhHS2l9zaOALcIea3oCIkK74LNKLLSp+G6lib2KxtYLbl2r6kJdqLgPngbPIQj0WX99EDmFt5GS3gLRYNx1qOEAw+A+zdGcnqZOA/QAAAABJRU5ErkJggg=="></img>
        </Link>
          <div className='row'>           
            <div className='card col-md-6card col-md-6 offset-md-3  offset-nd-3'>
              <h1 className='d-flex justify-content-center myfont2 p-3 fw-bolder'>Add Flight</h1>
              <div className='card-body'>
                <form className='myfont'>
                  <label>Flight Details</label>
                  <div className='form-group p-3 fw-bold'>
                    <label> Aircraft IATA Code: </label>
                    <input placeholder='Aircraft IATA Code' name='aircraft_iata' className='form-control'
                      onChange={this.changeAircraftIATACode}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> Airline IATA Code: </label>
                    <input placeholder='Airline IATA Code' name='airline_iata' className='form-control'
                      onChange={this.changeAirlineIATACode}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> Airline Name: </label>
                    <input placeholder='Airline Name' name='airline_name' className='form-control'
                      onChange={this.changeAirlineName}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> Flight Date: </label>
                    <input placeholder='Flight Date' name='flight_date' className='form-control'
                      onChange={this.changeFlightDate}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> Flight Status: </label>
                    <input placeholder='Flight Status' name='flight_status' className='form-control'
                      onChange={this.changeFlightStatus}/>
                  </div>

                  <label>Departure Segment Details</label>
                  <div className='form-group p-3 fw-bold'>
                    <label> Airport: </label>
                    <input placeholder='Airport' name='dep_airport' className='form-control'
                      onChange={this.changeDepAirport}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> City: </label>
                    <input placeholder='City' name='dep_city' className='form-control'
                      onChange={this.changeDepCity}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> Country: </label>
                    <input placeholder='Country' name='dep_country' className='form-control'
                      onChange={this.changeDepCountry}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> IATA Code: </label>
                    <input placeholder='IATA Code' name='dep_iata' className='form-control'
                      onChange={this.changeDepIATACode}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> Latitude: </label>
                    <input placeholder='Latitude' name='dep_lat' className='form-control'
                      onChange={this.changeDepLatitude}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> Longitude: </label>
                    <input placeholder='Longitude' name='dep_lng' className='form-control'
                      onChange={this.changeDepLongitude}/>
                  </div>
                  {/* <div className='form-group p-3 fw-bold'>
                    <label> Segment Order: </label>
                    <input placeholder='Segment Order' name='dep_segment_order' className='form-control'
                      onChange={this.changeDepSegmentOrder}/>
                  </div> */}

                  <label>Arrival Segment Details</label>
                  <div className='form-group p-3 fw-bold'>
                    <label> Airport: </label>
                    <input placeholder='Airport' name='airport' className='form-control'
                      onChange={this.changeArrAirport}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> City: </label>
                    <input placeholder='City' name='city' className='form-control'
                      onChange={this.changeArrCity}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> Country: </label>
                    <input placeholder='Country' name='country' className='form-control'
                      onChange={this.changeArrCountry}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> IATA Code: </label>
                    <input placeholder='IATA Code' name='iata' className='form-control'
                      onChange={this.changeArrIATACode}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> Latitude: </label>
                    <input placeholder='Latitude' name='lat' className='form-control'
                      onChange={this.changeArrLatitude}/>
                  </div>
                  <div className='form-group p-3 fw-bold'>
                    <label> Longitude: </label>
                    <input placeholder='Longitude' name='lng' className='form-control'
                      onChange={this.changeArrLongitude}/>
                  </div>
                  {/* <div className='form-group p-3 fw-bold'>
                    <label> Segment Order: </label>
                    <input placeholder='Segment Order' name='segment_order' className='form-control'
                      onChange={this.changeArrSegmentOrder}/>
                  </div> */}

                  <div className='p-3 d-flex justify-content-center'>
                  <button type="button" className="btn btn-success" onClick={this.submitForm}>Save</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to={'/flights'}> 
                    <button type="button" className="btn btn-danger">Cancel</button>
                  </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
  }
}
