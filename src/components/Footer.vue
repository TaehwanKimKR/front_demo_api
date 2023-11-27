

<template>
<div class="bottombann" style="text-align:center;">금주의 칵테일:{{rdat[0].title}}</div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    rdat: Array,
  },
}
</script>

<style>
.bottombann{
  margin-bottom: 4px;
  background-color: rgba(255, 255, 255, 0.77);
}
</style>