﻿/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        layout: false,
        name: 'login',
        component: './user/login',
      },
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        name: 'register-result',
        icon: 'smile',
        path: '/user/register-result',
        component: './user/register-result',
      },
      {
        name: 'register',
        icon: 'smile',
        path: '/user/register',
        component: './user/register',
      },
      // {
      //   component: '404',
      //   path: '/*',
      // },
    ],
  },
  // --------------------- STUDY: react start ----------------
  {
    path: '/onepisya',
    name: 'onepisya-react-practice',
    icon: 'smile',
    routes: [
      {
        path: '/onepisya',
        redirect: '/onepisya/helloworld',
      },
      {
        name: '1.创建和嵌套组件',
        icon: 'smile',
        path: '/onepisya/helloworld',
        component: './onepisya/helloworld',
      },
      {
        name: '2.添加样式',
        icon: 'smile',
        path: '/onepisya/addstyle',
        component: './onepisya/addstyle',
      },
      {
        name: '3.使用变量',
        icon: 'smile',
        path: '/onepisya/var',
        component: './onepisya/var',
      },
      {
        name: '4.条件渲染',
        icon: 'smile',
        path: '/onepisya/conditional-rendering',
        component: './onepisya/conditional-rendering',
      },
      {
        name: '5.列表渲染',
        icon: 'smile',
        path: '/onepisya/list-rendering',
        component: './onepisya/list-rendering',
      },
      {
        name: '6.响应事件',
        icon: 'smile',
        path: '/onepisya/respond-events',
        component: './onepisya/respond-events',
      },
      {
        name: '7.更新界面',
        icon: 'smile',
        path: '/onepisya/update-ui',
        component: './onepisya/update-ui',
      },
      {
        name: '8.共享数据',
        icon: 'smile',
        path: '/onepisya/share-data',
        component: './onepisya/share-data',
      },
      {
        name: '10.井字棋游戏',
        icon: 'smile',
        path: '/onepisya/tic-tac-toe-game',
        component: './onepisya/tic-tac-toe-game',
      },
      {
        name: '11.React哲学-静态',
        icon: 'smile',
        path: '/onepisya/react-phd/static-react-phd',
        component: './onepisya/react-phd/static-react-phd',
      },
      {
        name: '12.React哲学-state',
        icon: 'smile',
        path: '/onepisya/react-phd/state-react-phd',
        component: './onepisya/react-phd/state-react-phd',
      },
      {
        name: '13.保持组件纯粹',
        icon: 'smile',
        path: '/onepisya/pure-function-comp',
        component: './onepisya/pure-function-comp',
      },
      {
        name: '14.useState例子',
        icon: 'smile',
        path: '/onepisya/use-state',
        component: './onepisya/use-state',
      },
      {
        name: '15.useEffect例子',
        icon: 'smile',
        path: '/onepisya/use-effect',
        component: './onepisya/use-effect',
      },
      {
        name: '16.useContext例子',
        icon: 'smile',
        path: '/onepisya/use-context',
        component: './onepisya/use-context',
      },
      {
        name: '17.useReducer例子',
        icon: 'smile',
        path: '/onepisya/use-reducer',
        component: './onepisya/use-reducer',
      },
      {
        name: '18.自定义Hook',
        icon: 'smile',
        path: '/onepisya/custom-hook',
        component: './onepisya/custom-hook',
      },
      {
        name: '19.类组件例子',
        icon: 'smile',
        path: '/onepisya/class-components',
        component: './onepisya/class-components',
      },
      {
        name: '20.memo 例子',
        icon: 'smile',
        path: '/onepisya/use-memo',
        component: './onepisya/use-memo',
      },
    ],
  },
  {
    path: '/onepisya-mobx',
    name: 'onepisya-mobx-practice',
    icon: 'smile',
    routes: [
      {
        path: '/onepisya-mobx',
        redirect: '/onepisya-mobx/helloworld',
      },
      {
        name: '1. mobx 入门例子',
        icon: 'smile',
        path: '/onepisya-mobx/helloworld',
        component: './onepisya-mobx/helloworld',
      },
      {
        name: '2. mobx 入门例子 TodoList',
        icon: 'smile',
        path: '/onepisya-mobx/todo-list',
        component: './onepisya-mobx/todo-list',
      },
      {
        name: '3. mobx 设计模式例子',
        icon: 'smile',
        path: '/onepisya-mobx/design-pattern',
        component: './onepisya-mobx/design-pattern',
      },
      {
        name: '4. mobx 创建可观察对象（响应式对象）',
        icon: 'smile',
        path: '/onepisya-mobx/mobx-common-api',
        component: './onepisya-mobx/mobx-common-api',
      },
    ],
  },
  {
    path: '/onepisya-dva',
    name: 'onepisya-dva-ant-practice',
    icon: 'smile',
    routes: [
      {
        path: '/onepisya-dva',
        redirect: '/onepisya-dva/hello',
      },
      {
        name: '1. 入门例子 ProductList',
        icon: 'smile',
        path: '/onepisya-dva/hello',
        component: './onepisya-dva/hello',
      },
    ],
  },
  // --------------------- STUDY: react end ----------------
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/analysis',
      },
      {
        name: 'analysis',
        icon: 'smile',
        path: '/dashboard/analysis',
        component: './dashboard/analysis',
      },
      {
        name: 'monitor',
        icon: 'smile',
        path: '/dashboard/monitor',
        component: './dashboard/monitor',
      },
      {
        name: 'workplace',
        icon: 'smile',
        path: '/dashboard/workplace',
        component: './dashboard/workplace',
      },
    ],
  },
  {
    path: '/form',
    icon: 'form',
    name: 'form',
    routes: [
      {
        path: '/form',
        redirect: '/form/basic-form',
      },
      {
        name: 'basic-form',
        icon: 'smile',
        path: '/form/basic-form',
        component: './form/basic-form',
      },
      {
        name: 'step-form',
        icon: 'smile',
        path: '/form/step-form',
        component: './form/step-form',
      },
      {
        name: 'advanced-form',
        icon: 'smile',
        path: '/form/advanced-form',
        component: './form/advanced-form',
      },
    ],
  },
  {
    path: '/list',
    icon: 'table',
    name: 'list',
    routes: [
      {
        path: '/list/search',
        name: 'search-list',
        component: './list/search',
        routes: [
          {
            path: '/list/search',
            redirect: '/list/search/articles',
          },
          {
            name: 'articles',
            icon: 'smile',
            path: '/list/search/articles',
            component: './list/search/articles',
          },
          {
            name: 'projects',
            icon: 'smile',
            path: '/list/search/projects',
            component: './list/search/projects',
          },
          {
            name: 'applications',
            icon: 'smile',
            path: '/list/search/applications',
            component: './list/search/applications',
          },
        ],
      },
      {
        path: '/list',
        redirect: '/list/table-list',
      },
      {
        name: 'table-list',
        icon: 'smile',
        path: '/list/table-list',
        component: './table-list',
      },
      {
        name: 'basic-list',
        icon: 'smile',
        path: '/list/basic-list',
        component: './list/basic-list',
      },
      {
        name: 'card-list',
        icon: 'smile',
        path: '/list/card-list',
        component: './list/card-list',
      },
    ],
  },
  {
    path: '/profile',
    name: 'profile',
    icon: 'profile',
    routes: [
      {
        path: '/profile',
        redirect: '/profile/basic',
      },
      {
        name: 'basic',
        icon: 'smile',
        path: '/profile/basic',
        component: './profile/basic',
      },
      {
        name: 'advanced',
        icon: 'smile',
        path: '/profile/advanced',
        component: './profile/advanced',
      },
    ],
  },
  {
    name: 'result',
    icon: 'CheckCircleOutlined',
    path: '/result',
    routes: [
      {
        path: '/result',
        redirect: '/result/success',
      },
      {
        name: 'success',
        icon: 'smile',
        path: '/result/success',
        component: './result/success',
      },
      {
        name: 'fail',
        icon: 'smile',
        path: '/result/fail',
        component: './result/fail',
      },
    ],
  },
  {
    name: 'exception',
    icon: 'warning',
    path: '/exception',
    routes: [
      {
        path: '/exception',
        redirect: '/exception/403',
      },
      {
        name: '403',
        icon: 'smile',
        path: '/exception/403',
        component: './exception/403',
      },
      {
        name: '404',
        icon: 'smile',
        path: '/exception/404',
        component: './exception/404',
      },
      {
        name: '500',
        icon: 'smile',
        path: '/exception/500',
        component: './exception/500',
      },
    ],
  },
  {
    name: 'account',
    icon: 'user',
    path: '/account',
    routes: [
      {
        path: '/account',
        redirect: '/account/center',
      },
      {
        name: 'center',
        icon: 'smile',
        path: '/account/center',
        component: './account/center',
      },
      {
        name: 'settings',
        icon: 'smile',
        path: '/account/settings',
        component: './account/settings',
      },
    ],
  },
  {
    path: '/',
    redirect: '/dashboard/analysis',
  },
  {
    component: '404',
    path: '/*',
  },
];
