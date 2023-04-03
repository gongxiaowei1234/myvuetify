<template>
  <v-app class="grey lighten-4" >
   <navbar/>
   <!-- mx左边边缘 mb-4底部边缘-->
    <v-main class="mx-4 mb-4 grey lighten-4">
     <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
components:{Navbar},
  data: () => ({
    //
  }),
};
</script>
<style scoped>
.grey lighten-4{
  background: grey lighten-4 !important;
  color:grey lighten-4 !important
}
</style>
