import axiosClient from "../axios.js";

const API_KEY = "IlkFQbjcMEqMjfqar2CAduSm6Uaf6RBwQrB4AQ6Mwa5Frau4WR";


// airports
export const getAiportData = ({ commit, state }, payload) => {

  axiosClient.get("/airports/code?apikey="+API_KEY+"&code=" + payload.code)
    .then(({ data }) => {
      commit('SET_AIRPORT_DATA', data);

      if(data.data.length > 0) {
        state.airportsStatus = true;
      }else {
        state.airportsStatus = false;
      }
    });
 
};

export const getAiports = ({ commit }, payload) => {

  axiosClient.get("/airports?apikey="+API_KEY)
    .then(({ data }) => {
      commit('SET_AIRPORTS', data);
    });
 
};

export const prevAiports = ({ commit }, payload) => {
 commit('SET_FETCH_AIRPORTS_PREV', payload.page);
};

export const nextAiports = ({ commit }, payload) => {
  commit('SET_FETCH_AIRPORTS_NEXT',  payload.page);
};


// flight
export const getFlightData = ({ state, commit }, payload) => {

  axiosClient.get("/flight/"+payload.id+"?apikey="+API_KEY)
    .then(({ data }) => {
      commit('SET_FLIGHT_DATA', data);

      if(data.data.length > 0) {
        state.flightsStatus = true;
      }else {
        state.flightsStatus = false;
      }
    });
 
};

export const getFlights = ({ commit }, payload) => {

  axiosClient.get("/flights?apikey="+API_KEY)
    .then(({ data }) => {
      commit('SET_FLIGHTS', data);
    });
 
};

export const prevFlights = ({ commit }, payload) => {
 commit('SET_FETCH_FLIGHTS_PREV', payload.page);
};

export const nextFlights = ({ commit }, payload) => {
  commit('SET_FETCH_FLIGHTS_NEXT',  payload.page);
};

export const search = ({ commit }, payload) => {
  
  commit('SET_SERCH_RESULT', payload);
};

