import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit{

  /*pieChartData:  ChartData<ChartType, number[], string> | undefined;
  pieChartLabels: string[] = [];
  chartReady: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8090/post/likesCountPerPost').subscribe(data => {
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
    });}*/
    doughnutChartData: ChartData<ChartType, number[], string> | undefined;
  doughnutChartLabels: string[] = [];
  chartReady: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8090/post/likesCountPerPost').subscribe(data => {
      this.doughnutChartLabels = Object.keys(data);
      this.doughnutChartData = {
        labels: this.doughnutChartLabels,
        datasets: [
          {
            data: Object.values(data),
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
              'rgba(255, 0, 255, 0.5)',
              'rgba(0, 255, 255, 0.5)',
              'rgba(0, 0, 255, 0.5)',
              'rgba(255, 0, 0, 0.5)'
            ],
            hoverBackgroundColor: [
              'rgba(255,99,132,0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 0, 255, 0.8)',
              'rgba(0, 255, 255, 0.8)',
              'rgba(0, 0, 255, 0.8)',
              'rgba(255, 0, 0, 0.8)'
            ]
          },
        ],
      };
      this.chartReady = true;
    });
  }
}