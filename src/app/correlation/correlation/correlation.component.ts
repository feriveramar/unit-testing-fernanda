import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ReadFileService } from './../../classes/readFile';
//import { ReadFileService } from './../../classes/readFile';
import { Correlation } from './../../classes/correlation';

@Component({
  selector: 'app-correlation',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css'],
  providers: [HttpClient, ReadFileService]
})
export class CorrelationComponent {
  readFilex: ReadFileService;
  readFiley: ReadFileService;
  correlation: Correlation;

  constructor(private http: HttpClient, private readFileService: ReadFileService) {
    this.readFilex = new ReadFileService(this.http);
    this.readFiley = new ReadFileService(this.http);
    this.correlation = new Correlation();
  }

  setupCorrelation(fileContentX: string[], fileContentY1: string[]) {
    this.correlation.sumX(fileContentX);
    this.correlation.sumY(fileContentY1);
    this.correlation.sumXY(fileContentX, fileContentY1);
    this.correlation.sumXX(fileContentX);
    this.correlation.sumYY(fileContentY1);
    this.correlation.getAvgX(fileContentX);
    this.correlation.getAvgY(fileContentY1);
  }

  async RXY(data1: string, data2: string): Promise<number> {
    const x = await this.readFilex.ReadFile(data1);
    const y = await this.readFiley.ReadFile(data2);
    this.setupCorrelation(x, y);
    return this.correlation.getRXY();
  }

  async RR(data1: string, data2: string): Promise<number> {
    const x = await this.readFilex.ReadFile(data1);
    const y = await this.readFiley.ReadFile(data2);
    this.setupCorrelation(x, y);
    return this.correlation.getRR();
  }

  
}