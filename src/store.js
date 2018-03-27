import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import moment from 'moment';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    isFilled: false,
    availableValuations: [],
    selectedCalendarDate: moment()
};

const getters = {
    getAvailableValuations: state => state.availableValuations,
    getSelectedCalendarDate: state => state.selectedCalendarDate,
    getIsFilled: state => {
        return state.isFilled;
    }
};

const actions = {
    requestValuationList({ commit }, gameSlug, email) {
        if(email) {
            Vue.http.get(`ranking/${gameSlug}/${email}/null`).then(response => {
                commit('setAvailableValuations', response.body);
            });
        }
    }
};

const mutations = {
    setAvailableValuations(state, valuations = []) {
        state.availableValuations = valuations;
    },
    setSelectedCalendarDate(state, date = moment()) {
        state.selectedCalendarDate = date;
    },
    setIsFilled(state, isFilled) {
        state.isFilled = isFilled;
    },
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
