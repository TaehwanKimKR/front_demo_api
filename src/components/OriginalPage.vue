<template>
  <VueHeader/>
  <div class="background">
    <div class="ttl box">Today's Cocktail</div>
    <!-- outer: 점선 테두리 테스트     -->
    <div class="lineone" style="border-bottom: dashed #FFFFFF;"></div>
    <div class="containers">
      <button class="SBtn btn btn-outline-light" type="button" style=" padding: 1vh 1vh;" @click="$router.push('/Shop')">Search</button>
      <label class="Slabel border border-light" style=" padding: 1vh 20px;"></label>
    </div>
    <div class="lineonecp" style="border-bottom: dashed #FFFFFF;"></div>
    <div class="container">
      <button class="HBtn btn btn-outline-light" type="button" style=" padding: 1vh 1vh;" @click="$router.push('/MakeAtHome')">Go</button>
      <label class="Hlabel border border-light" style=" padding: 1vh 20px;">Make at Home</label>
    </div>
    <div class="linetwo" style="border-right: dashed #FFFFFF;"></div>
    <div class="containert">
      <button class="BBtn btn btn-outline-light" type="button" style=" padding: 1vh 1vh;" @click="$router.push('/MakeAtBar')">Go</button>
      <label class="Blabel border border-light" style=" padding: 1vh 20px;">Make at Bar</label>
    </div>
    <div class="rank">Ranking</div>
    <div class="rankcont border border-2 border-dark rounded-3">
      <RankList class="RContent" :posts="sortedpost"/>
      <button class="cbutton btn btn-outline-dark" type="button" style=" padding: 1vh 1vh;" @click="$router.push('/Rank')">더보기</button>

    </div>
    <div class="comu">Community</div>
    <div class="comucont border border-2 border-dark rounded-3">
      <List class="LContent" :posts="posts"/>
      <button class="cbutton btn btn-outline-dark" type="button" style=" padding: 1vh 1vh;" @click="$router.push('/Board')">더보기</button>
    </div>
    <Footer class="bbann border border-2 border-danger rounded-3" :rdat="sortedpost"> </Footer>
    <img class="bannerimg" style="margin-left: 6px; position:absolute; top:10%; height: 80vh;" :src="imgd" alt="" @click="$router.push('/Shop')"/>
  </div>

</template>

<script>
import VueHeader from "@/components/Header.vue";
import boardb from "@/scripts/testBoardData";
import List from "@/community/List.vue";
import RankList from "@/community/RankList.vue";
import rankdb from "@/scripts/testRankData";
import Footer from "@/components/Footer.vue";
export default {
  name: "OriginalPage.vue",
  data(){
    return{
      posts : boardb,
      sorttemp : rankdb,
      imgd: require('@/assets/sbanner.jpg'),
    }
  },
  components: {List, RankList, Footer, VueHeader},
  computed:{
    sortedpost() {
      return this.sorttemp.sort((a,b) => {return b.like - a.like});
    }
  }
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
  top: 40%;
  left: 65%;
  transform: translate(-50%, -50%);
  float: left;
}
.containert{
  position: absolute;
  top: 40%;
  left: 68%;
  transform: translate(-50%, -50%);
  float: left;
}
.containers{
  position: absolute;
  top: 25%;
  left: 50%;
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
  background-color: rgba(255, 255, 255, 0.77);
  width: 40vh;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  font-style: italic;
}
.SBtn{
  font-family: 'Noto Sans KR', sans-serif;
  float: left;
}
.Slabel{
  float:left;
  color: black;
  background-color: rgba(255, 255, 255, 1);
  width: 60vh;
  height:5vh;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  font-style: italic;
}
.BBtn{
  font-family: 'Noto Sans KR', sans-serif;
  float: left;
}
.Blabel {
  float: left;
  color: black;
  background-color: rgba(255, 255, 255, 0.77);
  width: 40vh;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  font-style: italic;
}
.rank{
  font-family: 'Noto Sans KR', sans-serif;
  position: absolute;
  top: 49%;
  left: 27%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: white;
  text-decoration: underline;
}
.rankcont{
  font-family: 'Noto Sans KR', sans-serif;
  position: absolute;
  top: 73%;
  left: 32%;
  height: 38vh;
  width: 40vh;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.77);
  font-size: 17px;
  color: black;
//text-decoration: underline;
}
.comu{
  font-family: 'Noto Sans KR', sans-serif;
  position: absolute;
  top: 49%;
  left: 64%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: white;
  text-decoration: underline;
}
.comucont{
  font-family: 'Noto Sans KR', sans-serif;
  position: absolute;
  top: 73%;
  left: 67%;
  height: 38vh;
  width: 40vh;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.77);
  font-size: 17px;
  color: black;
//white-space: nowrap;
//text-decoration: underline;
}
.LContent{
  position: absolute;
  top: 29%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.RContent{
  position: absolute;
  top: 29%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.lineone{
  position: absolute;
  top:20%;
  left: 25%;
  width: 100vh;
  tarnsform: translate(-50%, -50%);
}
.linetwo{
  position: absolute;
  top: 40%;
  left: 50%;
  height: 100vh;
  tarnsform: translate(-50%, -50%);
}
.lineonecp{
  position: absolute;
  top:30%;
  left: 25%;
  width: 100vh;
  tarnsform: translate(-50%, -50%);
}
.bbann{
  position:absolute;
  top:95%;
  left:50%;
  width:300vh;
  transform: translate(-50%, -50%);
  font-family: 'Noto Sans KR', sans-serif;
  text-decoration: underline;
}
.cbutton{
  position: absolute;
  right:0px;
    bottom:0px;
  //transform: translate(-50%, -50%);
}
</style>