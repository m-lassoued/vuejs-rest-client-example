<template>
    <div id="login" class="ui middle aligned center aligned grid">
        <div class="login-column column">
            <h2 class="ui image header">
                <div class="content">
                    Game and user to check
                </div>
            </h2>
            <form class="ui large form">
                <div class="ui segment">
                    <div class="field">
                        <div class="ui left icon input">
                            <i class="user icon"></i>
                            <input type="text" name="email" placeholder="Email" v-model="email">
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui left icon input">
                            <i class="list icon"></i>
                            <input type="text" name="gameSlug" placeholder="GameSlug" v-model="gameSlug">
                        </div>
                    </div>
                    <div class="ui fluid large orange submit button" @click="onSubmitButtonClick">Submit</div>
                </div>
                <div class="ui negative message" v-if="error !== null">
                    <div class="header">{{ error.type | startCase }}</div>
                    <p>{{ error.title }}</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import lodashStartCase from 'lodash/startCase';

export default {
    data() {
        return {
            error: null,
            email: null,
            gameSlug: null
        }
    },
    methods: {
        onSubmitButtonClick() {
            this.$emit('filledIn', this.gameSlug, this.email);
/*
            this.error = this.gameSlug = this.email = null;
*/

        }
    },
    filters: {
        startCase(value) {
            return lodashStartCase(value);
        }
    },
}
</script>

<style scoped>
.login-column {
    width: 450px !important;
}
</style>
