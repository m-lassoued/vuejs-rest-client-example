<template>
    <div id="menu">
        <div class="ui grid container">
            <div class="row">
                <div class="column">
                    <div class="ui inverted labeled icon menu">
                        <h1 class="header item">Investments valuation</h1>
                        <router-link to="/dashboard" class="item" active-class="active">
                            <i class="book icon"></i>
                            Dashboard
                        </router-link>
                        <div class="right item">
                            <div class="middle aligned content">
                                <a href="#" class="ui inverted button" @click="onNewParamsClicked">
                                    New Params
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onNewParamsClicked() {
            localStorage.removeItem('email');
            localStorage.removeItem('gameSlug');
            this.$store.commit('setIsFilled', false);
        }
    }
}
</script>

<style scoped>
    #menu {
        background-color: #1B1C1D;
    }
    #menu .row {
        padding-bottom: 0 !important;
    }
</style>
