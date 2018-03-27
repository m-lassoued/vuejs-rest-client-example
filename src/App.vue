<template>
    <div>
        <transition name="fade" mode="out-in" appear>
            <keep-alive>
                <app-params v-if="!isFilled" @filledIn="onSuccessfulFill"></app-params>
                <app-dashboard v-else></app-dashboard>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Params from './components/Params.vue';
import Dashboard from './components/Dashboard.vue'

export default {
    components: {
        'app-dashboard': Dashboard,
        'app-params': Params
    },
    computed: {
        ...mapGetters({
            isFilled: 'getIsFilled',
            isLoading: 'getIsLoading'
        })
    },
    methods: {
        onSuccessfulFill(gameSlug, email) {
            localStorage.setItem('gameSlug', gameSlug);
            localStorage.setItem('email', email);
            this.$store.commit('setIsFilled', true);
        }
    },
    created() {
        const email = localStorage.getItem('email');
        const gameSlug = localStorage.getItem('gameSlug');

        if (gameSlug !== null && email !== null) {
            this.onSuccessfulFill(gameSlug, email);
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .4s !important;
}
.fade-enter, .fade-leave-to {
    opacity: 0 !important;
}
#login {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.modal {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
}
</style>
