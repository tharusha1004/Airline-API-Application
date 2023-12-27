import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import toastr from 'cogo-toast';

export default function EditFlightx() {

    const parameter = useParams()
    const [id,setId] = useState('')
    const [aircraft_iata,setAircraftIata] = useState('')
    const [airline_iata,setAirlineIata] = useState('')
    const [airline_name,setAirlineName] = useState('')
    const [flight_status,setFlightStatus] = useState('')
    const [flight_date,setFlightDate] = useState('')
    const [dep_id,setDepId] = useState(0)
    const [dep_airport,setDepAirport] = useState('')
    const [dep_city,setDepCity] = useState('')
    const [dep_country,setDepCountry] = useState('')
    const [dep_iata,setDepIATA] = useState('')
    const [dep_lat,setDepLat] = useState('')
    const [dep_lng,setDepLng] = useState('')
    const [dep_segment_order,setDepSegmentOrder] = useState('')
    const [dep_segment_type,setDepSegmentType] = useState('')
    const [arr_id,setArrId] = useState('')
    const [arr_airport,setArrAirport] = useState('')
    const [arr_city,setArrCity] = useState('')
    const [arr_country,setArrCountry] = useState('')
    const [arr_iata,setArrIATA] = useState('')
    const [arr_lat,setArrLat] = useState('')
    const [arr_lng,setArrLng] = useState('')
    const [arr_segment_order,setArrSegmentOrder] = useState('')
    const [arr_segment_type,setArrSegmentType] = useState('')

    const [flight, setFlight] = useState({
        id:0,
        aircraft_iata:'',
        airline_iata:'',
        airline_name:'',
        flight_status:'',
        flight_date:'',

        dep_id:'',
        dep_airport: '',
        dep_city: '',
        dep_country: '',
        dep_iata: '',
        dep_lat: '',
        dep_lng: '',
        dep_segment_order: 0,
        dep_segment_type: '',

        arr_id: '',
        arr_airport: '',
        arr_city: '',
        arr_country: '',
        arr_iata: '',
        arr_lat: '',
        arr_lng: '',
        arr_segment_order: 0,
        arr_segment_type: ''
        
    })



	// Get Airports from flight microservice
	useEffect (() => {
		axios.get("http://localhost:8082/v1/flights/"+ parameter.id)
			.then(
				res => {
                    console.log(res.data)
                    setId(res.data.id)
                    setAircraftIata(res.data.aircraft_iata)
                    setAirlineIata(res.data.airline_iata)
                    setAirlineName(res.data.airline_name)
                    setFlightStatus(res.data.flight_status)
                    setFlightDate(res.data.flight_date)

                    setDepId(res.data.segments[0].id)
                    setDepAirport(res.data.segments[0].airport)
                    setDepCountry(res.data.segments[0].country)
                    setDepCity(res.data.segments[0].city)
                    setDepIATA(res.data.segments[0].iata)
                    setDepLat(res.data.segments[0].lat)
                    setDepLng(res.data.segments[0].lng)
                    setDepSegmentOrder(res.data.segments[0].segment_order)
                    setDepSegmentType(res.data.segments[0].segment_type)
                    
                    setArrId(res.data.segments[1].id)
                    setArrAirport(res.data.segments[1].airport)
                    setArrCountry(res.data.segments[1].country)
                    setArrCity(res.data.segments[1].city)
                    setArrIATA(res.data.segments[1].iata)
                    setArrLat(res.data.segments[1].lat)
                    setArrLng(res.data.segments[1].lng)
                    setArrSegmentOrder(res.data.segments[1].segment_order)
                    setArrSegmentType(res.data.segments[1].segment_type)

                    setFlight({
                        id: res.data.id,
                        aircraft_iata: res.data.aircraft_iata,
                        airline_iata:res.data.airline_iata,
                        airline_name:res.data.airline_name,
                        flight_status:res.data.flight_status,
                        flight_date:res.data.flight_date,

                        // segment.airport:res.data.
                        // stegment[0]?.airport:res.data.segments[0].airport

                        dep_id:res.data.segments[0].id,
                        dep_airport:res.data.segments[0].airport,
                        dep_city: res.data.segments[0].city,
                        dep_country: res.data.segments[0].country,
                        dep_iata: res.data.segments[0].iata,
                        dep_lat: res.data.segments[0].lat,
                        dep_lng: res.data.segments[0].lng,
                        dep_segment_order: res.data.segments[0].segment_order,
                        dep_segment_type: res.data.segments[0].segment_type,

                        arr_id: res.data.segments[1].id,
                        arr_airport: res.data.segments[1].airport,
                        arr_city: res.data.segments[1].city,
                        arr_country: res.data.segments[1].country,
                        arr_iata: res.data.segments[1].iata,
                        arr_lat: res.data.segments[1].lat,
                        arr_lng: res.data.segments[1].lng,
                        arr_segment_order: res.data.segments[1].segment_order,
                        arr_segment_type: res.data.segments[1].segment_type
                    })
                    
                    console.log(flight.id)
				}
			)
	},[])

    let submitForm = () => {
        let flightx = {
          id: id,
          aircraft_iata: aircraft_iata,
          airline_iata: airline_iata,
          airline_name: airline_name,
          flight_date: flight_date,
          flight_status: flight_status,
          segments: [
              {
                  id: dep_id,
                  airport: dep_airport,
                  city: dep_city,
                  country: dep_country,
                  iata: dep_iata,
                  lat: dep_lat,
                  lng: dep_lng,
                  segment_order: dep_segment_order,
                  segment_type: dep_segment_type
              },
              {
                  id: arr_id,
                  airport: arr_airport,
                  city: arr_city,
                  country: arr_country,
                  iata: arr_iata,
                  lat: arr_lat,
                  lng: arr_lng,
                  segment_order: arr_segment_order,
                  segment_type: arr_segment_type
              }
          ]
      }

      console.log(flightx)
    
        axios.put(`http://127.0.0.1:8082/v1/flights/${parameter.id}`, flightx)
            .then(
                toastr.success('Flight has successfully Updated!', {position : 'top-right', heading: 'Done'}),
                setTimeout(()=> window.location.replace("/flights"), 5000)
            )
      }

    const content = 
    <div>
    <div className='container'>
        <Link to='/flights'>
        <img className='mt-5 mb-0 ml-0' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACqklEQVRoge2aP2sUQRjGf6ZwI2IwYE47A1qoxMp0iQpBEgIWlmo+gyj5GGKhKIht8BOIUQNahFiEYCfEy+WwMP4hAUEIgjEhWrw7YdnM7s3uzM7OQR54irtl3nuee2dm33l34QBh4ZDDWP3AVWAEuACcARrA0fj6b2Ad+AwsA++BeeCXQw2lEQFTwBywA/wryB3gNXA7juUdR4Bp4JuBWFN+Be4Bvb5MTAJthwbSXAUmqjQQAY8qNJDmDJJ5pzgJfPBoQnEJ2TCcYBBJt28Tiq1YgxUGgGaNJhTbwKmyJnqpZzrlTbNSW/TTAMSn+bioickARGdx3NREBKwEIDiLqxjeNKcDENuJdzuZiJBSoW6hnbhGh4U/ZfkD68AlYNSDmVt5RuYsTQzFcYY9GHmVZaKfcqV42sRQ/LlqI9tAn87IjZIBN4CLcYxzwA8PJhSvK/E9CSOjOncdsAGMAR+RTMxjUUqUwBXdl7N0TyYUX+iMtAoEqGNN6NjUGflpODiETCS17MOW4eBh3WDHGDHU8kcN6NkfIwhY6So7tb4bjvM2tYpUvKEs9k86I7bbbx2Z2dt+k3NxWecuBwPAWyQjTeTAo011hdBmxFWJ4jMzeyVKEsfprqLxLxlFI8Abi8C+y/iXSeHp/Xomy6EBGsC72ITzVqcGz/MudtNR93BSeDojW8ADo/+jXtxH1kguIsJok2axRYGO40QAgnXcBa6ZmlB4EoDwNB8WNQGSvqUAxCsuklrgRXCCMNZLG3nYZIVBih2DXXMFOG1rQqFBPdNsESlOnUI9DN31ZOIZFT97H6faqdakxBZbFhHS2l9zaOALcIea3oCIkK74LNKLLSp+G6lib2KxtYLbl2r6kJdqLgPngbPIQj0WX99EDmFt5GS3gLRYNx1qOEAw+A+zdGcnqZOA/QAAAABJRU5ErkJggg=="></img>
        </Link>
        <div className='row'>           
            <div className='card col-md-6card col-md-6 offset-md-3  offset-nd-3'>
            <h1 className='d-flex justify-content-center myfont2 p-3 fw-bolder'>Update Flight</h1>
            <div className='card-body'>
                <form className='myfont'>
                <label>Flight Details</label>
                <div className='form-group p-3 fw-bold'>
                    <label> Aircraft ID </label>
                    <input placeholder='Aircraft ID' name='aircraft_id' className='form-control'
                    value={id} onChange={e=>setId(e.target.value)} onClick={()=>{console.log(id)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> Aircraft IATA Code: </label>
                    <input placeholder='Aircraft IATA Code' name='aircraft_iata' className='form-control'
                    value={aircraft_iata} onChange={e=>setAircraftIata(e.target.value)} onClick={()=>{console.log(aircraft_iata)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> Airline IATA Code: </label>
                    <input placeholder='Airline IATA Code' name='airline_iata' className='form-control'
                    value={airline_iata} onChange={e=>setAirlineIata(e.target.value)} onClick={()=>{console.log(flight.airline_iata)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> Airline Name: </label>
                    <input placeholder='Airline Name' name='airline_name' className='form-control'
                    value={airline_name} onChange={e=>setAirlineName(e.target.value)} onClick={()=>{console.log(flight.airline_name)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> Flight Date: </label>
                    <input placeholder='Flight Date' name='flight_date' className='form-control'
                    value={flight_date} onChange={e=>setFlightDate(e.target.value)} onClick={()=>{console.log(flight.flight_date)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> Flight Status: </label>
                    <input placeholder='Flight Status' name='flight_status' className='form-control'
                    value={flight_status} onChange={e=>setFlightStatus(e.target.value)} onClick={()=>{console.log(flight.flight_status)}}
                    />
                </div>

                <label>Departure Segment Details</label>
                <div className='form-group p-3 fw-bold'>
                    <label> Airport: </label>
                    <input placeholder='Airport' name='dep_airport' className='form-control'
                    value={dep_airport} onChange={e=>setDepAirport(e.target.value)} onClick={()=>{console.log(flight.flight_status)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> City: </label>
                    <input placeholder='City' name='dep_city' className='form-control'
                    value={dep_city} onChange={e=>setDepCity(e.target.value)} onClick={()=>{console.log(flight.dep_city)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> Country: </label>
                    <input placeholder='Country' name='dep_country' className='form-control'
                    value={dep_country} onChange={e=>setDepCountry(e.target.value)} onClick={()=>{console.log(flight.dep_country)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> IATA Code: </label>
                    <input placeholder='IATA Code' name='dep_iata' className='form-control'
                    value={dep_iata} onChange={e=>setDepIATA(e.target.value)} onClick={()=>{console.log(flight.dep_iata)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> Latitude: </label>
                    <input placeholder='Latitude' name='dep_lat' className='form-control'
                    value={dep_lat} onChange={e=>setDepLat(e.target.value)} onClick={()=>{console.log(flight.dep_lat)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> Longitude: </label>
                    <input placeholder='Longitude' name='dep_lng' className='form-control'
                    value={dep_lng} onChange={e=>setDepLng(e.target.value)} onClick={()=>{console.log(flight.dep_lng)}}
                    />
                </div>
                {/* <div className='form-group p-3 fw-bold'>
                    <label> Segment Order: </label>
                    <input placeholder='Segment Order' name='dep_segment_order' className='form-control'
                    value={dep_segment_order} onChange={e=>setDepSegmentOrder(e.target.value)} onClick={()=>{console.log(flight.dep_segment_order)}}
                    />
                </div> */}

                <label>Arrival Segment Details</label>
                <div className='form-group p-3 fw-bold'>
                    <label> Airport: </label>
                    <input placeholder='Airport' name='airport' className='form-control'
                    value={arr_airport} onChange={e=>setArrAirport(e.target.value)} onClick={()=>{console.log(flight.arr_airport)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> City: </label>
                    <input placeholder='City' name='city' className='form-control'
                    value={arr_city} onChange={e=>setArrCity(e.target.value)} onClick={()=>{console.log(flight.arr_city)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> Country: </label>
                    <input placeholder='Country' name='country' className='form-control'
                    value={arr_country} onChange={e=>setArrCountry(e.target.value)} onClick={()=>{console.log(flight.arr_country)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> IATA Code: </label>
                    <input placeholder='IATA Code' name='iata' className='form-control'
                    value={arr_iata} onChange={e=>setArrIATA(e.target.value)} onClick={()=>{console.log(flight.arr_iata)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> Latitude: </label>
                    <input placeholder='Latitude' name='lat' className='form-control'
                    value={arr_lat} onChange={e=>setArrLat(e.target.value)} onClick={()=>{console.log(flight.arr_lat)}}
                    />
                </div>
                <div className='form-group p-3 fw-bold'>
                    <label> Longitude: </label>
                    <input placeholder='Longitude' name='lng' className='form-control'
                    value={arr_lng} onChange={e=>setArrLng(e.target.value)} onClick={()=>{console.log(flight.arr_lng)}}
                    />
                </div>
                {/* <div className='form-group p-3 fw-bold'>
                    <label> Segment Order: </label>
                    <input placeholder='Segment Order' name='segment_order' className='form-control'
                    value={arr_segment_order} onChange={e=>setArrSegmentOrder(e.target.value)} onClick={()=>{console.log(flight.arr_segment_order)}}
                    />
                </div> */}

                <div className='p-3 d-flex justify-content-center'>
                <button type="button" className="btn btn-success" onClick={submitForm}>Save</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={'/'}>
                    <button type="button" className="btn btn-danger">Cancel</button>
                </Link>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>

  return (
    <div>
        {content}
    </div>
  )
}
