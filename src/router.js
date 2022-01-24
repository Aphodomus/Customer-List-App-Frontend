import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from '@/views/Home';
import EditComponent from '@/components/customer/Edit';
import CreateComponent from '@/components/customer/Create';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: { name: 'home' } },
        { path: '/home', name: 'home', component: HomeComponent },
        { path: '/', name: 'Create', component: CreateComponent },
        { path: '/', name: 'Edit', component: EditComponent },
    ]
});