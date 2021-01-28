<!--<template>
    
<!-- <div class="header-search">
<form role="search" method="get" 
class="header-search__form" > 
<label> -->
 
 <!--</label> 
<v-btn type="submit" color ="blue" class="search-submit" value="Search"> Search </v-btn>  
<v-col cols="12" sm="6" md="4">
<v-text-field
  placeholder="Search for events"
  outlined
  dense
    ></v-text-field> 
    </v-col>
      <div id="map-wrap" style="height: 80vh">
      <no-ssr>
        <l-map
           :zoom="7"
           :center="[34.46427430192848, 9.551030828063602]"
           @click="addMarker"
         >
           <l-tile-layer
             url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
           ></l-tile-layer>
          <l-marker
             v-for="(event, index) in events"
             :lat-lng="getLatLng(event)"
             :key="index"
             @click="removeMarker(index)"
           >
             <l-tooltip :options="{ permanent: true, interactive: true }">{{
//               event.title
//             }}</l-tooltip>
//           </l-marker>
//         </l-map>
//       </no-ssr>
//     </div>
// </form> 
//   </div>
// </template>

// <script> 

// export default {
//   data: () => ({
//     events: [],
//     customText: "",
//   }),
//   created() {
//     this.initialize();
//   },
//   methods: {
//     async initialize() {
//       const events = await this.$axios.$get("/routes/events");
//       this.events = events;
//     },
//     getLatLng({ lat, lng }) {
//       return [lat, lng];
//     },
//     async addMarker(event) {
//       let { lat, lng } = event.latlng;
//       if (this.customText !== "") {
//         let Events = {
//           activity:"id",
//           lat,
//           lng,
//           title: this.customText,
//         };
//         await this.$axios.$post("/routes/Events", place);
//         await this.initialize();
//       }
//     },
//     async removeMarker(index) {
//       let event = this.events[index];
//       await this.$axios.$delete(/routes/Events/${events._id} );
//       await this.initialize();
//     },
//   },
// };
// </script>
 