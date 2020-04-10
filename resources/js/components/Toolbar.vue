<template>
   <nav>
       <v-toolbar >
           <v-toolbar-title>Title</v-toolbar-title>
<v-spacer></v-spacer>

        <v-btn >
        Forum
    </v-btn>
  
     <v-btn >
        Ask Question
    </v-btn>
     <v-btn >
        Category
    </v-btn>
    <router-link to="/login">
     <v-btn >
        Login
    </v-btn>
    </router-link>

       </v-toolbar>
   </nav>
   
</template>

<script>
export default {

    
}
</script>


<style scoped>

</style>