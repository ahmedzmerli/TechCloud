import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; 
import { ChartData, ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  pieChartData:  ChartData<ChartType, number[], string> | undefined;
  pieChartLabels: string[] = [];
  chartReady: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8090/certificat/certificat/module-count').subscribe(data => {
      this.pieChartLabels = Object.keys(data);
      this.pieChartData = {
        labels: this.pieChartLabels,
        datasets: [
          {
            data: Object.values(data),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56' , 'grey'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56' , 'grey'],
          },
        ],
      };
      this.chartReady = true;
    });}
}