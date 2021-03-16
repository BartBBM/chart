<template>
  <div class="pie-chart" :style="pieStyle">{{ label }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PieData } from "../types";

export default defineComponent({
  name: "PieChart",
  props: {
    label: {
      type: String,
      default: ""
    },
    pieData: Object as PropType<PieData>
  },
  computed: {
    pieStyle() {
      let sum = 0;
      const styles: any = this.pieData?.pieDataPoints.map(
        piePart => `${piePart.color} 0 ${(sum += piePart.value)}%`
      );

      return { background: "conic-gradient(" + styles.join(",") + ")" };
    }
  }
});
</script>

<style lang="scss" scoped>
.pie-chart {
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 5px solid #000000;
  // background: conic-gradient(#002fff 0 30%, #fe0000 0 70%, #00fe00 0 100%);
}
</style>
