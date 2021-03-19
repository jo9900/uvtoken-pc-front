import Vue from "vue"
import Login from '@/views/Login'
import Layout from '@/Layout'
import Home from '@/views/Index'

const routes = [
    {
        path: '/',
        component: Layout,
        label: '',
        children: [
            {
                path: '/',
                name: '/',
                label: '首页',
                meta: { requiresAuth: false, title: "首页" },
                component: Home
            },
            {
                path: '/login',
                name: 'login',
                label: '登录',
                meta: { requiresAuth: false, title: "登录" },
                component: Login
            },
            {
                path: '/signUp',
                name: 'signUp',
                label: '注册',
                meta: { requiresAuth: false, title: "注册" },
                component: resolve => require( [ '@/views/SignUp/index.vue' ], resolve )
            },
            {
                path: '/forget',
                name: 'resetPas',
                label: '忘记密码',
                meta: { requiresAuth: false, title: "忘记密码" },
                component: resolve => require( [ '@/views/resetPassword/index.vue' ], resolve )
            }
        ]
    },

    {
        path: '/', component: Layout, label: '新闻', meta: { title: "新闻" },
        children: [
            {
                path: '/news',
                name: 'news',
                label: '新闻',
                meta: { requiresAuth: false, title: "新闻" },
                component: resolve => require( [ '@/views/News/index.vue' ], resolve )
            },
            {
                path: '/newsDetail',
                name: 'newsDetail',
                label: '新闻详情',
                meta: { requiresAuth: false, title: "新闻" },
                component: resolve => require( [ '@/views/News/newsDetail.vue' ], resolve )
            }
        ]
    },

    {
        path: '/', component: Layout, label: '用户协议', meta: { title: "用户协议" },
        children: [
            {
                path: '/userAgreement',
                name: 'userAgreement',
                label: '用户协议',
                meta: { requiresAuth: false, title: "用户协议" },
                component: resolve => require( [ '@/views/UserAgreement/index.vue' ], resolve )
            }
        ]
    },
    {
        path: '/', component: Layout, label: '多链闪兑', meta: { title: "多链闪兑" },
        children: [
            {
                path: '/multiChain',
                name: 'multiChain',
                label: '多链闪兑',
                meta: { requiresAuth: false, title: "多链闪兑" },
                component: resolve => require( [ '@/views/MultiChain/index.vue' ], resolve )
            }
        ]
    },
    {
        path: '/', component: Layout, label: '理财', meta: { title: "理财" },
        children: [
            {
                path: '/financial',
                name: 'financial',
                label: '理财',
                meta: { requiresAuth: false, title: "理财" },
                component: resolve => require( [ '@/views/Financial/index.vue' ], resolve )
            }
        ]
    },
    {
        path: '/', component: Layout, label: 'DApp', meta: { title: "DApp" },
        children: [
            {
                path: '/Dapp',
                name: 'Dapp',
                label: 'DApp',
                meta: { requiresAuth: false, title: "DApp" },
                component: resolve => require( [ '@/views/DApp/index.vue' ], resolve )
            }
        ]
    },
    {
        path: '/', component: Layout, label: '硬件钱包', meta: { title: "硬件钱包" },
        children: [
            {
                path: '/wallet',
                name: 'wallet',
                label: '硬件钱包',
                meta: { requiresAuth: false, title: "硬件钱包" },
                component: resolve => require( [ '@/views/wallet/index.vue' ], resolve )
            }
        ]
    },

    {
        path: '/', component: Layout, label: '申购协议',
        children: [
            {
                path: '/purchaseAgreement',
                name: 'purchaseAgreement',
                label: '申购协议',
                meta: { requiresAuth: false, title: "申购协议" },
                component: resolve => require( [ '@/views/PurchaseAgreement/index.vue' ], resolve )
            }
        ]
    },

    {
        path: '/', component: Layout, label: '帮助',
        children: [
            {
                path: '/help',
                name: 'help',
                label: '帮助',
                meta: { requiresAuth: false, title: "帮助" },
                component: resolve => require( [ '@/views/Help/index.vue' ], resolve )
            }
        ]
    },
    {
        path: '/', component: Layout, label: '帮助详情',
        children: [
            {
                path: '/helpDetail',
                name: 'helpDetail',
                label: '帮助详情',
                meta: { requiresAuth: false, title: "帮助详情" },
                component: resolve => require( [ '@/views/Help/helpDetail.vue' ], resolve )
            }
        ]
    },

    {
        path: '/', component: Layout, label: '白皮书',
        children: [
            {
                path: '/whitePaper', name: 'whitePaper', label: '白皮书', meta: { requiresAuth: false, title: "白皮书" },
                component: resolve => require( [ '@/views/WhitePaper/index.vue' ], resolve )
            }
        ]
    },

    {
        path: '/', component: Layout, label: "预售",
        children: [
            {
                path: '/presale', name: 'presale', label: "预售", meta: { requiresAuth: false, title: "预售" },

                component: resolve => require( [ '@/views/Presale/index.vue' ], resolve )
            }
        ]
    },


    {
        path: '/', component: Layout, label: '个人中心',
        children: [
            {
                path: '/center',
                name: 'center',
                label: '个人中心',
                meta: { requiresAuth: true, title: "个人中心" },
                component: resolve => require( [ '@/views/Center' ], resolve )
            },
            {
                path: '/KYCapply',
                name: 'KYCapply',
                label: 'KYC认证',
                meta: { requiresAuth: true, title: "KYC认证" },
                component: resolve => require( [ '@/views/Center/KYCapply.vue' ], resolve )
            },
            {
                path: '/KYClose',
                name: 'KYClose',
                label: '认证失败',
                meta: { requiresAuth: true, title: "认证失败" },
                component: resolve => require( [ '@/views/Center/KYClose.vue' ], resolve )
            },
            {
                path: '/applyBuylog',
                name: 'applyBuylog',
                label: '申购记录',
                meta: { requiresAuth: true, title: "申购记录" },
                component: resolve => require( [ '@/views/Center/applyBuylog.vue' ], resolve )
            },
            {
                path: '/interestLog',
                name: 'interestLog',
                label: '利息记录',
                meta: { requiresAuth: true, title: "利息记录" },
                component: resolve => require( [ '@/views/Center/interestLog.vue' ], resolve )
            },
            {
                path: '/extendLog',
                name: 'extendLog',
                label: '推广记录',
                meta: { requiresAuth: true, title: "推广记录" },
                component: resolve => require( [ '@/views/Center/extendLog.vue' ], resolve )
            },
            {
                path: '/password',
                name: 'password',
                label: '修改密码',
                meta: { requiresAuth: true, title: "修改密码" },
                component: resolve => require( [ '@/views/Center/password.vue' ], resolve )
            },
            {
                path: '/rebatelog',
                name: 'rebatelog',
                label: '返利记录',
                meta: { requiresAuth: true, title: "返利记录" },
                component: resolve => require( [ '@/views/Center/rebatelog.vue' ], resolve )
            },
            {
                path: '/transfer',
                name: 'transfer',
                label: '转让',
                meta: { requiresAuth: true, title: "转让" },
                component: resolve => require( [ '@/views/Center/transfer.vue' ], resolve )
            }
        ]
    },
    {
        path: '/404',
        name: '404',
        label: '404',
        component: resolve => require( [ '@/views/Notfound/index.vue' ], resolve )

    },
    { path: '*', redirect: '/404' }
]

export default routes
