import Vue from 'vue'
import Router from 'vue-router'
import Strat from '@/stratPage/Strat'
import Login from '@/login/Login'
import pass from '@/user/password/password'
import register from '@/user/register/Register'
import otherLogin from '@/login/login/OtherLogin'
import designerList from '@/designer/DesignerList'
import showDetail from '@/designer/designerDetail/ShowDetail.vue'
import home from '@/homePage/Home'
import Works from '@/designer/designerDetail/Works'
import Profile from '@/designer/designerDetail/Profile'
import msg from '@/util/Message'
import index from '@/homePage/index'
import MessageCenter from '@/message/MessageCenter'
import Jiaoyi from '@/message/fenlei/Jiaoyi'
import Construction from '@/construction/Construction'
import company from '@/construction/Company'
import site from '@/construction/companyDetail/Site'
import companyDetail from '@/construction/companyDetail/CompanyDetail'
import comment from '@/public/Comment'
import payTip from '@/designer/designerDetail/PayTips'
import designerpayment from '@/designer/designerDetail/DesignerPayment.vue'
import successPay from '@/public/PaySuccess'
import worksShow from '@/designer/designerDetail/WorksShow.vue'
import payment from '@/public/Payment'
import materialCommodityIndex from '@/materialHouse/commodity/MaterialCommodityIndex'
import materialHouse from '@/homePage/MaterialHouse'
import materialShopDetail from '@/materialHouse/commodity/MaterialShopDetail'
import shopCart from '@/public/ShopCart'
import materialReviews from '@/materialHouse/commodity/MaterialReviews.vue'
import materialSettlement from '@/materialHouse/commodity/MateriaOrderSettlement.vue'
import payResult from '@/public/PayResult'
import address from '@/public/Address'
import addressAdd from '@/public/AddressAdd'
import account from '@/homePage/account'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/myInteraction',
      name: 'myInteraction',
      component: () => import('@/user/myHome/myInteraction'),
      children:[
        {
          path: 'comment',
          name: 'comment',
          component: ()=>import('@/user/myHome/myInteraction/Comment')
        },
        {
          path: 'consult',
          name: 'consult',
          component: ()=>import('@/user/myHome/myInteraction/Consult')
        }
      ],
      redirect: '/myInteraction/comment'
    },
    {
      path: '/myGl',
      name: 'myGl',
      component: () => import('@/user/myHome/MyGl'),
      children:[
        {
          path: 'audit',
          name: 'audit',
          component: ()=>import('@/user/myHome/Mygl/audit')
        },
        {
          path: 'draft',
          name: 'Draft',
          component: ()=>import('@/user/myHome/Mygl/Draft')
        },
        {
          path: 'publish',
          name: 'publish',
          component: ()=>import('@/user/myHome/Mygl/Publish')
        }
       ],
      redirect: '/myGl/audit'
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: () => import('@/user/myHome/AboutUs')
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: () => import('@/user/myHome/contactUs')
    },
    {
      path: '/checkStyle',
      name: 'checkStyle',
      component: () => import('@/user/myHome/checkStyle')
    },
    {
      path: '/myhome',
      name: 'myhome',
      component: () => import('@/user/myHome/index')
    },
    {
      path: '/siteList',
      name: 'siteList',
      component: () => import('@/construction/SiteList')
    },
    {
      path: '/pic',
      name: 'pic',
      component: () => import('@/picture/Pic')
    },
    {
      path: '/storeDetail',
      name: 'storeDetail',
      component: () => import('@/materialHouse/shop/StoreDetail')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('@/materialHouse/shop/Store')
    },
    {
      path: '/storeList',
      name: 'StoreList',
      component: () => import('@/materialHouse/shop/StoreList')
    },
    {
      path: '/siteDetail',
      name: 'Sitedetail',
      component: () => import('@/construction/SiteDetail')
    },
    {
      path: '/glReviews',
      name: 'GlReviews',
      component: () => import('@/strategy/GlReviews')
    },
    {
      path: '/glDetail',
      name: 'GlDetail',
      component: () => import('@/strategy/Gldetail')
    },
    {
      path: '/ZxDetail',
      name: 'Zxdetail',
      component: () => import('@/strategy/Zxdetail')
    },
    {
      path: '/addressAdd',
      name: 'addressAdd',
      component: addressAdd
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/materialSettlement',
      name: 'materialSettlement',
      component: materialSettlement
    },

    {
      path: '/materialReviews',
      name: 'materialReviews',
      component: materialReviews
    },
    {
      path: '/shopCart',
      name: 'ShopCart',
      component: shopCart
    },
    {
      path: '/materialShopDetail',
      name: 'MaterialShopDetail',
      component: materialShopDetail
    },
    {
      path: '/materialCommodityIndex',
      name: 'materialCommodityIndex',
      component: materialCommodityIndex
    },
    {
      path: '/payment',
      name: 'Payment',
      component: payment
    },
    {
      path: '/payResult',
      name: 'payResult',
      component: payResult
    },
    {
      path: '/worksShow',
      name: 'worksShow',
      component: worksShow
    },
    {
      path: '/successPay',
      name: 'successPay',
      component: successPay
    },
    {
      path: '/designerPayment',
      name: 'designerPayment',
      component: designerpayment
    },
    {
      path: '/paytips',
      name: 'paytips',
      component: payTip
    },
    {
      path: '/company',
      name: 'Company',
      component: company,
      children: [
        {
          path: 'constructionSite',
          name: 'site',
          component: site
        },
        {
          path: 'companyDetail',
          name: 'companyDetail',
          component: companyDetail
        },
        {
          path: 'comment',
          name: 'comment',
          component: comment
        }
      ],
      redirect: '/company/constructionSite'
    },
    {
      path: '/construction',
      name: 'Construction',
      component: Construction
    },
    {
      path: '/msgjiaoyi',
      name: 'Jiaoyi',
      component: Jiaoyi
    },
    {
      path: '/messageCenter',
      name: 'MessageCenter',
      component: MessageCenter
    },
    {
      path: '/index',
      name: () => import('@/homePage/index'),
      component: index,
      children: [
        {
          path: 'picture',
          name: 'picture',
          component: () => import('@/homePage/picture'),
          redirect: {name: 'effect'},
          children: [
            {
              path: 'local',
              name: 'local',
              component: () => import('@/picture/Local')
            },
            {
              path: 'case',
              name: 'case',
              component: () => import('@/picture/Case')
            },
            {
              path: 'effect',
              name: 'effect',
              component: () => import('@/picture/Effect')
            }
          ]
        },
        {
          path: 'home',
          name: 'Home',
          component: home
        },
        {
          path: 'my',
          name: 'my',
          component: account
        },
        {
          path: 'materialHouse',
          name: 'MaterialHouse',
          component: materialHouse
        },
        {
          path: 'strategy',
          name: 'strategy',
          component: () => import('@/homePage/Strategy'),
          redirect: {name: 'gl'},
          children: [
            {
              path: 'zx',
              name: 'zx',
              component: () => import('@/strategy/Zx')
            },
            {
              path: 'gl',
              name: 'gl',
              component: () => import('@/strategy/Gl')
            }
          ]
        }
      ]
    },
    {
      path: '/',
      name: 'Strat',
      component: Strat
    }, {
      path: '/home',
      name: 'Home',
      component: home,
      children: [
        {
          path: 'msg',
          name: 'Message',
          component: msg
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/pass',
      name: 'password',
      component: pass
    },
    {
      name: 'Register',
      path: '/register',
      component: register
    },
    {
      name: 'otherLogin',
      path: '/otherLogin',
      component: otherLogin

    },
    {
      name: 'DesignerList',
      path: '/designerList',
      component: designerList
      /* children: [
        {
          path: 'one',
          component: {
            template: `<div>one</div>`
          }
        }
      ] */
    },
    {
      name: 'ShowDetail',
      path: '/showDetail',
      component: showDetail,
      children: [
        {
          path: 'works',
          component: Works
        },
        {
          path: 'comment',
          component: comment
        }, {
          path: 'profile',
          component: Profile
        }
      ],
      redirect: '/showDetail/works'

    }
  ]
})
