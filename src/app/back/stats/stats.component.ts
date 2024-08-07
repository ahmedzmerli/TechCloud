import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../service/evenement.service';
import { forkJoin, map } from 'rxjs';
import { EventStatistics } from '../Models/EventStatistics.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  eventStatistics: any;
  myChart: any;
  myChartBar: any;
  events: Event[] = [];
  event: Event = {} as Event;
  constructor(private http : HttpClient ,private evenementService:EvenementService){}

  ngOnInit(){
  
    this.fetchEventStatistics();
}

fetchEventStatistics(): void {
  this.getParticipationStatisticsWithEventNames()
    .subscribe(
      (statistics: any) => {
        this.eventStatistics = statistics;
        this.generateCharts();
      },
      (error) => {
        console.error('Error fetching event statistics:', error);
      }
    );
}

getParticipationStatisticsWithEventNames() {
  return forkJoin([
    this.evenementService.getParticipationStatistics(),
    this.evenementService.getAllEvenement() // Supposons que vous avez un service pour récupérer tous les événements
  ]).pipe(
    map(([statistics, events]) => {
      const statisticsWithEventNames: EventStatistics = {};
      events.forEach((event: { nom: string ; id: number; }) => {
        statisticsWithEventNames[event.nom] = statistics[event.id];
      });
      return statisticsWithEventNames;
    })
  );
}





generateCharts(): void {
  const labels = Object.keys(this.eventStatistics);
  const data = Object.values(this.eventStatistics);

  // Générer le graphique en cercle (cercle)
  const ctx = document.getElementById('eventChart') as HTMLCanvasElement;
  this.myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Participations',
        data: data,
        backgroundColor: [
          'rgba(186, 176, 175, 0.8)', //  
          'rgba(219, 32, 18, 0.8)',   //  
          'rgba(245, 79, 39, 0.8)',    //  
          'rgba(246, 159, 153, 0.8)',   // 
          'rgba(0, 0, 128, 0.6)',      // 
          'rgba(143, 115, 113, 0.8)'     // 
        ],
        borderColor: [
          'rgba(186, 176, 175, 2)',   // 
          'rgba(219, 32, 18, 2)',     //
          'rgba(245, 79, 39, 2)',      // 
          'rgba(246, 159, 153, 2)',     // 
          'rgba(0, 0, 128, 2)',        // 
          'rgba(143, 115, 113, 2)'       // 
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Event Participation Statistics',
          font: {
            size: 16
          }
        }
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        }
      },
      scales: {
        x: {
          ticks: {
            maxRotation: 0
          }
        }
      }
    }
    
  });

  // Générer le graphique en barres (barres)
  const ctxBar = document.getElementById('eventChart2') as HTMLCanvasElement;
  this.myChartBar = new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Participations',
        data: data.map(value => value as number),
        backgroundColor: [
          'rgba(186, 176, 175, 0.8)', //  
          'rgba(219, 32, 18, 0.8)',   //  
          'rgba(245, 79, 39, 0.8)',    //  
          'rgba(246, 159, 153, 0.8)',   // 
          'rgba(0, 0, 128, 0.6)',      //  
          'rgba(143, 115, 113, 0.8)'     // 
        ],
        borderColor: [
          'rgba(186, 176, 175, 2)',   //  
          'rgba(219, 32, 18, 2)',     //  
          'rgba(245, 79, 39, 2)',      //  
          'rgba(246, 159, 153, 2)',     // 
          'rgba(0, 0, 128, 2)',        //  
          'rgba(143, 115, 113, 2)'       // 
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Event Participation Statistics',
          font: {
            size: 16
          }
        }
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        }
      },
      scales: {
        x: {
          ticks: {
            maxRotation: 0
          }
        }
      }
    }
  });
}

 
}
