<template>
  <onHeader/>
  <div class="background">
    <div class="disccont border border-2 border-dark rounded-3">
      <label class="disctext" >Make at BAR</label>
      <label class="sdisctext" style="font-size: 12px;">Do you want to create your own cocktail?</label>
      <label class="tdisctext" style="font-size: 12px;">Try a cocktail that is unique to you and doesn't exist in the world!</label>
    </div>

    <div class="inputcont border border-2 border-dark rounded-3">
      <label class="sqbutton" style="padding: 1vh 20px; margin-right: 10px; font-style: italic;">Search</label>
      <!--        <button type="button" class="sqbutton btn btn-outline-light rounded-2" style="padding: 1vh 20px; margin-right: 10px;" @click="sendQuest()">Search</button>-->
      <input class="alcin dark-input border border-primary rounded-2" type="text" style = "text-align: center; margin-left: 5px; margin-top: 60px; margin-right: 10px;" placeholder="Taste" @input="taste=$event.target.value"/>
      <input class="drin dark-input border border-danger rounded-2" type="text" style = "text-align: center; margin-right: 10px;" placeholder="Color" @input="co=$event.target.value"/>
      <input class="syrin dark-input border border-warning rounded-2" type="text" style = "text-align: center; margin-right: 10px;" placeholder="ABV" @input="abv=$event.target.value"/>
      <button type="button" class="askbtn btn btn-outline-dark rounded-2" @click="sendQuest()">Ask!</button>
    </div>

    <div class="outputcont border border-2 border-dark rounded-3">
      <div style = "color: black; left:0px; font-size: 30px; font-style: italic;">Recipe</div>
        <div class="ccont" style="white-space:pre-line; overflow-y:scroll; text-align: center;">{{ ptext }}</div>
<!--      <div v-html="ptext"></div>-->
      <!--            <div>{{ptext}}</div>-->
      <!--                <div v-for="(ans, ansIndex) in items" :key="ansIndex">-->
      <!--&lt;!&ndash;                    <textarea readonly v-model="ans.text"></textarea>&ndash;&gt;-->
      <!--                    <h5>{{ ans.text }}</h5>-->
      <!--                </div>-->
    </div>
  </div>
</template>

<script>
import OnHeader from "@/components/onHeader.vue";

export default {
  name: "MakeAtBar.vue",
  components: {OnHeader},
  data(){
    return{
      quest:"",
      items:[],
      text:'',
      taste:'',
      co:'',
      abv:'',
      ptext:'',
        tttext:'1. 무지개빛의 색깔을 내기 위해 큐브 아이스를 컵에 채워줍니다.\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마\n가나다라마',
    }
  },
  methods:{
    sendQuest: function(){
      let question={};
      this.quest = this.taste + '맛이 나는 ' + this.co + ' 색상의 ' + this.abv + '도수의 칵테일 제조법을 알려줘.';
      question.question=this.quest;
      console.log(JSON.stringify(question));
      this.$axios
          .post("http://localhost:8081/chat-gpt/question", question, {
            headers:{'Content-Type': 'application/json; charset=UTF-8'},
          })
          .then(res => {
            //console.log(res.data);
            this.ptext = res.data;
            // this.items = res.data.choices;
            //this.ptext = res.data.choices[0].text;
            this.ptext.split('\n').join('<br />');
            console.log(this.ptext);
            //this.items = JSON.stringify(res.data.choices);
          })
          // .then(() => {
          //     console.log('success');
          // })
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
  top: 73%;
  left: 50%;
  height: 45%;
  width: 80%;
  background-color: rgba(255, 255, 255, 0.77);
  //margin-top : 20px;
  font-size: 15px;
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
  font-size: 14px;
  font-style: italic;
  white-space: nowrap;
}
.tdisctext{
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
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
.ittext{
  box-sizing: border-box;
  resize: none;
  border: 1px solid rgb(42, 42, 42);
  width: 100%;
}
.ccont{
    height:100%;
    width:100%;
}
</style>