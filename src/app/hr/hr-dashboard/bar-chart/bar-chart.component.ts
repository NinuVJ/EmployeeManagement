import { Component, OnInit } from '@angular/core';
import { LeaveDataService } from 'src/app/core/services/leave-data.service';
import { CanvasJS } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  leaveApplications: any;
  app: number = 0;
  web: number = 0;
  designer: number = 0;
  analyst: number = 0;

  constructor( private leave: LeaveDataService) { }

  ngOnInit(): void {
    this.getLeaveApplications();
  }

  getLeaveApplications() {
    this.leave.getLeaves().subscribe(leaves => {
      leaves.forEach((element: any) => {

        if (element.designation === 'App Developer' && element.status === 'Approved') {
          this.app++;
        } else if (element.designation === 'Web Developer'  && element.status === 'Approved') {
          console.log(element, '2');
          this.web++;
        } else if (element.designation === 'UI/UX Designer'  && element.status === 'Approved') {
          this.designer++;
        } else if (element.designation === 'Data Analyst'  && element.status === 'Approved') {
          this.analyst++;
        }
      });
      this.barChart();
    });
  }
  barChart() {
    var chart = new CanvasJS.Chart("chartContainer", {
      title: {
        text: "Leave Status"
      },
      animationEnabled: true,
      axisY: {
        includeZero: true,
        suffix: ""
      },
      data: [
        {
          type: "bar",
          indexLabel: "{y}",
          yValueFormatString: "#,### employees",
          dataPoints: [
            { label: "Web Developers", y: this.web },
            { label: "App Developers", y: this.app },
            { label: "Data Analyst", y: this.analyst },
            { label: "UI/Ux Designer", y: this.designer }
          ]
        }
      ]
    });
    chart.render();
  }

}
