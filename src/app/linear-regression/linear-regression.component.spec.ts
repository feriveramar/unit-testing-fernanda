import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinearRegressionComponent } from './linear-regression.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReadFileService } from '../classes/readFile';

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;
  let readFileService: ReadFileService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, LinearRegressionComponent],
      providers: [ReadFileService]
    }).compileComponents();

    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    readFileService = TestBed.inject(ReadFileService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return b0 approximately -22.55 with the dataset x.txt([130,650,99,150,128,302,95,945,368,961]) and y2.txt ([186,699,132,272,291,331,199,1890,788,1601])', async () => {
    const result = await component.b0('assets/x.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(-22.55, 2);
  });

  it('Should return b1 approximately 1.7279 with the dataset x.txt ([130,650,99,150,128,302,95,945,368,961]) and y2.txt ([186,699,132,272,291,331,199,1890,788,1601])', async () => {
    const result = await component.b1('assets/x.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(1.7279, 2);
  });

  it('Should return yk approximately 644.429 with the dataset x.txt ([130,650,99,150,128,302,95,945,368,961]) and y2.txt ([186,699,132,272,291,331,199,1890,788,1601]) if x=386', async () => {
    const result = await component.yk('assets/x.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(644.429, 2);
  });

  it('Should return b0 approximately -4.039  with the dataset x.txt ([130,650,99,150,128,302,95,945,368,961]) and y3.txt ([15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2])', async () => {
    const result = await component.b0('assets/x.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(-4.039 , 2);
  });

  it('Should return b1 approximately 0.1681 with the dataset x.txt ([130,650,99,150,128,302,95,945,368,961]) and y3.txt ([15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2])', async () => {
    const result = await component.b1('assets/x.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(0.1681, 2);
  });

  it('Should return yk approximately 60.858 with the dataset x.txt ([130,650,99,150,128,302,95,945,368,961]) and y3.txt ([15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]) if x=386', async () => {
    const result = await component.yk('assets/x.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(60.858, 2);
  });

  it('Should return b0 approximately -23.92 with the dataset y1.txt ([163,765,141,166,137,355,136,1206,433,1130]) and y2.txt ([186,699,132,272,291,331,199,1890,788,1601])', async () => {
    const result = await component.b0('assets/y1.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(-23.92, 2);
  });

  it('Should return b1 approximately 1.43097 with the dataset y1.txt ([163,765,141,166,137,355,136,1206,433,1130]) and y2.txt ([186,699,132,272,291,331,199,1890,788,1601])', async () => {
    const result = await component.b1('assets/y1.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(1.43097, 2);
  });

  it('Should return yk approximately 528.4294 with the dataset y1.txt ([163,765,141,166,137,355,136,1206,433,1130]) and y2.txt ([186,699,132,272,291,331,199,1890,788,1601]) if x=386', async () => {
    const result = await component.yk('assets/y1.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(528.4294, 2);
  });

  
  it('Should return b0 approximately -4.604 with the dataset y1.txt ([163,765,141,166,137,355,136,1206,433,1130]) and y3.txt ([15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2])', async () => {
    const result = await component.b0('assets/y1.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(-4.604, 2);
  });

  it('Should return b1 approximately 0.16064 with the dataset y1.txt ([163,765,141,166,137,355,136,1206,433,1130]) and y3.txt ([15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2])', async () => {
    const result = await component.b1('assets/y1.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(0.140164
      , 2);
  });

  it('Should return yk approximately 49.4994 with the dataset y1.txt ([163,765,141,166,137,355,136,1206,433,1130]) and y3.txt ([15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]) if x=386', async () => {
    const result = await component.yk('assets/y1.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(49.4994, 2);
  });

});