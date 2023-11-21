<template>
  <onHeader/>
    <div class="background">
      <div class="inputcont">
        <button type="button" class="btn btn-outline-dark" style="padding: 1vh 20px; margin-left : 10px; margin-right: 10px;" @click="sendQuest()">Search</button>
        <input class="dark-input" type="text" value="beer" style = "margin-right: 10px;" placeholder="alchol" @input="alc=$event.target.value"/>
        <input class="dark-input" type="text" value="coke" style = "margin-right: 10px;" placeholder="drink" @input="drn=$event.target.value"/>
        <input class="dark-input" type="text" value="mint" style = "margin-right: 10px;" placeholder="syrup" @input="syr=$event.target.value"/>
      </div>
      <div class="outputcont">
        <div style = "color: black; text-align: center;">Recipe</div>
        <div style = "color: black; margin-left : 10px;">Alchol : {{ items.Alchol }}</div>
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
.inputcont{
  position: absolute;
  top: 30%;
  left: 50%;
  height: 20vh;
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
  opacity: 0.9;
  font-family: 'Noto Sans KR', sans-serif;
}
.outputcont{
  position: absolute;
  top: 50%;
  left: 50%;
  height: 20vh;
  width: 40vh;
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
  opacity: 0.9;
  margin-top : 20px;
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
}
</style>