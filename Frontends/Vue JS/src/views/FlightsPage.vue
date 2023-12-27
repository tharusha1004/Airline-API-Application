<template>
  <div id="flights">
    <div v-show="flightPageNo != 1" class="slider-btn perv" @click="togglePrev()">
      <i class="bi bi-caret-left-fill"></i>
    </div>
    <div v-show="flightPageNo != lastFlightsPage" class="slider-btn next" @click="toggleNext()">
      <i class="bi bi-caret-right-fill"></i>
    </div>
    <div class="pageNo">
      <h6>{{ flightPageNo }} - {{ lastFlightsPage }}</h6>
    </div>
    <div class="container flights">
      <div class="row">
        <div class="col-md-12 airportcards">

          <div
            v-for="(flight, i) in fetchFlights"
            class="card"
            :key="i"
            @click="viewFlight(flight.id)"
          >
            <div class="card-body">
              <div class="card-title">Date: {{ flight.flight_date }}</div>
              <div class="card-text">
                <h6><span>Departure:</span> {{ flight.segments[0].country  }}</h6>
                <h6><span>Arrival:</span> {{ flight.segments[1].country }}</h6>
                <h6><span>Flight Date:</span> {{ flight.flight_date }}</h6>
                <h6><span>Airline:</span> {{ flight.airline_name }}</h6>
                <h6><span>Status:</span>{{flight.flight_status ? " Active" : " De-Active"}}</h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "flights",
  data() {
    return {};
  },
  computed: mapState(["fetchFlights", "flightPageNo", "lastFlightsPage"]),
  methods: {
    viewFlight(code) {
      this.$router.push({ name: "flightViewpage", params: { id: code } });
    },
    togglePrev() {
      this.$store.dispatch("prevFlights", {page: this.flightPageNo - 1});
    },
    toggleNext() {
      this.$store.dispatch("nextFlights", {page: this.flightPageNo + 1});
    },
  },
};
</script>
<style lang="scss" scope>
#flights {
  position: relative;
}
.container {
  .row {
    height: 95.8vh;
    padding-top: 5rem;

    .airportcards {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;

      .card {
        width: 13rem;
        height: 15rem;
        margin-bottom: 22px;
        background: rgba(54, 0, 54, 0.486);
        border: none;
        transition: background 500ms linear;

        .card-body {
          .card-title {
            color: white;
            font-family: "Fira Sans", sans-serif;
            font-size: 18px;
          }
          .card-text {
            display: grid;
            grid-template-columns: 1fr;
            font-family: "Fira Sans", sans-serif;
            margin-top: 20px;

            h6 {
              color: rgba(255, 255, 255, 0.719);
              font-size: 15px;
              span {
                color: rgb(255, 0, 179);
              }
            }

            .geoloc {
              display: grid;
              margin-top: 10px;

              span {
                color: rgba(255, 255, 255, 0.719);
                font-weight: 700;
              }
            }
          }
        }
      }

      .card:hover {
        cursor: pointer;
        background: rgba(34, 0, 34, 0.74);
      }
    }
  }
}
.flights {
  background-image: url("/img/normal-bg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
}

.slider-btn {
  background: rgba(53, 0, 58, 0.534);
  height: 30px;
  width: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  transition: background 400ms linear;

  position: absolute;

  i {
    color: white;
  }
}
.slider-btn:hover {
  background: rgba(0, 0, 0, 0.253);
  cursor: pointer;
}
.perv {
  top: 50%;
  left: 3%;
}
.next {
  top: 50%;
  right: 3%;
}
.pageNo {
  bottom:2%;
  right: 2%;
  position: absolute;

  h6 {
    color: white;
    font-family: "Fira Sans", sans-serif;
  }
}
</style>
