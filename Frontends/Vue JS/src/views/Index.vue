<template>
  <div>
    <div class="container-fluid home">
      <div class="row">
        <div class="col-md-6 home-content">
          <div class="heading drop-in">
            <h1>Life is Short<br />And The World Is Wide!</h1>
          </div>
          <div class="drop-in-2">
            <div class="para">
              <p>
                To get best of your adventure you just need to leave and go
                where you like
              </p>
            </div>
            <div class="button">
              <router-link class="nav-link" to="/flights"><button type="button" class="btn app-btn">Flights</button></router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 home-animate">
          <atropos class="my-atropos m-auto" :shadow="false" :highlight="false">
            <img class="drop-opacity" src="/img/plane/plane.png" data-atropos-offset="0" />
          </atropos>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Atropos from "atropos/vue";

export default {
  components: {
    Atropos,
  },
};
</script>
<style lang="scss" scoped>
.container-fluid {
  .row {
    height: 95.8vh;
  }
}
.home {
  background-image: url("/img/plane/bg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
}
.home-content {
  padding-left: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .heading {
    h1 {
      font-size: 4.5rem;
      text-transform: uppercase;
      font-family: "Fira Sans", sans-serif;
      font-weight: bolder;
      color: white;
    }
  }

  .para {
    p {
      font-family: "Fira Sans", sans-serif;
      color: #ef39f5;
      font-size: 20px;
    }
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
}
.app-btn:hover {
  background: #c319c9;
}
.home-animate {
  display: flex;
  align-items: center;
  justify-content: center;
}

.drop-in {
  animation: drop-in 1s ease 200ms backwards;
}

.drop-in-2 {
  animation: drop-in 1200ms ease 500ms backwards;
}

@keyframes drop-in {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translate(0px);
  }
}

.drop-opacity {
    animation: drop-opacity 1.3s linear 400ms backwards;
}

@keyframes drop-opacity {
    0% {
        opacity: 0;
        // transform: translateX(100px);
    }

    5% {
        opacity: 0.5;
        // transform: translateX(100px);
    }

    100% {
        opacity: 1;
        // transform: translateY(0px);
    }
}
</style>
