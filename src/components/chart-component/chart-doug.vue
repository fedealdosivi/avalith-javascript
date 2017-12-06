<script>
import VueCharts from 'vue-chartjs'
 

export default {
  extends: VueCharts.Doughnut,
  props: ['cardData', 'options'],
  mounted () {
    this.renderChart(this.cardData, this.options);
  }
}
</script>