import { Component, OnInit } from '@angular/core';
import { LeaveDataService } from 'src/app/core/services/leave-data.service';
import { LoginService } from 'src/app/core/services/login.service';
import { CanvasJS } from '@canvasjs/angular-charts';
import {formatDate} from '@angular/common';

@Component({
	selector: 'app-doughnut-chart',
	templateUrl: './doughnut-chart.component.html',
	styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
	onLeave: number = 0;
	present: number = 0;
	currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');;

	constructor(private leave: LeaveDataService, private employee: LoginService) {}
	ngOnInit(): void {
		this.getEmployees();
	}
	getEmployees() {
		
		console.log(this.currentDate);
		
		this.leave.getLeaves().subscribe(leaves => {
			leaves.forEach((element: any) => {
			if (element.status === 'Approved' && element.leaveFrom === this.currentDate ) {
				this.onLeave++;
			  }
			} ); 
			this.doughnutChart();
		});
		this.employee.getId().subscribe(employees => {
			this.present = employees.length - this.onLeave;
			this.doughnutChart();
		});
	}

	doughnutChart() {
		var chart = new CanvasJS.Chart("chartContainer1", {
			animationEnabled: true,
			title: {
				text: "Employees"
			},
			data: [
				{
					type: "doughnut",
					// yValueFormatString: "#,###.##'%'",
					indexLabel: "{name}",
					dataPoints: [
						{ y: this.present, name: "Active Employees" },
						{ y: this.onLeave, name: "Inactive Employees" }
					]
				}
			]
		});
		chart.render();
	}
}
