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
        ref="departure"
        :widthSegments="50"
        :heightSegments="50"
        :position="{ x: 0, y: 0, z: 0 }"
      >
        <BasicMaterial color="#ff0000" />
      </Sphere>

      <Sphere
        :radius="0.018"
        ref="arrival"
        :widthSegments="50"
        :heightSegments="50"
        :position="{ x: 0, y: 0, z: 0 }"
      >
        <BasicMaterial color="#32cd32" />
      </Sphere>

      <Tube
      ref="path"
      :path="flightData.getCurve"
      :tubularSegments="20"
      :radius="0.008"
      :radialSegments="8"
      :closed="false"
      >
        <BasicMaterial color="#00FFFF" />
      </Tube>
    </Scene>
  </Renderer>
</template>

<script>
import {
  Box,
  TubeGeometry,
  Camera,
  LambertMaterial,
  PointLight,
  Renderer,
  Scene,
  Sphere,
} from "troisjs";

import vertex from "./data/vertex.js";
import fragment from "./data/fragment.js";
import { mapState } from "vuex";

export default {
  name: "webgl",
  components: {
    Box,
    TubeGeometry,
    Camera,
    LambertMaterial,
    PointLight,
    Renderer,
    Scene,
    Sphere,
  },
  computed: mapState(["flightData"]),
  mounted() {
    const renderer = this.$refs.rendererC;

    // earth
    const sphere = this.$refs.sphere;
    const path = this.$refs.path;

    sphere.mesh.material.fragmentShader = fragment;
    sphere.mesh.material.vertexShader = vertex;

  
    const departure = this.$refs.departure;
    const arrival = this.$refs.arrival;

    renderer.onBeforeRender(() => {

      departure.mesh.position.x = this.flightData['segments']['departure']['_coord']['x'];
      departure.mesh.position.y = this.flightData['segments']['departure']['_coord']['y'];
      departure.mesh.position.z = this.flightData['segments']['departure']['_coord']['z'];

      arrival.mesh.position.x = this.flightData['segments']['arrival']['_coord']['x'];
      arrival.mesh.position.y = this.flightData['segments']['arrival']['_coord']['y'];
      arrival.mesh.position.z = this.flightData['segments']['arrival']['_coord']['z'];

    });
  },
  methods: {
    onReady() {},
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
