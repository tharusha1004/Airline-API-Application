<template>
  <div>
    <div v-if="!flightsStatus" class="container-fluid pagenotfound">
      <div class="row"></div>
    </div>
    <div v-else class="flightview">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <webgl2></webgl2>
          </div>
          <div class="col-md-6 flightDetails">
            <div class="heading">
              <h2>
                Flight Date: <span>{{ flightData["flight_date"] }}</span>
              </h2>
              <div class="contentFlight d-grid">
                  <h6>Status:  <span>{{ flightData["flight_status"] ? "Active" : "De-Active"}}</span></h6>
              </div>
            </div>

            <div class="heading-column">
              <div class="fromData">
                <div class="d-flex gap-3 align-items-center">
                  <h3>Departure</h3>
                  <div style="height:20px; width:20px;background:red; border-radius:50%"></div>
                </div>
               
                <div class="contentFlight d-grid gap-2 mt-4">
                  <h6>
                    Flight:
                    <span
                      >
                      {{ flightData["segments"]["departure"]["airport"] }}</span
                    >
                  </h6>
                  <h6>
                    City:
                    <span
                      >
                      {{ flightData["segments"]["departure"]["city"] }}</span
                    >
                  </h6>
                  <h6>
                    Country:
                    <span
                      >
                      {{ flightData["segments"]["departure"]["country"] }}</span
                    >
                  </h6>
                  <h6>
                    Lat:
                    <span
                      >
                      {{ flightData["segments"]["departure"]["lat"] }}</span
                    >
                  </h6>
                  <h6>
                    Lng:
                    <span
                      >
                      {{ flightData["segments"]["departure"]["lng"] }}</span
                    >
                  </h6>
                  <h6>
                    Iata Code:
                    <span
                      >
                      {{ flightData["segments"]["departure"]["iata"] }}</span
                    >
                  </h6>
                </div>
                <div class="map mt-5">
                  <a class="app-btn" :href="flightData['segments']['departure']['map']" target="_blank">Google Map</a>
                </div>
              </div>

              <div class="toData">
                <div class="d-flex gap-3 align-items-center">
                  <h3>Arrival</h3>
                  <div style="height:20px; width:20px;background:lime; border-radius:50%"></div>
                </div>
                <div class="contentFlight d-grid gap-2 mt-4">
                  <h6>Flight: <span>{{ flightData["segments"]["arrival"]["airport"] }}</span></h6>
                  <h6>City: <span>{{ flightData["segments"]["arrival"]["city"] }}</span></h6>
                  <h6>Country: <span>{{ flightData["segments"]["arrival"]["country"] }}</span></h6>
                  <h6>Lat: <span>{{ flightData["segments"]["arrival"]["lat"] }}</span></h6>
                  <h6>Lng: <span>{{ flightData["segments"]["arrival"]["lng"] }}</span></h6>
                  <h6>Iata Code:<span>{{ flightData["segments"]["arrival"]["iata"] }}</span></h6>
                </div>
                <div class="map mt-5">
                  <a class="app-btn" :href="flightData['segments']['arrival']['map']" target="_blank">Google Map</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import webgl2 from "../components/webgl/WebGL2.vue";
import { mapState } from "vuex";

export default {
  components: {
    webgl2,
  },
  data() {
    return {};
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("getFlightData", { id: id });
  },

  computed: mapState(["flightData", "flightsStatus"]),
};
</script>

<style lang="scss" scope>
.container-fluid {
  .row {
    height: 95.8vh;
  }
}
.flightview {
  background-image: url("/img/normal-bg.png");
  background-position: center center;
  background-repeat: repeat;
  background-size: 100%;
}
.pagenotfound {
  background-image: url("/pagenotfound.gif");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
}
.flightDetails {
  padding-top: 7rem;

  .heading {
    color: rgb(255, 0, 179);
    font-family: "Fira Sans", sans-serif;
    span {
      color: white;
    }
  }

  .heading-column {
    display: flex;
    font-family: "Fira Sans", sans-serif;
    h3{
      color: white;
    }
    .fromData {
      flex:1;
      .contentFlight {
        h6 {
          color: white;
          font-family: "Fira Sans", sans-serif;
          font-size: 18px;
          margin:0;

          span {
            color: rgb(255, 0, 179);
            font-size: 17px;
          }
        }
      }
    }

    .toData{
      flex:1;
      .contentFlight {
        h6 {
          color: white;
          font-family: "Fira Sans", sans-serif;
          font-size: 18px;
          margin:0;

          span {
            color: rgb(255, 0, 179);
            font-size: 17px;
          }
        }
      }
    }
  }
}

.geoloc {
  display: flex;

  span {
    color: rgba(255, 255, 255, 0.719);
    font-weight: 700;
    margin-right: 15px;
    font-size: 20px;
  }
}

.app-btn {
  background: #8e0ad4;
  font-family: "Fira Sans", sans-serif;
  border-radius: 25px;
  border: none;
  padding: 10px 30px;
  color: white;
  transition: background 800ms linear;
  text-decoration: none;
}
.app-btn:hover {
  background: #c319c9;
  text-decoration: none;
  color: white;
}
</style>
