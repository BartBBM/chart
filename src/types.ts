export class PieDataPoint {
  color: string;
  value: number;

  constructor() {
    this.color = "#000000";
    this.value = 0;
  }
}

export class PieData {
  pieDataPoints: Array<PieDataPoint>;

  constructor() {
    this.pieDataPoints = [];
  }
}
