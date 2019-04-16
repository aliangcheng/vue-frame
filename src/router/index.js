import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HelloWorld = function (resolve) {
        require.ensure([], function () {
             resolve(require('../components/HelloWorld'))
        })
}

export default new Router({
        mode: 'hash',
        base: __dirname,
        routes: [
                {
                        path: '/',
                        redirect: '/HelloWorld'
                },
                {
                        path: '/HelloWorld',
                        component: HelloWorld,
                },
        ]
})
