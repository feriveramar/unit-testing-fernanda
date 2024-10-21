import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrelationComponent } from './correlation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReadFileService } from './../../classes/readFile';
//import { ReadFileService } from '../classes/readFile';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CorrelationComponent],
      providers: [ReadFileService]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return RXY approximately 0.9545 with the dataset x.txt ([130,650,99,150,128,302,95,945,368,961])  and y2.txt ([186,699,132,272,291,331,199,1890,788,1601])', async () => {
    const result = await component.RXY('assets/x.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(0.9545, 2);
  });

  it('Should return RR approximately 0.9111 with the dataset x.txt ([130,650,99,150,128,302,95,945,368,961]) and y2.txt ([186,699,132,272,291,331,199,1890,788,1601])', async () => {
    const result = await component.RR('assets/x.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(0.9111, 2);
  });

  it('Should return RXY approximately 0.9333 with the dataset x.txt ([130,650,99,150,128,302,95,945,368,961]) and y3.txt ([15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2])', async () => {
    const result = await component.RXY('assets/x.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(0.9333, 2);
  });

  it('Should return RR approximately 0.8711 with the dataset x.txt ([130,650,99,150,128,302,95,945,368,961]) and y3.txt ([15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2])', async () => {
    const result = await component.RR('assets/x.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(0.8711, 2);
  });

  it('Should return RXY approximately 0.9631 with the dataset y1.txt ([163,765,141,166,137,355,136,1206,433,1130]) and y2.txt ([186,699,132,272,291,331,199,1890,788,1601])', async () => {
    const result = await component.RXY('assets/y1.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(0.9631, 2);
  });

  it('Should return RR approximately 0.9276 with the dataset y1.txt ([163,765,141,166,137,355,136,1206,433,1130]) and y2.txt ([186,699,132,272,291,331,199,1890,788,1601])', async () => {
    const result = await component.RR('assets/y1.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(0.9276, 2);
  });

  it('Should return RXY approximately 0.9480 with the dataset y1.txt ([163,765,141,166,137,355,136,1206,433,1130]) and y3.txt ([15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2])', async () => {
    const result = await component.RXY('assets/y1.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(0.9480, 2);
  });

  it('Should return RR approximately 0.8988 with the dataset y1.txt ([163,765,141,166,137,355,136,1206,433,1130]) and y3.txt ([15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2])', async () => {
    const result = await component.RR('assets/y1.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(0.8988, 2);
  });

});