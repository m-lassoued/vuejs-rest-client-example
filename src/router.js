import Vue from 'vue';
import VueRouter from 'vue-router';
import Diary from './components/Diary.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/dashboard' },
        { path: '/dashboard', component: Diary},
    ]
});
