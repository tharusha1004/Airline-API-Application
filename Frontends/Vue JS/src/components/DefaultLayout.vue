<template>
  <div>
    <div v-if="!isMobile">
      <nav class="navbar navbar-expand-lg bg-light px-3 fixed-top">
        <div class="container-fluid">
          <router-link :to="links[0].path"
            ><img src="../assets/logo/sitelogo.png" class="brand"
          /></router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto gap-2">
              <li class="nav-item" v-for="(link, i) in links" :key="i">
                <router-link class="nav-link" :to="link.path">{{
                  link.name
                }}</router-link>
              </li>
            </ul>
            <a
              class="search-link"
              data-bs-toggle="offcanvas"
              href="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i class="bi bi-search"></i>
            </a>
          </div>
        </div>
      </nav>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            Search Flight
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <form class="row g-3" novalidate v-show="searchForm">
            <div class="col-md-12">
              <label for="validationCustom01" class="form-label"
                >Flight Date</label
              >
              <input
                type="date"
                class="form-control"
                id="validationCustom01"
                required
                v-model="searchDate"
              />
            </div>
            <div class="col-md-6">
              <label for="validationCustom02" class="form-label"
                >Departures</label
              >
              <select
                class="form-select"
                id="validationCustom04"
                required
                v-model="searchDepartures"
              >
                <option selected value="" disabled>Select</option>
                <option
                  v-for="(airport, i) in airports"
                  :key="i"
                  :value="airport.iata_code"
                >
                  {{ airport.name }}
                </option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="validationCustom02" class="form-label">Arrival</label>
              <select
                class="form-select"
                id="validationCustom04"
                required
                v-model="searchArrival"
              >
                <option selected value="" disabled>Select</option>
                <option
                  v-for="(airport, i) in airports"
                  :key="i"
                  :value="airport.iata_code"
                >
                  {{ airport.name }}
                </option>
              </select>
            </div>
            <div class="col-12 mt-4 d-grid">
              <button class="btn btn-primary" type="button" @click="search()">
                <i class="bi bi-search me-2"></i>Search
              </button>
            </div>
          </form>
          <div class="col-md-12 searchResult" v-show="!searchForm">
            <div class="d-grid">
              <button
                class="btn btn-primary mb-3"
                type="button"
                @click="searchForm = true"
              >
                <i class="bi bi-search me-2"></i>Search
              </button>
            </div>
            <div
              v-for="(flight, i) in searchResult"
              class="card"
              :key="i"
              @click="viewFlight(flight.id)"
            >
              <div class="card-body">
                <div class="card-title">Date: {{ flight.flight_date }}</div>
                <div class="card-text">
                  <h6>
                    <span>Departure:</span> {{ flight.segments[0].country }}
                  </h6>
                  <h6>
                    <span>Arrival:</span> {{ flight.segments[1].country }}
                  </h6>
                  <h6><span>Flight Date:</span> {{ flight.flight_date }}</h6>
                  <h6><span>Airline:</span> {{ flight.airline_name }}</h6>
                  <h6>
                    <span>Status:</span
                    >{{ flight.flight_status ? " Active" : " De-Active" }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
      <footer>
        <div class="text-center p-1 d-flex justify-content-center flex-wrap">
          <span class="pe-3"
            >Copyright &copy;2022 Flight Finder All RightReserved.</span
          >
          <span>Design & code by Hackerstreet</span>
        </div>
      </footer>
    </div>
    <div v-else class="mobileBlock">
      <h2>This site not working in mobile devices</h2>
      <i class="bi bi-emoji-frown-fill"></i>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DefaultLayout",
  components: {
  },
  data() {
    return {
      links: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Flights",
          path: "/flights",
        },
        {
          name: "Airports",
          path: "/airports",
        },
      ],
      activeNav: "",
      isMobile: null,
      searchDate: "",
      searchDepartures: "",
      searchArrival: "",
      searchForm: true,
    };
  },

  computed: mapState(["airports", "searchResult"]),
  created() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      const screenSize = window.innerWidth;
      if (screenSize < 1366) {
        this.isMobile = true;
        return;
      }
      this.isMobile = false;
    },
    viewFlight(code) {
      window.location.href = "/flights/"+code;
      // this.$router.push({ name: "flightViewpage", params: { id: code } });
    },
    search() {
      if (this.searchDate == "") {
        alert("please select flight date");
        return;
      }

      if (this.searchDepartures == "") {
        alert("please select Departures Airport");
        return;
      }

      if (this.searchArrival == "") {
        alert("please select Arrival Airport");
        return;
      }

      this.searchForm = false;
      this.$store.dispatch("search", {
        date: this.searchDate,
        departures: this.searchDepartures,
        arrival: this.searchArrival,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background: transparent !important;
  padding-block: 0.5rem;

  .brand {
    width: 4rem;
  }
  .navbar-nav {
    .nav-link {
      text-transform: uppercase;
      font-family: "Fira Sans", sans-serif;
      font-weight: 500;
      font-size: 1rem;
      color: white;
      letter-spacing: 1px;
    }
    .nav-link:hover {
      color: #ff00fb;
    }
  }
}

.active,
.router-link-exact-active {
  color: #ff00fb !important;
}
.search-link {
  color: white;
}
.search-link:hover {
  color: #ff00fb;
}

.offcanvas {
  h5 {
    font-family: "Fira Sans", sans-serif;
    text-transform: uppercase;
  }
  .offcanvas-body {
    form {
      label {
        font-family: "Fira Sans", sans-serif;
        font-weight: 500;
      }
      input,
      select {
        font-family: "Fira Sans", sans-serif;
        border: 1px solid #8d0ad485;
      }

      button {
        background: #8e0ad4;
        font-family: "Fira Sans", sans-serif;
        border-radius: 25px;
        border: none;
        padding: 10px 30px;
        color: white;
        transition: background 800ms linear;
      }
      button:hover {
        background: #c319c9;
      }
    }
  }

  .searchResult {
    button {
      background: #8e0ad4;
      font-family: "Fira Sans", sans-serif;
      border-radius: 25px;
      border: none;
      padding: 10px 30px;
      color: white;
      transition: background 800ms linear;
    }
    button:hover {
      background: #c319c9;
    }

    .card {
      width: auto;
      height: 15rem;
      margin-bottom: 22px;
      background: rgba(105, 0, 105, 0.956);
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
        background: rgba(42, 0, 42, 0.849);
      }
  }
}

@media (max-width: 768px) {
  .navbar {
    padding-inline: 0 !important;
    padding-block: 0.5rem;
  }
  .brand {
    width: 2rem;
    height: auto;
  }
}

.mobileBlock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-image: url("/img/normal-bg.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.mobileBlock h2 {
  font-size: 62px;
  text-align: center;
  color: white;
}
.mobileBlock i {
  font-size: 62px;
  text-align: center;
  color: white;
}

footer {
  text-transform: uppercase;
  font-family: "Fira Sans", sans-serif;
  background: rgba(117, 8, 131, 0.76) !important;

  div {
    span {
      color: white;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.5px;
    }
  }
}
</style>
