<template>
  <div class="about">
    <PieChart label="Label of a chart" :pieData="pieData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PieChart from "@/components/PieChart.vue"; // @ is an alias to /src

export default defineComponent({
  name: "About",
  components: {
    PieChart
  },
  data() {
    return {
      pieData: [
        { color: "#0B6487", value: 30 },
        { color: "#9D1F37", value: 30 },
        { color: "#F6931C", value: 40 }
      ]
    };
  }
});
</script>
