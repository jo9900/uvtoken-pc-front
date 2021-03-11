import Vue  from "vue"
import Login from '@/views/Login'
import Layout from '@/Layout'
import Home from '@/views/Index'
import  languageNav from "@/language/nav"
const languageName = localStorage.getItem("languageName")
const routes = [
    { path: '/login', name: 'login',label:'登录',meta: { requiresAuth: false,title:"登录"},component: Login},

    { path: '/signIn', name: 'signIn',label:'注册',meta: { requiresAuth: false,title:"注册"},component:resolve => require(['@/views/signIn/index.vue'],resolve) },
    { path: '/forget', name: 'resetPas',label:'忘记密码',meta: { requiresAuth: false,title:"忘记密码"},component:resolve => require(['@/views/resetPassword/index.vue'],resolve)},

    { path: '/',  component: Layout, label:'首页',meta: {title:"首页"},
        children:[
            { path: '/', name: '/',label:'首页',meta: { requiresAuth: false,title:"首页"}, component: Home },
        ]
    },

    { path: '/',  component: Layout, label:'新闻',meta: {title:"新闻"},
        children:[
            { path: '/news', name: 'news',label:'新闻',meta: { requiresAuth: false,title:"新闻"}, component:resolve => require(['@/views/News/index.vue'],resolve) },
            { path: '/newsDetail', name: 'news',label:'新闻详情',meta: { requiresAuth: false,title:"新闻"}, component: resolve => require(['@/views/News/newsDetail.vue'],resolve)},
        ]
    },

    { path: '/',  component: Layout, label:'用户协议',meta: {title:"用户协议"},
        children:[
            { path: '/usertext', name: 'usertext',label:'用户协议',meta: { requiresAuth: false,title:"用户协议"}, component:resolve => require(['@/views/usertext/index.vue'],resolve) },
        ]
    },
    { path: '/',  component: Layout, label:'多链闪兑',meta: {title:"多链闪兑"},
        children:[
            { path: '/multiChain', name: 'multiChain',label:'多链闪兑',meta: { requiresAuth: false,title:"多链闪兑"}, component:resolve => require(['@/views/DuoLian/index.vue'],resolve) },
        ]
    },
    { path: '/',  component: Layout, label:'理财',meta: {title:"理财"},
        children:[
            { path: '/lc', name: 'lc',label:'理财',meta: { requiresAuth: false,title:"理财"}, component:resolve => require(['@/views/Licai/index.vue'],resolve) },
        ]
    },
    { path: '/',  component: Layout, label:'DApp',meta: {title:"DApp"},
        children:[
            { path: '/Dapp', name: 'Dapp',label:'DApp',meta: { requiresAuth: false,title:"DApp"}, component:resolve => require(['@/views/DApp/index.vue'],resolve) },
        ]
    },
    { path: '/',  component: Layout, label:'硬件钱包',meta: {title:"硬件钱包"},
        children:[
            { path: '/wallet', name: 'wallet',label:'硬件钱包',meta: { requiresAuth: false,title:"硬件钱包"}, component:resolve => require(['@/views/wallet/index.vue'],resolve) },
        ]
    },

    { path: '/',  component: Layout, label:'申购协议',
        children:[
            { path: '/purchase', name: 'purchase',label:'申购协议',meta: { requiresAuth: false,title:"申购协议"}, component:resolve => require(['@/views/purchase/index.vue'],resolve) },
        ]
    },

    { path: '/',  component: Layout, label:'帮助',
        children:[
            { path: '/help', name: 'help',label:'帮助',meta: { requiresAuth: false,title:"帮助"}, component:resolve => require(['@/views/Help/index.vue'],resolve) },
        ]
    },
    { path: '/',  component: Layout, label:'帮助详情',
        children:[
            { path: '/helpDetail', name: 'helpDetail',label:'帮助详情',meta: { requiresAuth: false,title:"帮助详情"}, component:resolve => require(['@/views/Help/helpDetail.vue'],resolve) },
        ]
    },

    { path: '/',  component: Layout, label:'白皮书',
        children:[
            { path: '/books', name: 'books',label:'白皮书',meta: { requiresAuth: false,title:"白皮书"},
                component:resolve => require(['@/views/Books/index.vue'],resolve)
            },
        ]
    },

    { path: '/',  component: Layout, label:'培训学院',
        children:[
            { path: '/school', name: 'school',label:'培训学院',meta: { requiresAuth: false,title:"培训学院"},
                component:resolve => require(['@/views/School'],resolve)
            },
        ]
    },

    { path: '/',  component: Layout, label:'社区',
        children:[
            { path: '/community', name: 'community',label:'社区',meta: { requiresAuth: false,title:"社区"},

                component:resolve => require(['@/views/Community/index.vue'],resolve)
            },
        ]
    },

    { path: '/',  component: Layout, label:"预售",
        children:[
            { path: '/presell', name: 'presell',label:"预售",meta: { requiresAuth: false,title:"预售"},

                component:resolve => require(['@/views/Presell/index.vue'],resolve)
            },
        ]
    },


    { path: '/',  component: Layout, label:'个人中心',
        children:[
            { path: '/center', name: 'center',label:'个人中心',meta: { requiresAuth: true,title:"个人中心"}, component:  resolve => require(['@/views/Center'],resolve) },
            { path: '/KYCapply', name: 'KYCapply',label:'KYC认证',meta: { requiresAuth: true,title:"KYC认证"}, component: resolve => require(['@/views/Center/KYCapply.vue'],resolve) },
            { path: '/KYClose', name: 'KYClose',label:'认证失败',meta: { requiresAuth: true,title:"认证失败"}, component: resolve => require(['@/views/Center/KYClose.vue'],resolve)},
            { path: '/applyBuylog', name: 'applyBuylog',label:'申购记录',meta: { requiresAuth: true,title:"申购记录"},component:resolve => require(['@/views/Center/applyBuylog.vue'],resolve)},
            { path: '/interestLog', name: 'interestLog',label:'利息记录',meta: { requiresAuth: true,title:"利息记录"}, component:resolve => require(['@/views/Center/interestLog.vue'],resolve)},
            { path: '/extendLog', name: 'extendLog',label:'推广记录',meta: { requiresAuth: true,title:"推广记录"}, component:resolve => require(['@/views/Center/extendLog.vue'],resolve)},
            { path: '/password', name: 'password',label:'修改密码',meta: { requiresAuth: true,title:"修改密码"}, component:resolve => require(['@/views/Center/password.vue'],resolve) },
            { path: '/rebatelog', name: 'rebatelog',label:'返利记录',meta: { requiresAuth: true,title:"返利记录"}, component:resolve => require(['@/views/Center/rebatelog.vue'],resolve)},
            { path: '/transfer', name: 'transfer',label:'转让',meta: { requiresAuth: true,title:"转让"}, component:resolve => require(['@/views/Center/transfer.vue'],resolve)}
        ]
    },
    { path: '/404', name: '404',label:'404', component: ()=> import('@/views/Notfind') },
    { path: '*', redirect: '/404'}
]

export default routes
