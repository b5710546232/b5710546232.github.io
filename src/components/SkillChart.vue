<template lang="html">
  <div>
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  data () {
    return {
      myChart:null
    }
  },
  computed: {},
  mounted () {
    var ctx = document.getElementById("myChart")
    // console.log('ctx ',ctx);
    this.myChart = new Chart(ctx,{  type: 'radar',
    data: {
      labels: ["Web application", "Game Development", "Exercise", "Pixel Art", "Mobile Application"],
      datasets: [
        {
          label:"my-skill" ,
          backgroundColor: "rgba(52, 203, 194, 0.2)",
          borderColor: "rgba(14, 100, 108, 1)",
          pointBackgroundColor: "rgba(45, 166, 173, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: [70, 75, 60, 65, 50]
        },
      ]
    },
    scaleFontSize: 16,
    options: {
      responsive: true,
   maintainAspectRatio: true,
      legend:{
        display:false
      },
      scale: {
        ticks: {
          min:0,
          max:100,
          showLabelBackdrop	:false,
          maxTicksLimit:1
        },
        // pointLabels:{
        //   fontSize:20,
        //   padding:100
        // },
        angleLines:{
          // display:false
        }
      },
    }
  })
  this.myChart.reDraw();
},
methods: {},
components: {}
}
</script>
<style >
</style>
