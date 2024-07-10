import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  lampColor: string = 'off';
  apiUrl: string = environment.apiRepl;
  intervalId: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.startFetchingLampColor();
  }

  ngOnDestroy() {
    this.stopFetchingLampColor();
  }

  startFetchingLampColor() {
    this.fetchLampColor();
    this.intervalId = setInterval(() => {
      this.fetchLampColor();
    }, 1000);
  }

  stopFetchingLampColor() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  fetchLampColor() {
    console.log('Fetching from URL:', this.apiUrl);
    this.http.get<any>(this.apiUrl)
      .subscribe(
        data => {
          if (data && data.command) {
            this.updateLampColor(data.command);
          }
        },
        error => {
          console.error('Error fetching lamp color:', error);
        }
      );
  }

  updateLampColor(command: string) {
    switch (command) {
      case 'Nyalakan Lampu Merah':
        this.lampColor = 'red';
        break;
      case 'Nyalakan Lampu Kuning':
        this.lampColor = 'yellow';
        break;
      case 'Nyalakan Lampu Hijau':
        this.lampColor = 'green';
        break;
      case 'Matikan Lampu':
        this.lampColor = 'off';
        break;
      default:
        this.lampColor = 'off';
    }
  }

  getLampStatus() {
    return this.lampColor;
  }
}
