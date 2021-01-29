<template>
<section class="bg-primary text-black pt-9 pb-6">
  <v-sheet elevation="1" >
    <v-tabs id="tabs" 
      background-color="teal darken-4"
      dark
      show-arrows
    >
   

      <v-tabs-slider color="green"></v-tabs-slider>

      <v-tab>
       <v-btn class="ma-2" outlined color="light-green lighten-5" router-link to="/home">
       Home
    </v-btn>
    </v-tab>

    <v-tab>
       <v-btn class="ma-2" outlined color="light-green lighten-5" router-link to="/hotels">
     Hotels
    </v-btn>
    </v-tab>

   <v-tab>
       <v-btn class="ma-2" outlined color="light-green lighten-5" router-link to="/Gallery">
    Places
    
    </v-btn>
    </v-tab>

      <v-tab>
       <v-btn class="ma-2" outlined color="light-green lighten-5" router-link to="/events">
     Events
    </v-btn>
    </v-tab>

    <v-tab>
       <v-btn class="ma-2" outlined color="light-green lighten-5" router-link to="/CarsPost">
     Cars
    </v-btn>
    </v-tab>
      <!-- -------logout------ -->
    <div class="navdiv" v-if="!this.islogged" >
            <span class="name_loggedin" >Not a member? </span>

      <v-tab>
       <v-btn class="ma-2" outlined color="light-green lighten-5" router-link to="/signin">
     Sign In
    </v-btn>
    </v-tab>

      <v-tab>
       <v-btn class="ma-2" outlined color="light-green lighten-5" router-link to="/signup">
     Sign Up
    </v-btn>
    </v-tab>

      </div>
      <div class="navdiv2" v-else-if='this.islogged'>
      <span class="name_loggedin"><v-icon>{{ icons.mdiAccount }}</v-icon>{{this.username}}</span>
      <v-btn color="green" class="navbar_space2" router-link to="/payment"><v-icon>mdi-cart</v-icon></v-btn>
      <v-btn @click="logout()" class="navbar_space2" color="red" >logout</v-btn>
      
      </div>
      
</v-tabs>
  </v-sheet>
  </section>
</template>

 <script>

const Cookie =require('js-cookie');
import {mdiAccount} from '@mdi/js';

export default {
  name: "navbar",
  data: () => ({
    islogged:!!Cookie.get('name'),
    username:Cookie.get('name'),
    icons: {
        mdiAccount}
  }),
  updated(){
    if(Cookie.get('name')){
      this.islogged= true;
    }
  },
  methods:{
    logout(){
      this.islogged = false;
      Cookie.remove('name')
      this.$router.push('/home')
    }
  }
};
</script>

<style scoped>
.navdiv{
 display:flex;
 justify-content:space-between;
 padding:0 5%
 
}
.name_loggedin{
  justify-self:center;
  align-self: center;
}
.mainHeader{
  display:flex;
  justify-content:space-between
}
.navdiv2{
 display:flex;
 justify-content:space-between;
 
}
.navbar_space{
  margin-left:10rem;
}
.navbar_space2{
   margin-left:5rem;
}
#tabs {
 margin: auto;
  width: 500%;
  border: 3px solid green;
  
}
</style>