<template>
<v-app app>
    <toolbar></toolbar>
    <router-view></router-view>
    <app-footer></app-footer>
</v-app>
</template>

<script>

import Toolbar from './Toolbar.vue';
import AppFooter from './AppFooter.vue';
import Login from './login/Login';
export default {
    components: {
        'toolbar': Toolbar,
        'app-footer' : AppFooter,
        'login':Login
    }
    
}
</script>


<style scoped>

</style>