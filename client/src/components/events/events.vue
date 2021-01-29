<template>
  <v-app>
  <v-container>
    <createEvent v-if="apear"/>
  <v-btn
      v-if="userstatus === 'admin'"
      class="mx-2"
      dark
      large
      color="cyan"
   @click="apearcarcreate"
    > create event
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>

    <div>
     <h1> Events you might like <img src="https://www.pngitem.com/pimgs/m/376-3765871_transparent-tunisia-flag-png-png-download.png" id="gg" alt/></h1> 

     </div>
   <br>
   <br>
    <!-- event -->
    <v-row justify="space-around">
      <v-col cols="4" v-for="(event, index) in events" :key="event.id">
    <div>
        <v-card class="mx-auto" max-width="500" color="teal lighten-2">
   <v-img class="white--text align-end" height="200px" :src="event.image" aspect-ratio="1.7"></v-img>
     
     <v-card-subtitle color="white">
      <strong>{{event.dateevents}}</strong>
    </v-card-subtitle>
     <v-card-title color="black"> <strong>{{event.title}}</strong> </v-card-title>   
      <v-btn color="teal accent-2" @click="revealEv(index)"> Learn More </v-btn>  <v-btn color="teal accent-2" @click="showevent(event._id)"> Buy Ticket</v-btn>
        <v-btn v-if="userstatus === 'admin'" class="ma-1" color="red" @click="remove(event._id)">Delete</v-btn>
      <br>
      <v-btn block color="teal accent-2" @click="watchVideo(index)" >Watch Video <v-icon>mdi-television-play</v-icon></v-btn>
    <v-expand-transition>
          
      <v-card v-if="event.reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
        <v-card-text color="black" >
         
         <strong> <p> {{event.description}} </p> </strong> 
              
        </v-card-text>

    <v-card-actions class="pt-0">
          <v-btn
            color="teal accent-2"
            @click="revealEv(index)"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-if="event.watchVideo" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
        
        <v-card-text class="pb-0">
         
       <embed class="video" type="video/webm" :src="event.youtubeLink" width="600" height="600">
        </v-card-text>

    <v-card-actions class="pt-0">
          <v-btn
          color="teal accent-2"
            @click="watchVideo(index)"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
     </v-card>


    </div>
    </v-col>
    </v-row>
<!-- Plan a Visit to Tunisia -->
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
import createEvent from './createEvent';
const Cookie =require('js-cookie');
export default {
  
  name: "Events",
   props: {},

  data: () => {return{
        events: [],
        apear : false,
        userstatus:Cookie.get('status'),
      reveal: false,
   }},

   components: {
    createEvent,
  },
  async mounted() {
    const response = await axios.get("http://localhost:5000/api/events/allevents"); 
    for(var i = 0; i < response.data.length; i++) {
      response.data[i].reveal = false
      response.data[i].watchVideo = false
    }
    this.events = response.data;
  },
  methods: {
    revealEv(index){
      this.events[index].reveal = !this.events[index].reveal
    },
    watchVideo(index){
      console.log(this.events[index])
      this.events[index].watchVideo = !this.events[index].watchVideo
    },
   showevent(id){
      this.$router.push(`/eventsShow/${id}`)
    },
     apearcarcreate(){
      this.apear = !this.apear;
    },
    async remove(id){
            await axios.delete(`http://localhost:5000/api/events/${id}`);
            window.location.replace("/events");
        }
  }
};

</script>


<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

#bg {
  position: fixed;
  top: 50;
  left: 0;

  min-width: 100%;
  min-height: 100%;
}
#gg {
width:6%;
height:6%;
}

</style>
