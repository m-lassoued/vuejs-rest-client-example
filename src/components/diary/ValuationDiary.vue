<template>
    <div>
        <div class="ui active inverted dimmer" v-if="isLoading">
            <div class="ui text loader">Loading...</div>
        </div>
        <div class="meal-wrapper" v-for="(valuationItem) in valuations">
            <div v-if="valuationItem" >
                <span><b>Valuation</b> : {{ valuationItem.valuation.valuationToday.amount }} {{ valuationItem.valuation.valuationToday.currency}}</span><br>
                <span><b>Bank account amount</b> : {{ valuationItem.bankAccountBalance.amount }} {{valuationItem.currency}}</span><br>
                <span><b>Pending Order</b> : {{ valuationItem.countPendingOrder }}</span><br>
                <table class="ui small compact orange celled table">
                    <thead>
                    <tr>
                        <th>Performance</th>
                        <th>Value</th>
                        <th>User ranking</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td> Performance One Day Ago</td>
                        <td>{{ valuationItem.valuation.performanceOneDayAgo.value }}</td>
                        <td>{{ valuationItem.userRanking.userRankingChangeOneDayBeforeLastNAV.value }}</td>
                    </tr>
                    <tr>
                        <td> Performance One Week Ago</td>
                        <td>{{ valuationItem.valuation.performanceOneWeekAgo.value }}</td>
                        <td>{{ valuationItem.userRanking.userRankingChangeOneWeekBeforeLastNAV.value }}</td>
                    </tr>
                    <tr>
                        <td> Performance One Month Ago</td>
                        <td>{{ valuationItem.valuation.performanceOneMonthAgo.value }}</td>
                        <td>{{ valuationItem.userRanking.userRankingChangeOneMonthBeforeLastNAV.value }}</td>
                    </tr>
                    <tr>
                        <td> Performance One Year Ago</td>
                        <td>{{ valuationItem.valuation.performanceOneYearAgo.value }}</td>
                        <td>{{ valuationItem.userRanking.userRankingChangeOneYearBeforeLastNAV.value }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'semantic-ui-vue2';
import { mapGetters } from 'vuex';

export default {
    components: {
        'semantic-ui-modal': Modal
    },
    data() {
        return {
            isLoading: false,
            valuations:  {
                valuation: null,
            },
            selectedValuation: null,
            shouldShowModal: false,
            shouldShowLoader: false
        };
    },
    computed: {
        ...mapGetters({
            selectedCalendarDate: 'getSelectedCalendarDate'
        })
    },
    watch: {
        selectedCalendarDate(date) {
            this.isLoading = true;
            const email = localStorage.getItem('email');
            const gameSlug = localStorage.getItem('gameSlug');
            this.$http.get(`ranking/${gameSlug}/${email}/${date.year()}-${date.format('MM')}-${date.format('DD')}`).then(response => {
                let lastPerformance = 0;
                let valuationBody = response.body;

                lastPerformance = valuationBody.userRanking.lastNAVUserRanking.position.value;
                this.$emit('performancesCountChanged', lastPerformance);
                this.isLoading = false;
                this.valuations.valuation = valuationBody;
            });
        }
    }
}
</script>

<style scoped>
.meal-wrapper {
    margin-bottom: 14px;
}
.centered {
    text-align: center;
}
.modal .header p {
    text-align: center;
}
.modal .header .icon {
    float: none;
    display: block;
    width: auto;
    height: auto;
    line-height: 1;
    padding: 0;
    font-size: 3em;
    margin: 0 auto .5rem;
    opacity: 1;
    vertical-align: middle;
}
</style>
