<template>
  <v-app>
  <v-container>
     <h1> Events you might like </h1>
    <br> <br>

  
    <!-- event -->
    <v-row justify="space-around">
      <v-col cols="4" v-for="event in events" :key="event._id">
    <div>
        <v-card class="mx-auto" max-width="500">
   <v-img class="white--text align-end" height="200px" :src="event.image" aspect-ratio="1.7"></v-img>
     
     <v-card-subtitle class="pb-0">
      <strong>{{event.dateevents}}</strong>
    </v-card-subtitle>
     <v-card-title> <strong>{{event.title}}</strong> </v-card-title>

    <v-card-actions>
      <v-btn text color="teal accent-4" @click="reveal = true"> Learn More</v-btn>
      <v-btn text color="teal accent-4" > Watch Video</v-btn>
      <v-btn text color="teal accent-4" router-link to="/tickets"> Buy Ticket</v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
        <v-card-text class="pb-0">
         
          <p> {{event.description}} </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn text color="teal accent-4" @click="reveal = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>


    </div>
    </v-col>
    </v-row>

    <h2 data-orig-font="48px" style="font-size: 40px;">Plan a Visit to Tunisia</h2>
    <p>
      Participating in one of the many festivals in Tunisia is a great way to experience Tunisia.
      If you are interested in visiting Tunisia our travel experts
      are happy to assist you to plan a Tunisia tour that could include one or more of these festivals in Tunisia.
    </p>

  </v-container>
    </v-app>
</template>


<script>
import axios from 'axios'
export default {
  
  name: "Events",

  data: () => {return{
        events: [],
      reveal: false,
   }},
  async mounted() {
    const response = await axios.get("http://localhost:5000/api/events/allevents"); 
    console.log(response.data)
    this.events = response.data;
  },
};
</script>


<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>