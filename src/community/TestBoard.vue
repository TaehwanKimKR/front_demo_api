<template>
  <onHeader/>
  <div class="background">
    <button type="button" style="top: 50%; left: 50%;transform: translate(50%, 1000%); position: absolute;" @click="sendQuest()"><span>Ask!</span></button>
    <input class="dark-input" type="text" placeholder="질문 입력" @input="quest=$event.target.value"/>
    <div v-for="(ans, ansIndex) in items" :key="ansIndex">
      <h6>ANSWER ===> {{ ans.text }}</h6>
    </div>
  </div>
  <!--  <div>{{ items }}</div>-->
  <!--  <div>{{items.text}}</div>-->
</template>

<script>
import OnHeader from "@/components/onHeader.vue";
export default {
  name: "TestBoard.vue",
  components: {OnHeader},
  data(){
    return{
      quest:"",
      items:[],
      text:''
    }
  },
  methods:{
    sendQuest: function(){
      let question={};
      question.question=this.quest;
      console.log(JSON.stringify(question));
      this.$axios
          .post("http://localhost:8081/chat-gpt/question", question, {
            headers:{'Content-Type': 'application/json; charset=UTF-8'},
          })
          .then(res => {
            this.items = res.data.choices;
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
</style>