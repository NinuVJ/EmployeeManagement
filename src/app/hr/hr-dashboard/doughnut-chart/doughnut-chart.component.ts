import { Component } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent {
  chartOptions = {
	  animationEnabled: true,
	  title:{
		text: "Employees"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 82, name: "Active Employees" },
		  { y: 8, name: "Inactive Employees" },
		  { y: 12, name: "" }
		]
	  }]
	}

}
