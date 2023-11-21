<template>
  <!-- Nav Bar 오른쪽 정렬 -->
  <nav class="navbar navbar-expand-sm">
    <div class="container-fluid">
          <a class="navbar-brand" href="#">Today's Cocktail</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/MakeAtBar" class="nav-link">Make at Bar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/MakeAtHome" class="nav-link">Make at Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </div></nav>
</template>

<script>
//import store from "@/scripts/store";
//import router from "@/scripts/router";


export default {
  name: 'onHeader',
  components: {},
  // setup() {
  //   const logout = () => {
  //     store.commit('setAccount', 0);
  //     sessionStorage.removeItem("id")
  //     router.push({path: "/"});
  //   }
  //   return {logout}
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
nav .navbar-nav a.router-link-exact-active {
//font-family: 'Playball', cursive;
  color: #42b983 !important;
  font-size: 20px;
}
nav .navbar-nav a.nav-link {
  font-weight: bold;
//font-family: 'Playball', cursive;
  font-size: 20px;
  color: #2c3e50 !important;
}
.navbar-brand{
  font-family: 'Playball', cursive;
  font-size: 55px;
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
  color: black;
}
</style>