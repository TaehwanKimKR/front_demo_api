<template>
  <onHeader/>
  <div class="background">
    <div class="wrap_back border border-2 border-dark rounded-3">
<!--    <div class="common-buttons">-->
<!--      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>&nbsp;-->
<!--      <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;-->
<!--      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>-->
<!--    </div>-->
    <div class="board-titles">
      <div style="float:left;">Title : {{ title }}&nbsp&nbsp | </div>
      <div style="float:left;">
        <div style="float:left;">Like : {{ like }}&nbsp&nbsp | </div>
        <span style="float:left;">Date : {{ date }} </span>
      </div>

    </div>
    <div class="board-contents border border-2 border-dark rounded-3" style="text-align : center;">
      <div class="ccont" style="white-space:pre-line;">{{ contents }}</div>
    </div>
    </div>
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>

  </div>
  <!--  <div>{{ items }}</div>-->
  <!--  <div>{{items.text}}</div>-->
</template>

<script>
import OnHeader from "@/components/onHeader.vue";
import boardDB from "@/scripts/testBoardData";
export default {
  name: "TestBoardDetail.vue",
  components: {OnHeader},
  data(){
    return{
      requestBody: this.$route.query,
      idx: this.$route.query.number,
      bdata : boardDB,
      title: '',
      like: '',
      contents: '',
      date: ''
    }
  },
  mounted(){
    this.fnGetView()
  },
  methods: {
    fnGetView() {
      this.title = this.bdata[this.idx].title;
      this.date = this.bdata[this.idx].date;
      this.like = this.bdata[this.idx].like;
      this.contents = this.bdata[this.idx].content;
    },
    fnList() {
      delete this.requestBody.number
      this.$router.push({
        path: '../Board',
        query: this.requestBody
      })
    },
  }



}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
.background{
  height: 100vh;
  overflow: hidden;
  margin:0 auto;
  background-image: url('@/assets/web_bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
.wrap_back{
  position: absolute;
  top: 50%;
  left: 50%;
  height: 80vh;
  width: 100vh;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.77);
  margin-top : 20px;
}
.board-titles{
  font-family: 'Noto Sans KR', sans-serif;
  position: absolute;
  //top: 10%;
  //left: 15%;
  //transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.70);
  font-size: 25px;
  color: whitesmoke;
}
.board-contents{
  font-family: 'Noto Sans KR', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50vh;
  width: 50vh;
  transform: translate(-50%, -50%);
  //background-color: rgba(255, 255, 255, 0.90);
  font-size: 30px;
  color: black;
}
.ccont{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>