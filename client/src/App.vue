<template>
  <v-app>
    <img
      src=""
      id="bg"
      alt
    />
    
    <v-app-bar max-height="65">
      <navbar />
    </v-app-bar>
    <div class="app"></div>
    <router-view></router-view>

    <v-footer>
      <Foot />
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "./layout/Navbar/navbar";
import Foot from "./layout/Footer/foot";

export default {
  data() {
    return {};
  },
  components: {
    Navbar: Navbar,
    Foot: Foot,
  },
};
</script>

<style>
#bg {
  position: fixed;
  top: 0;
  left: 0;

  min-width: 100%;
  min-height: 100%;
}

</style>
