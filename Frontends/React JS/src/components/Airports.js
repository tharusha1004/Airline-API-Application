import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Airports() {

    const [url , setUrl] = useState("http://localhost:8080/v1/airports")
    const [airports, setAirports] = useState([])
    // const [select, setSelection] = useState()
    let cont = null

    useEffect (()=>{
        axios.get(url)
            .then(
                res => {
                    console.log(res)
                    setAirports(res.data)
                }
            )
    },[url])  

    function getFromAxios(url) {
        axios.get(url)
            .then(
                res => {
                    console.log(res)
                    setAirports(res.data)
                }
            )
            .catch(
                setAirports([])
            )
    }
        
    function getData(val) {
        // console.log(url+"/"+ val.target.value)
        // console.warn(val.target)
        if(val.target.value!="") {
            console.log(val.target.value)
            getFromAxios(url + "/name?name=" + val.target.value)
        }
        else {
            getFromAxios(url + "/")
        }
    }
    
    cont =
            <div>
                <div  className='ml-5 mr-5'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>IATA</th>
                            <th>Airport Name</th>
                            <th>Country</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            airports.map(airports=>(
                                <tr>
                                    <td>{airports.iata_code}</td>
                                    <td>{airports.name}</td>
                                    <td>{airports.country}</td>
                                    <td>{airports.city}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
            </div>


    

  return (

    <div>
        <div style={{padding:'10px', marginLeft:'150px'}}>
        {/* <select 
            onChange={(event) => setSelection(event.target.value)}
            value={currentFruit}
        >
            <option value="Code">Red Apples</option>
            <option value="Country">Outrageous Oranges</option>
            <option value="Airport Name">Technically a Fruit Tomatoes</option>
        </select> */}
        <div className='my-4'>
            <img height={'30'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADP0lEQVR4nO2aP0jVURTHP+9pQoRlJYFSk2JL5BBCkzila9BiLUXQZItLi1MObkEgRGBTa1sgVCAFQWJiNGQ6CEUQgVgaBfrU92s4Sa9n7977+/3Ou79fej9wpus753vO/fO7f4RAIBAIBAKBfUrBU5w2oBVoAjaBFeAzEHmK750uYASYAtaQRKvtJ/ASGAXOZiNTnwHgOf9O2GazwCWg6F21Ap3AE5IlXm2vgG6/8tMxCHxHJ/kdWweGfCaRlFtAGd3kK22cHE+JEeqXeKXd85VQHAaJ3/ObwDJQivm7CBj2k5YbnbjN+TIwCVwHTvL3UG4DLgOPgC0HXyWgp75pueOy2k8D5x39nQGeOficAxq0kkjKAHahE8iOLw5FYAz7tLqaOoOUvMAs8EFK/7ct/hfxt33fRZdF3DTxe76aAvDYEqc3ZYzEmD57ZdznvI0OYMMQa1wpTmymDKImlWNNGGItKMdyptapLgKuKcfqN8SKgMPK8ay0WQSdUo7XhHnDdE4rkOs+u9XQtoVcbmhSAr4Y2o9rBXItwEFD2zdgW0FLNcuGtkNaQVwLsG5oa4nhJw6mXl7VCuIq/Kuh7QBwQkFLJY3IulMLk566UAB+UHtRuqIcr88QaxsZdSq4joAIeGtov6igxdXfAopTIA6j1O6VLeRUp0E75tF2XylObLoNoiLkSKuxGD60xOlTiJGY2Rqidmwspf+bFv9LZHgaBLm3NwksI0faJCKHkGszk/8b6eSnp4jc25tERsiRtsPRZzv2YR8B88jnMXO6kY2RTfAGcqrrZ/c9QQMyl+9iXvAqbQ7Fz19ahnATvWMl4BOyhnzAfN432Qw5KsIdkiWR1uaAYx7ys1JEbmeyKEKuRsIwyR479lQRepChqZHYPPDG8W9zVYQG5N5+kWSJLyHf+UYkqRnH3+WqCCCboF5kfXhPbeFl4B2yt+9j9+bJSxF8bCubgdPAUUTkym/7iP1U1wI8xe1d8DVwwcHnf8cR5NHFZSTk5hOpTSgC8deE5mxk1pc4RZjISGPdcZ0Oa+T4/4vS4joSvD+h+cRWhKXspPnDVATtB9vc0owseKv86fl9k3wlBfb4nA8EAoFAIKDLL5T8zcSBPCPPAAAAAElFTkSuQmCC"/>&ensp;
            <label><b>Airport Name: </b></label> &ensp;
            <input type='text' onChangeCapture={getData}/>
        </div>                
        </div>
        <div>
            {cont}
        </div>
    </div>
  )
}

export default Airports