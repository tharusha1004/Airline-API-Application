<template>
  <div>
    <div v-if="!airportsStatus" class="container-fluid pagenotfound">
      <div class="row"></div>
    </div>
    <div v-else class="airportview">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <webgl></webgl>
          </div>
          <div class="col-md-6 airportDetails">
            <div class="heading">
              <h1>{{ airportData["name"] }}</h1>
            </div>
            <div class="content d-grid gap-2 mt-4">
              <h6><span>Country:</span> {{ airportData["country"] }}</h6>
              <h6><span>City:</span> {{ airportData["city"] }}</h6>
              <h6><span>Iata Code:</span> {{ airportData["iata_code"] }}</h6>

              <div class="geoloc mt-3">
                <span>lat: {{ airportData["_geoloc"]["lat"] }}</span>
                <span>lng: {{ airportData["_geoloc"]["lng"] }}</span>
              </div>
            </div>
            <div class="map mt-5">
              <a class="app-btn" :href="airportData['map']" target="_blank"
                >Google Map</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import webgl from "../components/webgl/WebGL.vue";
import { mapState } from "vuex";

export default {
  components: {
    webgl,
  },
  data() {
    return {};
  },
  created() {
    const code = this.$route.params.id;
    this.$store.dispatch("getAiportData", { code: code });
  },

  computed: mapState(["airportData", "airportsStatus"]),
};
</script>

<style lang="scss" scope>
.container-fluid {
  .row {
    height: 95.8vh;
  }
}
.airportview {
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
.airportDetails {
  padding-top: 8rem;

  .heading {
    color: white;
    font-family: "Fira Sans", sans-serif;
  }
  .content {
    h6 {
      color: white;
      font-family: "Fira Sans", sans-serif;
      font-size: 20px;

      span {
        color: rgb(255, 0, 179);
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
  }
}
</style>
