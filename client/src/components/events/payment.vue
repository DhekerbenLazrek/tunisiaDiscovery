<template>
    <div>
        <v-card 
        class="mx-auto"
        max-width="400" 
        :v-if="isCard" >

    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="green"
        text
      >
        Continue
      </v-btn>

      <v-btn
        color="red"
        text
      >
        Cancel
      </v-btn>
    </v-card-actions>
        </v-card>

    </div>
</template>
<script>
export default {
    name: "Payment",
    data:()=>{
        return {
            car:null,
            hotel:null,
            event:null
        }
    },
    beforeMount(){
        console.log(this.$store.state)
    },
    mutations:{
        isCard(){
            return this.$store.state.car
        }
    }
}
</script>
<style>
</style>
