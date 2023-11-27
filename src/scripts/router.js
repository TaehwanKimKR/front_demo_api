// import Home from "@/pages/Home.vue";
// import Login from "@/pages/Login.vue";
// import ScnMakePage from "@/components/ScnMakePage.vue";
// import ScnSelectPage from "@/components/ScnSelectPage.vue";
// import DashboardPage from "@/components/Dashboard.vue";
// import ErrorPage from "@/pages/ErrorPage.vue"
// import BoardPage from "@/components/BoardPage.vue";
// import TestBoard from "@/components/TestBoard.vue";

import {createRouter, createWebHashHistory} from "vue-router";
import OriginalPage from "@/components/OriginalPage.vue";
import MakeAtHome from "@/components/MakeAtHome.vue";
import MakeAtBar from "@/components/MakeAtBar.vue";
import TestBoard from "@/community/TestBoard.vue";
import TestBoardDetail from "@/community/TestBoardDetail.vue";
import BoardPage from "@/community/BoardPage.vue";
import Shop from "@/community/shop.vue";
// import BoardMakePage from "@/components/BoardMakePage.vue";
// import TestBoardDetail from "@/components/TestBoardDetail.vue";
// import TestBoardWrite from "@/components/TestBoardWrite.vue";
// import CustomChat from "@/components/customChatSide.vue";
import BoardDetail from "@/community/TestBoardDetail.vue";
import RankViewPage from "@/community/RankViewPage.vue";

const routes = [
    {path: '/', component: OriginalPage},
    // {path: '/login', component: Login},
    // {
    //     path: "/Original",
    //     name : "Original",
    //     component : OriginalPage
    // },
    {
        path : "/MakeAtHome",
        name : "MakeAtHome",
        component : MakeAtHome
    },
    {
        path : "/MakeAtBar",
        name : "MakeAtBar",
        component : MakeAtBar
    },
    {
        path : "/TestBoard",
        name : "TestBoard",
        component: TestBoard
    },
    {
        path : "/TestBoard/:id",
        name : "TestBoardDetail",
        component: TestBoardDetail
    },
    {
        path : "/Board",
        name : "Board",
        component: BoardPage
    },
    {
        path : "/Shop",
        name : "Shop",
        component: Shop
    },
    {
        path: '/board/detail',
        name: 'BoardDetail',
        props: true,
        component: BoardDetail
    },
    {
        path: '/Rank',
        name: 'RankView',
        component: RankViewPage
    }
    // {
    //     path : "/:pathMatch(.*)",
    //     name : "not-found",
    //     component : ErrorPage
    // },
    // {
    //     path : "/Board",
    //     name : "Board",
    //     component: BoardPage
    // },
    // {
    //     path : "/BoardMake",
    //     name : "BoardMake",
    //     component: BoardMakePage
    // },
    // {
    //     path : "/TestBoard",
    //     name : "TestBoard",
    //     component: TestBoard
    // },
    // {
    //     path : "/TestBoard/:id",
    //     name : "TestBoardDetail",
    //     component: TestBoardDetail
    // },
    // {
    //     path : "/TestBoard/Write",
    //     name : "TestBoardWrite",
    //     component: TestBoardWrite
    // },
    // {
    //     path : "/CustomChat",
    //     name : "CustomChat",
    //     component: CustomChat
    //
    // }



]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;