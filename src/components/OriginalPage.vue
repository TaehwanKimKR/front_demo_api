<template>
  <VueHeader/>
    <div class="background">
      <div class="ttl box">Today's Cocktail</div>
  <!-- outer: 점선 테두리 테스트     -->
      <div class="container">
          <button class="HBtn btn btn-outline-light" type="button" style=" padding: 1vh 1vh;" @click="$router.push('/MakeAtHome')">Go</button>
          <label class="Hlabel border border-light" style=" padding: 1vh 20px;">Make at Home</label>
      </div>
      <div class="containert">
        <button class="BBtn btn btn-outline-light" type="button" style=" padding: 1vh 1vh;" @click="$router.push('/MakeAtBar')">Go</button>
        <label class="Blabel border border-light" style=" padding: 1vh 20px;">Make at Bar</label>
      </div>
      <div class="rank">Rank</div>
      <div class="comu">Community</div>
    </div>

</template>

<script>
import VueHeader from "@/components/Header.vue";

export default {
    name: "OriginalPage.vue",
  components: {VueHeader}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
.background{
    height: 100vh;
    overflow: hidden;
    margin:0;
    background-image: url('@/assets/web_bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
.ttl.box{
    font-family: 'Playball', cursive;
    font-size: 80px;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}
.box{
    text-align: center;
}
.container{
  //width: 5vh;
  //height: 5vh;
  position: absolute;
  top: 30%;
  left: 70%;
  transform: translate(-50%, -50%);
  float: left;
}
.containert{
  position: absolute;
  top: 30%;
  left: 62%;
  transform: translate(-50%, -50%);
  float: left;
}
.HBtn{
  font-family: 'Noto Sans KR', sans-serif;
  float: left;
}
.Hlabel{
  float:left;
  color: black;
  background-color: whitesmoke;
  opacity: 0.7;
  font-family: 'Noto Sans KR', sans-serif;
}
.BBtn{
  font-family: 'Noto Sans KR', sans-serif;
  float: left;
}
.Blabel {
  float: left;
  color: black;
  background-color: whitesmoke;
  opacity: 0.7;
  font-family: 'Noto Sans KR', sans-serif;
}
.rank{
  font-family: 'Noto Sans KR', sans-serif;
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: white;
  text-decoration: underline;
}
.comu{
  font-family: 'Noto Sans KR', sans-serif;
  position: absolute;
  top: 50%;
  left: 62%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: white;
  text-decoration: underline;
}
</style>