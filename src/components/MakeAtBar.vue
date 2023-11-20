<template>
    <div>This is MakeAtBarPage!</div>
    <button type="button" style="top: 50%; left: 50%;transform: translate(50%, 1000%); position: absolute;" @click="sendQuest()"><span>Ask!</span></button>
    <input class="dark-input" type="text" value="questionText" placeholder="질문 입력" @input="quest=$event.target.value"/>
</template>

<script>
export default {
    name: "MakeAtBar.vue",
    data(){
      return{
          quest:""
      }
    },
    methods:{
        sendQuest: function(){
            let question={};
            question.question=this.quest;
            console.log(JSON.stringify(question));
            this.$axios
                .post("/chat-gpt/question", question, {
                    headers:{'Content-Type': 'application/json; charset=UTF-8'},
                })
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

</style>