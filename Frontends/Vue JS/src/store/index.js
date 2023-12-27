import { createStore } from "vuex";
import getters from "./getters";
import * as actions from "./actions";
import mutations from "./mutations";
import modules from "./modules";

const store = createStore({
  state: {
    airportData: {
      name: null,
      city: null,
      country: null,
      iata_code: null,
      map: null,
      _geoloc: {
        lat: null,
        lng: null,
      },
      _coord: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    airports: [],
    fetchAirports: [],
    airportPageNo: 1,
    totalAirports: 0,
    lastAirportsPage: null,
    airportsStatus: true,
    flightData: {
      aircraft_iata: null,
      airline_iata: null,
      airline_name: null,
      createdAt: null,
      flight_date: null,
      flight_status: null,
      id: null,
      segments: {
        departure: {
          airport: null,
          city: null,
          country: null,
          createdAt: null,
          iata: null,
          id: null,
          lat: null,
          lng: null,
          segment_order: null,
          segment_type: null,
          updatedAt: null,
          map: null,
          _coord: {
            x: 0,
            y: 0,
            z: 0,
          }
        },
        arrival: {
          airport: null,
          city: null,
          country: null,
          createdAt: null,
          iata: null,
          id: null,
          lat: null,
          lng: null,
          segment_order: null,
          segment_type: null,
          updatedAt: null,
          map: null,
          _coord: {
            x: 0,
            y: 0,
            z: 0,
          }
        },
      },
      updatedAt: null,
      getCurve:null,
    },
    flights: [],
    fetchFlights: [],
    flightPageNo: 1,
    totalFlights: 0,
    lastFlightsPage: null,
    flightsStatus: true,
    searchResult:[]
  },
  getters,
  actions,
  mutations,
  modules,
});

export default store;
