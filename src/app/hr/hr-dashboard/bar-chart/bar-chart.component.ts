import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  chart: any;
	
  chartOptions = {
    title:{
      text: "Leave Status"
    },
    animationEnabled: true,
    axisY: {
      includeZero: true,
      suffix: ""
    },
    data: [{
      type: "bar",
      indexLabel: "{y}",
      yValueFormatString: "#,### employees",
      dataPoints: [
        { label: "Web Developers", y: 15 },
        { label: "App Developers", y: 20 },
        { label: "Data Analyst", y: 24 },
        { label: "Test Engineer", y: 29 },
        { label: "Marketing", y: 73 }
      ]
    }]
  }

}
