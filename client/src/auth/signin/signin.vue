<template>
   <v-app>
    <v-content >
      <v-card width="800" height="320" class="mx-auto mt-9" id = "login">
        <v-card-title>Login Form</v-card-title>
   <form > 
    <v-text-field 
      id="mail"
      v-model="email"
      label="E-mail"
      required
      color ="white"
    ></v-text-field>
    <v-text-field
          id="password"
          label="Password"
          v-model="password"
          required
          color ="white"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          :rules="passwordRules"
          error-count="1"
></v-text-field>
    <v-btn
      class="mr-4"
      @click="signin()"
    >
     submit
    </v-btn>
    {{ error }}
  </form>
  </v-card>
  </v-content>
  </v-app>
</template>
<script>
  import axios from 'axios';
  const Cookie =require('js-cookie')
 export default {
    name: "Signin",
    data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      error: '',
    
    }},
    methods:{
     async signin() {
      const user = {
                email: this.email,
                password: this.password
      }
     await axios.post('http://localhost:5000/api/users/signin', user)
        .then(res => {
          //if successfull
          if (res.status === 200) {
            Cookie.set('name',res.data.user.name)
            Cookie.set('email',res.data.user.email)
            Cookie.set('number',res.data.user.number)
            Cookie.set('status',res.data.user.status)
            localStorage.setItem('token', res.data.token);
            this.$router.push('/home');
          }
        }, err => {
          console.log(err.response);
          this.error = err.response.data.error
        }) 
        document.location.reload(false)
  }
    }
 }
</script>
<style> 
#login {
   background: #78e694;
  color: #fff;
  letter-spacing: 0.04em;
  text-align: center;
  margin: 60px;
  width: 370px;
  margin: 0 auto;
  display: table;
  padding: 20px;
  line-height: 1.4em;
}

#mail {
  color: white;
}

#password {
  color:white;
}
</style>