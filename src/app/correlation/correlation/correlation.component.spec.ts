import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrelationComponent } from './correlation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReadFileService } from './../../classes/readFile';


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

  it('Should return RXY approximately 0.9545 with the dataset x.txt and y2.txt', async () => {
    const result = await component.RXY('assets/x.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(0.9545, 2);
  });

  it('Should return RR approximately 0.9111 with the dataset x.txt and y2.txt', async () => {
    const result = await component.RR('assets/x.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(0.9111, 2);
  });

  it('Should return RXY approximately 0.9333 with the dataset x.txt and y3.txt', async () => {
    const result = await component.RXY('assets/x.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(0.9333, 2);
  });

  it('Should return RR approximately 0.8711 with the dataset x.txt and y3.txt', async () => {
    const result = await component.RR('assets/x.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(0.8711, 2);
  });

  it('Should return RXY approximately 0.9631 with the dataset y1.txt and y2.txt', async () => {
    const result = await component.RXY('assets/y1.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(0.9631, 2);
  });

  it('Should return RR approximately 0.9276 with the dataset y1.txt and y2.txt', async () => {
    const result = await component.RR('assets/y1.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(0.9276, 2);
  });

  it('Should return RXY approximately 0.9480 with the dataset y1.txt and y3.txt', async () => {
    const result = await component.RXY('assets/y1.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(0.9480, 2);
  });

  it('Should return RR approximately 0.8988 with the dataset y1.txt and y3.txt', async () => {
    const result = await component.RR('assets/y1.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(0.8988, 2);
  });

});
