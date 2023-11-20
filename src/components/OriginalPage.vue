<template>
    <div class="background">
        <div class="back box"></div>
    <div class="ttl box">Today's Cocktail</div>
    <button type="button" style="top: 50%; left: 50%;transform: translate(-150%, 1000%); position: absolute;" @click="$router.push('/MakeAtHome')"><span>Make At Home</span>
    </button>
    <button type="button" style="top: 50%; left: 50%;transform: translate(50%, 1000%); position: absolute;" @click="$router.push('/MakeAtBar')"><span>Make At Bar</span>
    </button>
    </div>
</template>

<script>
export default {
    name: "OriginalPage.vue"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
.background{
    height: 100vh;
    overflow: hidden;
    margin:0;
    background-image: url('@/assets/back.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
.back.box{
    background: whitesmoke;
    opacity: 0.2;
    width: 550px;
    height: 80px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.ttl.box{
    font-family: 'Playball', cursive;
    font-size: 80px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}
.box{
    text-align: center;
}
</style>