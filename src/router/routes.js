/**
 * 这里用于配置vue各种单页面级组件路由地址
 */

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
    component: () => import('@/views/Login.vue'),
    meta: {
      isNav: true,
      title: '登录',
      isAuthRequired: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
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
        component: () => import('../components/Menu/user.vue'),
        meta: {
          isNav: true,
          title: '个人信息',
          isAuthRequired: false
        },
      },
      {
        path: '/about/house',
        name: 'house',
        component: () => import('../components/Menu/house.vue'),
        meta: {
          isNav: true,
          title: '首页',
          isAuthRequired: false
        },
      },
      {
        path: '/about/view',
        name: 'view',
        component: () => import('../components/Menu/view.vue'),
        meta: {
          isNav: true,
          title: '管理',
          isAuthRequired: false
        },
      },
      {
        path: '/about/videocamera',
        name: 'videocamera',
        component: () => import('../components/Menu/videocamera.vue'),
        meta: {
          isNav: true,
          title: '影像管理',
          isAuthRequired: false
        },
      },
      {
        path: '/about/headset',
        name: 'headset',
        component: () => import('../components/Menu/headset.vue'),
        meta: {
          isNav: true,
          title: '媒体管理',
          isAuthRequired: false
        },
      },
      {
        path: '/about/edit',
        name: 'edit',
        component: () => import('../components/Menu/edit.vue'),
        meta: {
          isNav: true,
          title: '评论管理',
          isAuthRequired: false
        },
      },
      {
        path: '/about/receiving',
        name: 'receiving',
        component: () => import('../components/Menu/receiving.vue'),
        meta: {
          isNav: true,
          title: '推送管理',
          isAuthRequired: false
        },
      },
      {
        path: '/about/notebook',
        name: 'notebook',
        component: () => import('../components/Menu/notebook.vue'),
        meta: {
          isNav: true,
          title: '用户管理',
          isAuthRequired: false
        },
      },
      {
        path: '/about/phoneoutline',
        name: 'phoneoutline',
        component: () => import('../components/Menu/phoneoutline.vue'),
        meta: {
          isNav: true,
          title: '联系电话',
          isAuthRequired: false
        },
      },
      {
        path: '/about/guide',
        name: 'guide',
        component: () => import('../components/Menu/guide.vue'),
        meta: {
          isNav: true,
          title: '版本管理',
          isAuthRequired: false
        },
      },
      {
        path: '/about/folderopened1',
        name: 'folderopened1',
        component: () => import('../components/Menu/folderopened1.vue'),
        meta: {
          isNav: true,
          title: '图文素材',
          isAuthRequired: false
        },
      },
      {
        path: '/about/folderopened2',
        name: 'folderopened2',
        component: () => import('../components/Menu/folderopened2.vue'),
        meta: {
          isNav: true,
          title: '图片素材',
          isAuthRequired: false
        },
      },
      {
        path: '/about/folderopened3',
        name: 'folderopened3',
        component: () => import('../components/Menu/folderopened3.vue'),
        meta: {
          isNav: true,
          title: '音频素材',
          isAuthRequired: false
        },
      },
      {
        path: '/about/folderopened4',
        name: 'folderopened4',
        component: () => import('../components/Menu/folderopened4.vue'),
        meta: {
          isNav: true,
          title: '视屏素材',
          isAuthRequired: false
        },
      },
      {
        path: '/about/dateset',
        name: 'dateset',
        component: () => import('../components/Menu/dateset.vue'),
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
        component: () => import('../components/PersonalCenter/mymessage.vue'),
        meta: {
          isNav: true,
          title: '个人信息',
          isAuthRequired: false
        },
      },
      {
        path: '/about/mypassword',
        name: 'mypassword',
        component: () => import('../components/PersonalCenter/mypassword.vue'),
        meta: {
          isNav: true,
          title: '修改密码',
          isAuthRequired: false
        },
      },

    ]
  },
]
