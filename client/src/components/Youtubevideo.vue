<!--<template>

<!-- <div id="app">
    <h3>Let's trigger this here modal!</h3>
    <button @click="toggleShow"> -->
     <!--<span v-if="isShowing">Hide child</span>
      <span v-else>Show child</span>
    </button>
    <app-child v-if="isShowing" class="modal">
      <button @click="toggleShow">
        Close
      </button>
    </app-child>
</div>
</template>


<script type="text/x-template" id="childarea">
export default {
components: {
    appChild: Child 
    },
   

  data() {
    return {
      isShowing: false };

  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    } },


}
</script>

<style> 
body {
  font-family: "Roboto Mono", serif;
  display: flex;
  justify-content: center;
}

#app {
  text-align: center;
  margin: 60px;
  max-width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

button {
  font-family: "Roboto Mono";
  border: 2px solid black;
  background: white;
  padding: 10px 15px;
  margin: 0 10px;
  outline: 0;
  width: 60%;
  cursor: pointer;
}

h4 {
  margin: 0 0 15px;
}
/* 
.modal {
  background: cyan;
  color: black;
  padding: 20px;
  width: 200px;
  position: absolute;
}
</style> */