import * as THREE from "three";

function convertLatLngToCartesianfunction(lat, lng) {
  var phi = (90 - lat) * (Math.PI / 180);
  var theta = (lng + 180) * (Math.PI / 180);

  let x = -(Math.sin(phi) * Math.cos(theta));
  let z = Math.sin(phi) * Math.sin(theta);
  let y = Math.cos(phi);

  const data = {
    x: x,
    y: y,
    z: z,
  };
  return data;
}

function convertpath(paths) {
  let vecPos = [];

  paths.forEach(function (path) {
    let pos = new THREE.Vector3(path.x, path.y, path.z);
    vecPos.push(pos);
  });

  return vecPos;
}

function sortPath(vecPos) {
  for (let i = 0; i < vecPos.length; i++) {
    for (let j = 1; j < vecPos.length - i; j++) {
      if (vecPos[j - 1].x > vecPos[j].x) {
        let temp = vecPos[j - 1];
        vecPos[j - 1] = vecPos[j];
        vecPos[j] = temp;
      }
    }
  }

  return vecPos;
}

function getCurve(vecPos) {
  for (let c = 0; c < vecPos.length - 1; c++) {
    let curvePoints = [];

    for (let i = 0; i <= 20; i++) {
      let p = new THREE.Vector3().lerpVectors(vecPos[c], vecPos[c + 1], i / 20);
      p.normalize();
      p.multiplyScalar(1 + 0.1 * Math.sin((Math.PI * i) / 20));
      curvePoints.push(p);
    }

    let t_path = new THREE.CatmullRomCurve3(curvePoints);

    return t_path;
  }
}

