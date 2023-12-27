<template>
  <Renderer ref="rendererC" antialias resize="true" orbitCtrl :alpha="true">
    <Camera :position="{ z: 3, x: 0, y: 0 }" />
    <Scene>
      <AmbientLight :position="{ y: 50, z: 50 }" />
      <Sphere
        :radius="1"
        ref="sphere"
        :widthSegments="50"
        :heightSegments="50"
        :position="{ x: 0, y: 0, z: 0 }"
      >
        <ShaderMaterial>
          <Texture src="/Texture/gg.jpg" uniform="globeTexture" />
        </ShaderMaterial>
      </Sphere>
      <Sphere
        :radius="0.018"
        ref="airport"
        :widthSegments="50"
        :heightSegments="50"
        :position="{ x: 0, y: 0, z: 0 }"
      >
        <BasicMaterial color="#ff0000" />
      </Sphere>
    </Scene>
  </Renderer>
</template>

<script>
import {
  Box,
  Camera,
  LambertMaterial,
  PointLight,
  Renderer,
  Scene,
  Sphere,
} from "troisjs";

import vertex from "./data/vertex.js";
import fragment from "./data/fragment.js";
import { mapState } from 'vuex';

export default {
  name: "webgl",
  components: {
    Box,
    Camera,
    LambertMaterial,
    PointLight,
    Renderer,
    Scene,
    Sphere,
  },
  computed: mapState([
  'airportData',
]),
  mounted() {
    const renderer = this.$refs.rendererC;

    // earth
    const sphere = this.$refs.sphere;
    sphere.mesh.material.fragmentShader = fragment;
    sphere.mesh.material.vertexShader = vertex;

    const airport = this.$refs.airport;

    console.log(this.airportData)

    renderer.onBeforeRender(() => {
      airport.mesh.position.x = this.airportData['_coord']['x'];
      airport.mesh.position.y = this.airportData['_coord']['y'];
      airport.mesh.position.z = this.airportData['_coord']['z'];
    });


    

  },
  methods: {
    onReady() {
    },
  },
};
</script>

<style>
canvas {
  padding: 0 !important;

}
canvas:hover {
  cursor: pointer;
  
}
</style>
