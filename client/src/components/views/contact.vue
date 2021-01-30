<template>
  <v-content>
    <div class="staticHero">
      
      <v-row >
        <v-col>
          <v-container>
        <h1 class="text-center"> Contact Us </h1>      
     </v-container>
        </v-col>
      </v-row>
  
    </div>
    <div>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation id ="contact">
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-textarea v-model="message" :rules="messageRules" label="Message" required></v-textarea>
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Submit</v-btn>
          <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
        </v-form>
      </v-container>
    </div>
    
  </v-content>
</template>

<script>
export default {
  name: "contact",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    message: "",
    messageRules: [
      v => !!v || "Message is required",
      v => (v && v.length >= 10) || "Message must be more than 10 characters"
    ],
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style> 
#contact {
   background: #75eeee;
  color: #fff;
  letter-spacing: 0.04em;
  text-align: center;
  margin: 60px;
  width: 700px;
  margin: 0 auto;
  display: table;
  padding: 20px;
  line-height: 1.4em;
}

</style>