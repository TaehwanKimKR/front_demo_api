<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <RouterView/>
    <Home.vue/>
    <ScnMakePage.vue/>
    <ScnSelectPage.vue/>
</template>

<script>
//import Header from "@/components/Header.vue";
// import Footer from "@/components/Footer.vue";
//import store from "@/scripts/store";
//import axios from "axios";
import {useRoute} from "vue-router";
import {watch} from "vue";



export default {
    name: 'App',
    components: {
        // Footer,
        //Header
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
