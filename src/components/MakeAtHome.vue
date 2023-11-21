<template>
  <onHeader/>
    <div class="background">
        <div class="disccont border border-2 border-dark rounded-3">
            <label class="disctext">Make at HOME</label>
            <label class="sdisctext">Please enter the ingredients you currently have.</label>
            <label class="tdisctext">I will provide you with recipes that can be made with those ingredients</label>
        </div>
      <div class="inputcont border border-2 border-dark rounded-3">
          <label class="sqbutton" style="padding: 1vh 20px; margin-right: 10px;">Search</label>
<!--        <button type="button" class="sqbutton btn btn-outline-light rounded-2" style="padding: 1vh 20px; margin-right: 10px;" @click="sendQuest()">Search</button>-->
          <input class="alcin dark-input border border-primary rounded-2" type="text" style = "text-align: center; margin-left: 5px; margin-top: 80px; margin-right: 10px;" placeholder="alchol" @input="alc=$event.target.value"/>
          <input class="drin dark-input border border-danger rounded-2" type="text" style = "text-align: center; margin-right: 10px;" placeholder="drink" @input="drn=$event.target.value"/>
          <input class="syrin dark-input border border-warning rounded-2" type="text" style = "text-align: center; margin-right: 10px;" placeholder="syrup" @input="syr=$event.target.value"/>
          <button type="button" class="askbtn btn btn-outline-dark rounded-2" @click="sendQuest()">Ask!</button>
      </div>
      <div class="outputcont border border-2 border-dark rounded-3">
        <div style = "color: black; text-align: center; font-size: 30px;">Recipe</div>
        <div style = "color: black; margin-left : 10px;">Alcohol : {{ items.Alchol }}</div>
        <div style = "color: black; margin-left : 10px;">Drink : {{ items.Drink }}</div>
        <div style = "color: black; margin-left : 10px;">Syrup : {{ items.Syrup }}</div>
      </div>
    </div>
</template>

<script>
import OnHeader from "@/components/onHeader.vue";

export default {
    name: "MakeAtHome.vue",
  components: {OnHeader},
    data(){
      return{
        alc:"",
        drn:"",
        syr:"",
        items:'',
      }
    },
    methods:{
      sendQuest: function(){
        let question={};
        question.Alchol=this.alc;
        question.Drink=this.drn;
        question.Syrup=this.syr;
        console.log(JSON.stringify(question));
        this.$axios
            .post("http://127.0.0.1:8080/pytest", JSON.stringify(question), {
              headers:{'Content-Type': 'application/json; charset=UTF-8'},
            })
            .then(res => {
              this.items = res.data
            })
            // .then(function (response){
            //   this.items = response.data;
            //   //console.log(response.data);
            // })
            .then(() => {
              console.log('success');
            })
            .catch((error) => {
              console.log(error);
            })
      }
    }
}
</script>

<style>
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
.disccont{
    position: absolute;
    top: 10%;
    left: 50%;
    width: 60vh;
    height: 20vh;
    transform: translate(-50%, -30%);
    background-color: rgba(255, 255, 255, 0.77);
    font-family: 'Noto Sans KR', sans-serif;
}
.inputcont{
  position: absolute;
  top: 40%;
  left: 50%;
  height: 20vh;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.77);
  font-family: 'Noto Sans KR', sans-serif;
}
.outputcont{
  position: absolute;
  top: 60%;
  left: 50%;
  height: 20vh;
  width: 40vh;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.77);
  margin-top : 20px;
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
}
.disctext{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-style: italic;
    display:inline;
}
.sdisctext{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 15px;
    font-style: italic;
    white-space: nowrap;
}
.tdisctext{
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 15px;
    font-style: italic;
    white-space: nowrap;
}
.sqbutton{
    position: absolute;
    left : 8%;
    top: 15%;
    transform: translate(-50%, -50%);
    color: black;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 30px;
}
.alcin{
    height: 5vh;
    font-style: italic;
}
.drin{
    height: 5vh;
    font-style: italic;
}
.syrin{
    height: 5vh;
    font-style: italic;
}
.askbtn{
    position: absolute;
    right:1.5%;
    top: 90%;
    transform: translate(0%, -50%);
    color: black;
}
</style>