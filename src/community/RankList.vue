<template>
  <div class="container" id="posts">
    <div class="post" v-for="(post, i) in posts" :key="i">
      <span class="post-title">{{post.title}}</span>
      <span class="post-like">------- {{post.like}} ★</span>
      <!--    <span class="post-date"> Date: {{post.date}}</span>-->
    </div>
  </div>
</template>
<script>
export default{
  name:"RankList.vue",
  data(){
    return{

    }
  },
  props: {
    posts: Array,
  },

}
</script>
<style scoped>
.post{

}
.post-title{
  margin-right: 10px;
  text-decoration: underline;
  font-style: italic;
}
</style>