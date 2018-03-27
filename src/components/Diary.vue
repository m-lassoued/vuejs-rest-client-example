<template>
    <div class="row">
        <div class="four wide column">
            <app-performances-counter :lastPerformances="lastPerformances"></app-performances-counter>
            <app-calendar></app-calendar>
        </div>
        <div class="twelve wide column">
            <app-valuation
                    @performancesCountChanged="onPerformancesCountChanged"
            >
            </app-valuation>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
import Calendar from './diary/Calendar.vue';
import PerformancesCounter from './diary/PerformancesCounter.vue';
import ValuationDiary from './diary/ValuationDiary.vue';

export default {
    components: {
        'app-calendar': Calendar,
        'app-performances-counter': PerformancesCounter,
        'app-valuation': ValuationDiary
    },
    data() {
        return {
            lastPerformances: 0
        }
    },
    computed: {
        ...mapGetters({
            selectedCalendarDate: 'getSelectedCalendarDate'
        })
    },
    methods: {
        onPerformancesCountChanged(lastPerformances) {
            this.lastPerformances = lastPerformances;
        }
    },
    activated() {
        // simulate date change, in order to trigger re-rendering of calendar and valuation
        this.$store.commit('setSelectedCalendarDate', moment(this.selectedCalendarDate));
    }
}
</script>
