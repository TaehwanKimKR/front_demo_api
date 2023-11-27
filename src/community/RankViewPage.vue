<template>
  <OnHeader/>
  <div class="background">
    <div class="list_cont">
      <div class="comucont">
        <div class="common-buttons">
          <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">등록</button>
        </div>
        <table class="w3-table-all">
          <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>등록일시</th>
            <th>Like</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(row, number) in list" :key="number">
            <td>{{ row.number + 1 }}</td>
            <td><a v-on:click="fnView(`${row.number}`)">{{ row.title }}</a></td>
            <td>{{ row.date }}</td>
            <td>{{ row.like }}</td>
          </tr>
          </tbody>
        </table>
        <div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.total_list_cnt > 0">
      <span class="pg">
      <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-border">&lt;&lt;</a>
      <a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page-1}`)"
         class="prev w3-button w3-border">&lt;</a>
      <template v-for=" (n,index) in paginavigation()">
          <template v-if="paging.page==n">
              <strong class="w3-button w3-border w3-green" :key="index">{{ n }}</strong>
          </template>
          <template v-else>
              <a class="w3-button w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
          </template>
      </template>
      <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
         @click="fnPage(`${paging.end_page+1}`)" class="next w3-button w3-border">&gt;</a>
      <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" class="last w3-button w3-border">&gt;&gt;</a>
      </span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import OnHeader from "@/components/onHeader.vue";
import boardDB from "@/scripts/testRankData";
export default {
  components:{OnHeader},
  data() { //변수생성
    return {
      requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: '', //게시판 숫자처리
      paging: {
        block: 0,
        end_page: 0,
        next_block: 0,
        page: 0,
        page_size: 0,
        prev_block: 0,
        start_index: 0,
        start_page: 0,
        total_block_cnt: 0,
        total_list_cnt: 0,
        total_page_cnt: 0,
      }, //페이징 데이터
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 10,
      keyword: this.$route.query.keyword,
      paginavigation: function () { //페이징 처리 for문 커스텀
        let pageNumber = [] //;
        let start_page = this.paging.start_page;
        let end_page = this.paging.end_page;
        for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
        return pageNumber;
      }
    }
  },
  mounted() {
    this.fnGetList()
  },
  methods: {
    fnGetList() {
      this.list = boardDB;
    },
    fnView(idx) {
      this.requestBody.number = idx
      this.$router.push({
        path: './board/detail',
        query: this.requestBody
      })
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n
        this.fnGetList()
      }
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
.list_cont{
  margin-top : 30px;
  margin-left: 20px;
  margin-right: 20px;

}
.comucont{
  font-family: 'Noto Sans KR', sans-serif;

  background-color: rgba(255, 255, 255, 0.77);
  font-size: 17px;
  color: black;
  height : 80vh;
//white-space: nowrap;
//text-decoration: underline;
}
</style>