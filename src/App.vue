<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <RouterView/>
    <OriginalPage.vue/>
    <MakeAtBar.vue/>
    <MakeAtHome.vue/>
</template>

<script>
// import Footer from "@/components/Footer.vue";
//import store from "@/scripts/store";
//import axios from "axios";
import {useRoute} from "vue-router";
import {watch} from "vue";



export default {
    name: 'App',
    components: {
      //OriginalPage,
        // Footer,
      //VueHeader
    },
    setup(){
        const route = useRoute();

        watch(route, ()=>{
        })
    }
}
</script>

<style>

</style>