export default {
  SET_AIRPORT_DATA(state, res_data) {
    if (res_data.data.length > 0) {
      state.airportData["name"] = res_data.data[0].name;
      state.airportData["city"] = res_data.data[0].city;
      state.airportData["country"] = res_data.data[0].country;
      state.airportData["iata_code"] = res_data.data[0].iata_code;

      const lat = res_data.data[0]._geoloc["lat"];
      const lng = res_data.data[0]._geoloc["lng"];

      state.airportData["_geoloc"]["lat"] = lat;
      state.airportData["_geoloc"]["lng"] = lng;
      state.airportData["map"] =
        "https://www.google.com/maps/@" + lat + "," + lng + ",15z";

      var convertedCoord = convertLatLngToCartesianfunction(lat, lng);

      state.airportData["_coord"]["x"] = convertedCoord.x;
      state.airportData["_coord"]["y"] = convertedCoord.y;
      state.airportData["_coord"]["z"] = convertedCoord.z;
    }
  },

  SET_AIRPORTS(state, res_data) {
    const fetch = res_data.data.slice(0, 10);
    if (res_data.data.length > 0) {
      res_data.data.forEach((data) => {
        state.airports.push(data);
      });

      fetch.forEach((data) => {
        state.fetchAirports.push(data);
      });

      state.totalAirports = res_data.data.length;
      state.lastAirportsPage = Math.ceil(res_data.data.length / 10);
    }
  },
  SET_FETCH_AIRPORTS_PREV(state, page) {
    if (page == 1) {
      const fetch = state.airports.slice(0, 10);

      if (fetch.length > 0) {
        state.fetchAirports = [];

        fetch.forEach((data) => {
          state.fetchAirports.push(data);
        });
      }
    } else {
      const from = (page - 1) * 10;
      const to = from + 10;
      const fetch = state.airports.slice(from, to);

      if (fetch.length > 0) {
        state.fetchAirports = [];

        fetch.forEach((data) => {
          state.fetchAirports.push(data);
        });
      }
    }
    state.airportPageNo = state.airportPageNo - 1;
  },
  SET_FETCH_AIRPORTS_NEXT(state, page) {
    const lastPage = state.lastAirportsPage;

    if (page == lastPage) {
      const remain = state.totalAirports % 10;

      if (remain != 0) {
        const from = state.airports.length - remain;
        const to = state.airports.length;
        const fetch = state.airports.slice(from, to);

        if (fetch.length > 0) {
          state.fetchAirports = [];

          fetch.forEach((data) => {
            state.fetchAirports.push(data);
          });
        }
      } else {
        const from = state.airportPageNo * 10;
        const to = from + 10;
        const fetch = state.airports.slice(from, to);

        if (fetch.length > 0) {
          state.fetchAirports = [];

          fetch.forEach((data) => {
            state.fetchAirports.push(data);
          });
        }
      }
    } else {
      const from = state.airportPageNo * 10;
      const to = from + 10;
      const fetch = state.airports.slice(from, to);

      if (fetch.length > 0) {
        state.fetchAirports = [];

        fetch.forEach((data) => {
          state.fetchAirports.push(data);
        });
      }
    }
    state.airportPageNo = state.airportPageNo + 1;
  },

  SET_FLIGHT_DATA(state, res_data) {
    if (res_data.data.length > 0) {
      const paths = [];

      state.flightData["aircraft_iata"] = res_data.data[0].aircraft_iata;
      state.flightData["airline_iata"] = res_data.data[0].airline_iata;
      state.flightData["airline_name"] = res_data.data[0].airline_name;
      state.flightData["createdAt"] = res_data.data[0].createdAt;
      state.flightData["flight_date"] = res_data.data[0].flight_date;
      state.flightData["flight_status"] = res_data.data[0].flight_status;
      state.flightData["id"] = res_data.data[0].id;

      state.flightData["segments"]["departure"]["airport"] =
        res_data.data[0].segments[0].airport;
      state.flightData["segments"]["departure"]["city"] =
        res_data.data[0].segments[0].city;
      state.flightData["segments"]["departure"]["country"] =
        res_data.data[0].segments[0].country;
      state.flightData["segments"]["departure"]["createdAt"] =
        res_data.data[0].segments[0].createdAt;
      state.flightData["segments"]["departure"]["iata"] =
        res_data.data[0].segments[0].iata;
      state.flightData["segments"]["departure"]["id"] =
        res_data.data[0].segments[0].id;
      state.flightData["segments"]["departure"]["segment_order"] =
        res_data.data[0].segments[0].segment_order;
      state.flightData["segments"]["departure"]["segment_type"] =
        res_data.data[0].segments[0].segment_type;
      state.flightData["segments"]["departure"]["updatedAt"] =
        res_data.data[0].segments[0].updatedAt;

      const depLat = parseFloat(res_data.data[0].segments[0].lat);
      const depLng = parseFloat(res_data.data[0].segments[0].lng);

      state.flightData["segments"]["departure"]["lat"] = depLat;
      state.flightData["segments"]["departure"]["lng"] = depLng;

      var convertedCoord = convertLatLngToCartesianfunction(depLat, depLng);

      state.flightData["segments"]["departure"]["_coord"]["x"] =
        convertedCoord.x;
      state.flightData["segments"]["departure"]["_coord"]["y"] =
        convertedCoord.y;
      state.flightData["segments"]["departure"]["_coord"]["z"] =
        convertedCoord.z;

      state.flightData["segments"]["departure"]["map"] =
        "https://www.google.com/maps/@" + depLat + "," + depLng + ",15z";

      paths.push(state.flightData["segments"]["departure"]["_coord"]);

      state.flightData["segments"]["arrival"]["airport"] =
        res_data.data[0].segments[1].airport;
      state.flightData["segments"]["arrival"]["city"] =
        res_data.data[0].segments[1].city;
      state.flightData["segments"]["arrival"]["country"] =
        res_data.data[0].segments[1].country;
      state.flightData["segments"]["arrival"]["createdAt"] =
        res_data.data[0].segments[1].createdAt;
      state.flightData["segments"]["arrival"]["iata"] =
        res_data.data[0].segments[1].iata;
      state.flightData["segments"]["arrival"]["id"] =
        res_data.data[0].segments[1].id;
      state.flightData["segments"]["arrival"]["segment_order"] =
        res_data.data[0].segments[1].segment_order;
      state.flightData["segments"]["arrival"]["segment_type"] =
        res_data.data[0].segments[1].segment_type;
      state.flightData["segments"]["arrival"]["updatedAt"] =
        res_data.data[0].segments[1].updatedAt;

      const arrLat = parseFloat(res_data.data[0].segments[1].lat);
      const arrLng = parseFloat(res_data.data[0].segments[1].lng);

      state.flightData["segments"]["arrival"]["lat"] = arrLat;
      state.flightData["segments"]["arrival"]["lng"] = arrLng;

      var convertedCoord = convertLatLngToCartesianfunction(arrLat, arrLng);

      state.flightData["segments"]["arrival"]["_coord"]["x"] = convertedCoord.x;
      state.flightData["segments"]["arrival"]["_coord"]["y"] = convertedCoord.y;
      state.flightData["segments"]["arrival"]["_coord"]["z"] = convertedCoord.z;

      state.flightData["segments"]["arrival"]["map"] =
        "https://www.google.com/maps/@" + arrLat + "," + arrLng + ",15z";

      paths.push(state.flightData["segments"]["arrival"]["_coord"]);

      const convertedPaths = convertpath(paths);
      const sortedPaths = sortPath(convertedPaths);
      const getCurvePath = getCurve(sortedPaths);

      state.flightData["updatedAt"] = res_data.data[0].updatedAt;
      state.flightData["getCurve"] = getCurvePath;
    }
  },

  SET_FLIGHTS(state, res_data) {
    const fetch = res_data.data.slice(0, 10);
    if (res_data.data.length > 0) {
      res_data.data.forEach((data) => {
        state.flights.push(data);
      });

      fetch.forEach((data) => {
        state.fetchFlights.push(data);
      });

      state.totalFlights = res_data.data.length;
      state.lastFlightsPage = Math.ceil(res_data.data.length / 10);
    }
  },
  SET_FETCH_FLIGHTS_PREV(state, page) {
    if (page == 1) {
      const fetch = state.flights.slice(0, 10);

      if (fetch.length > 0) {
        state.fetchFlights = [];

        fetch.forEach((data) => {
          state.fetchFlights.push(data);
        });
      }
    } else {
      const from = (page - 1) * 10;
      const to = from + 10;
      const fetch = state.flights.slice(from, to);

      if (fetch.length > 0) {
        state.fetchFlights = [];

        fetch.forEach((data) => {
          state.fetchFlights.push(data);
        });
      }
    }
    state.flightPageNo = state.flightPageNo - 1;
  },
  SET_FETCH_FLIGHTS_NEXT(state, page) {
    const lastPage = state.lastFlightsPage;

    if (page == lastPage) {
      const remain = state.totalFlights % 10;

      if (remain != 0) {
        const from = state.flights.length - remain;
        const to = state.flights.length;
        const fetch = state.flights.slice(from, to);

        if (fetch.length > 0) {
          state.fetchFlights = [];

          fetch.forEach((data) => {
            state.fetchFlights.push(data);
          });
        }
      } else {
        const from = state.flightPageNo * 10;
        const to = from + 10;
        const fetch = state.flights.slice(from, to);

        if (fetch.length > 0) {
          state.fetchFlights = [];

          fetch.forEach((data) => {
            state.fetchFlights.push(data);
          });
        }
      }
    } else {
      const from = state.flightPageNo * 10;
      const to = from + 10;
      const fetch = state.flights.slice(from, to);

      if (fetch.length > 0) {
        state.fetchAirports = [];

        fetch.forEach((data) => {
          state.fetchAirports.push(data);
        });
      }
    }
    state.flightPageNo = state.flightPageNo + 1;
  },

  SET_SERCH_RESULT(state, searchResult) {
    var filterData = [];

    var flithData = state.flights;

    if (flithData.length > 0) {
      flithData.forEach((element) => {
        if (element["flight_date"] == searchResult.date) {
          if (element["segments"][0]["iata"] == searchResult.departures) {
            if (element["segments"][1]["iata"] == searchResult.arrival) {
              filterData.push(element);
            }
          }
        }
      });
    }

    state.searchResult = filterData;

    console.log(state.searchResult);
  },
};
