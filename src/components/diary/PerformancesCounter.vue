<template>
    <div>
        <h2>Last NAV ranking</h2>
        <div class="ui statistics">
            <div class="statistic">
                <div class="value">
                    <i class="hashtag icon"></i>
                    <app-animated-number :number="lastPerformances"></app-animated-number>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AnimatedNumber from './AnimatedNumber.vue';

export default {
    props: {
        lastPerformances: {
            type: Number,
            required: true,
            default: 0
        }
    },
    components: {
        'app-animated-number': AnimatedNumber
    }
}
</script>
