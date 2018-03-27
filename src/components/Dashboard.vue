<template>
    <div>
        <app-menu></app-menu>
        <div class="ui grid container">
            <div class="row">
                <div class="column"><!-- this row intentionally left blank --></div>
            </div>
            <transition name="fade" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>
import Menu from './Menu.vue';
import moment from 'moment';

export default {
    components: {
        'app-menu': Menu,
    },
    mounted() {
        const email = localStorage.getItem('email');
        const gameSlug = localStorage.getItem('gameSlug');
        this.$store.dispatch('requestValuationList', gameSlug, email);
        this.$store.commit('setSelectedCalendarDate', moment());
    }
}
</script>
