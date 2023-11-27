
<template>
  <on-header></on-header>
  <div class="background" style="position:relative;">
    <div class="shopbann" style="text-align:center;">임시 Shop</div>
    <div class="img_wrap">
      <div class="row">
        <img class="col-4" :src="img1" alt=""/>
        <img class="col-4" :src="img2" alt=""/>
        <img class="col-4" :src="img3" alt=""/>
      </div>
      <div class="row">
        <img class="col-4" :src="img4" style="margin-top: 10px;" alt=""/>
        <img class="col-4" :src="img1" style="margin-top: 10px;" alt=""/>
        <img class="col-4" :src="img2" style="margin-top: 10px;" alt=""/>
      </div>
    </div>
<!--    <div class="img_wrap">-->

<!--      </div>-->
<!--      <img class="bannerimg1" style="float:left; margin-right: 10px; margin-bottom: 10px;" :src="img1" alt=""/>-->
<!--      <img class="bannerimg2" style="float:left; margin-right: 10px; margin-bottom: 10px;" :src="img2" alt=""/>-->
<!--      <img class="bannerimg3" style="float:left; margin-right: 10px; margin-bottom: 10px;" :src="img3" alt=""/>-->
<!--      <img class="bannerimg4" style="float:left; margin-right: 10px; margin-bottom: 10px;" :src="img4" alt=""/>-->

  </div>
</template>


<script>
import OnHeader from "@/components/onHeader.vue";

export default{
  name:"shop.vue",
  components: {OnHeader},
  data(){
    return{
      img1: require('@/assets/1.png'),
      img2: require('@/assets/2.png'),
      img3: require('@/assets/3.png'),
      img4: require('@/assets/4.png'),

    }
  },
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
.shopbann{
  //margin-bottom: 4px;
  background-color: rgba(255, 255, 255, 0.77);
}
.img_wrap{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>