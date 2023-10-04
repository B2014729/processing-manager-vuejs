<template>
    <div class="w-75 ms-5">
        <bar :data="data" :options="options" />
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
    data() {
        return {
            data: {
                datasets: [{
                    data: [
                        { x: 'Lúa gạo', y: 178567000 },
                        { x: 'Rau', y: 365597090 },
                        { x: 'Củ', y: 74590290 },
                        { x: 'Trái cây', y: 245288000 },

                    ]
                }]
            },
            options: {
                responsive: true
            }
        }
    }
}
</script>