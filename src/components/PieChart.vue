<template>
  <div class="pie-chart" :style="pieStyle">{{ label }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PieChart",
  props: {
    label: {
      type: String,
      default: ""
    },
    pieData: []
  },
  computed: {
    pieStyle() {
      return { background: "conic-gradient()" };
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
}
</style>
