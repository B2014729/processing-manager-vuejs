<template>
    <div class="w-75 ms-5 mb-4">
        <bar :data="data" :options="options" />
        <p class="text-center">{{ description }}</p>
    </div>
</template>
  
<script>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
    components: {
        bar: Bar
    },
    props: {
        value: {
            typeof: Array,
            require
        },
        description: {
            typeof: String,
            default: '',
        }
    },
    data() {
        return {
            data: {},
            options: {
                responsive: true
            }
        }
    },


    created() {
        this.data = {
            datasets: [{
                data: this.value,
            }]
        };
    }
}
</script>