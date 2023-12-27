<template>
  <div id="airports">
    <div v-show="airportPageNo != 1" class="slider-btn perv" @click="togglePrev()">
      <i class="bi bi-caret-left-fill"></i>
    </div>
    <div v-show="airportPageNo != lastAirportsPage" class="slider-btn next" @click="toggleNext()">
      <i class="bi bi-caret-right-fill"></i>
    </div>
    <div class="pageNo">
      <h6>{{ airportPageNo }} - {{ lastAirportsPage }}</h6>
    </div>
    <div class="container aitports">
      <div class="row">
        <div class="col-md-12 airportcards">
          <div
            v-for="(airport, i) in fetchAirports"
            class="card"
            :key="i"
            @click="viewAirport(airport.iata_code)"
          >
            <div class="card-body">
              <h5 class="card-title">{{ airport.name }}</h5>
              <div class="card-text">
                <h6><span>Country:</span> {{ airport.country }}</h6>
                <h6><span>City:</span> {{ airport.city }}</h6>
                <h6><span>Iata Code:</span> {{ airport.iata_code }}</h6>

                <div class="geoloc">
                  <span>lat: {{ airport._geoloc["lat"] }}</span>
                  <span>lng: {{ airport._geoloc["lng"] }}</span>
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
import { mapState } from 'vuex';

export default {
  name: "airports",
  data() {
    return {};
  },
  computed: mapState(["fetchAirports", "airportPageNo", "lastAirportsPage"]),
  methods: {
    viewAirport(code) {
      this.$router.push({ name: "AirportViewPage", params: { id: code } });
    },
    togglePrev() {
      this.$store.dispatch("prevAiports", {page: this.airportPageNo - 1});
    },
    toggleNext() {
      this.$store.dispatch("nextAiports", {page: this.airportPageNo + 1});
    },
  },
};
</script>
<style lang="scss" scope>
#airports {
  position: relative;
}
.container {
  .row {
    height: 95.8vh;
    padding-top: 5rem;

    .airportcards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

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
            text-align: center;
            font-family: "Fira Sans", sans-serif;
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
.aitports {
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
