<template>

  <v-form @submit.prevent="login">
    <v-container>

          <v-text-field
            v-model="form.email"
            label="E-mail"
            type="email"
            required
          ></v-text-field>
    
         <v-text-field
            v-model="form.password"
            label="Password"
            type="password"
            required
          ></v-text-field>

<v-btn color="green" type="submit">Login</v-btn>

    </v-container>
  </v-form>
</template>

<script>
export default {
    data(){
        return {
            form: {
                email:null,
                password:null
            }
        }
    },
    methods: {
        login() {
            axios.post('/api/auth/login',this.form)
            .then(res => console.log(res.data))
            .catch(error => console.log(error.response.data));
        }
    }
    
}
</script>

<style scoped>

</style>