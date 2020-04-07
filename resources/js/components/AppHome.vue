<template>
<v-app>
    <toolbar></toolbar>
    <app-footer></app-footer>
</v-app>
</template>

<script>

import Toolbar from './Toolbar.vue';
import AppFooter from './AppFooter.vue';
export default {
    components: {
        'toolbar': Toolbar,
        'app-footer' : AppFooter
    }
    
}
</script>


<style scoped>

</style>