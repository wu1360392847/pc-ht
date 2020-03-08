/**
 * 这里用于配置vue各种单页面级组件路由地址
 */

const Login = () => import('@/views/Login.vue')
const About = () => import('@/views/About.vue')

// 一级菜单
const user = () => import('../components/Menu/user.vue')
const house = () => import('../components/Menu/house.vue')
const view = () => import('../components/Menu/view.vue')
const videocamera = () => import('../components/Menu/videocamera.vue')
const headset = () => import('../components/Menu/headset.vue')
const edit = () => import('../components/Menu/edit.vue')
const receiving = () => import('../components/Menu/receiving.vue')
const notebook = () => import('../components/Menu/notebook.vue')
const phoneoutline = () => import('../components/Menu/phoneoutline.vue')
const guide = () => import('../components/Menu/guide.vue')
const folderopened1 = () => import('../components/Menu/folderopened1.vue')
const folderopened2 = () => import('../components/Menu/folderopened2.vue')
const folderopened3 = () => import('../components/Menu/folderopened3.vue')
const folderopened4 = () => import('../components/Menu/folderopened4.vue')
const dateset = () => import('../components/Menu/dateset.vue')

// 个人信息，修改密码
const mymessage = () => import('../components/PersonalCenter/mymessage.vue')
const mypassword = () => import('../components/PersonalCenter/mypassword.vue')


export default [
  {
    // 请求路径,这里配置为重定向
    path: '/',
    redirect: '/login',
    meta: {
      // 用于保存需要传递的验证信息等
      isNav: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,

    meta: {
      isNav: true,
      title: '登录',
      isAuthRequired: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      isNav: true,
      title: ' ',
      isAuthRequired: false
    },
    children: [
      // 二级路由
      // 二级路由重定向
      {
        path: '/about',
        redirect: '/about/house'
      },
      {
        path: '/about/user',
        name: 'user',
        component: user,
        meta: {
          isNav: true,
          title: '个人信息',
          isAuthRequired: false
        },
      },
      {
        path: '/about/house',
        name: 'house',
        component: house,
        meta: {
          isNav: true,
          title: '首页',
          isAuthRequired: false
        },
      },
      {
        path: '/about/view',
        name: 'view',
        component: view,
        meta: {
          isNav: true,
          title: '资讯管理',
          isAuthRequired: false
        },
      },
      {
        path: '/about/videocamera',
        name: 'videocamera',
        component: videocamera,
        meta: {
          isNav: true,
          title: '影像志',
          isAuthRequired: false
        },
      },
      {
        path: '/about/headset',
        name: 'headset',
        component: headset,
        meta: {
          isNav: true,
          title: '媒体师大',
          isAuthRequired: false
        },
      },
      {
        path: '/about/edit',
        name: 'edit',
        component: edit,
        meta: {
          isNav: true,
          title: '评论管理',
          isAuthRequired: false
        },
      },
      {
        path: '/about/receiving',
        name: 'receiving',
        component: receiving,
        meta: {
          isNav: true,
          title: '推送管理',
          isAuthRequired: false
        },
      },
      {
        path: '/about/notebook',
        name: 'notebook',
        component: notebook,
        meta: {
          isNav: true,
          title: '用户管理',
          isAuthRequired: false
        },
      },
      {
        path: '/about/phoneoutline',
        name: 'phoneoutline',
        component: phoneoutline,
        meta: {
          isNav: true,
          title: '联系电话',
          isAuthRequired: false
        },
      },
      {
        path: '/about/guide',
        name: 'guide',
        component: guide,
        meta: {
          isNav: true,
          title: '版本管理',
          isAuthRequired: false
        },
      },
      {
        path: '/about/folderopened1',
        name: 'folderopened1',
        component: folderopened1,
        meta: {
          isNav: true,
          title: '图文素材',
          isAuthRequired: false
        },
      },
      {
        path: '/about/folderopened2',
        name: 'folderopened2',
        component: folderopened2,
        meta: {
          isNav: true,
          title: '图片素材',
          isAuthRequired: false
        },
      },
      {
        path: '/about/folderopened3',
        name: 'folderopened3',
        component: folderopened3,
        meta: {
          isNav: true,
          title: '音频素材',
          isAuthRequired: false
        },
      },
      {
        path: '/about/folderopened4',
        name: 'folderopened4',
        component: folderopened4,
        meta: {
          isNav: true,
          title: '视屏素材',
          isAuthRequired: false
        },
      },
      {
        path: '/about/dateset',
        name: 'dateset',
        component: dateset,
        meta: {
          isNav: true,
          title: '常规管理',
          isAuthRequired: false
        },
      },
      // 其他
      {
        path: '/about/mymessage',
        name: 'mymessage',
        component: mymessage,
        meta: {
          isNav: true,
          title: '个人信息',
          isAuthRequired: false
        },
      },
      {
        path: '/about/mypassword',
        name: 'mypassword',
        component: mypassword,
        meta: {
          isNav: true,
          title: '修改密码',
          isAuthRequired: false
        },
      },

    ]
  },
]
