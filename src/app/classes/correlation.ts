export class Correlation {
    private dblSumX: number = 0;
    private dblSumY: number = 0;
    private dblSumXY: number = 0;
    private dblSumXX: number = 0;
    private dblSumYY: number = 0;
    private dblAvgX: number = 0;
    private dblAvgY: number = 0;
    private intN: number = 0;
    private dblRR: number = 0;
    private dblRXY: number = 0;
  
    constructor() {}
  
    public sumX(datalistX: string[]): number {
      this.dblSumX = 0;
      datalistX.forEach(x => {
        this.dblSumX += parseFloat(x);
      });
      return this.dblSumX;
    }
  
    public sumY(datalistY: string[]): number {
      this.dblSumY = 0;
      datalistY.forEach(y => {
        this.dblSumY += parseFloat(y);
      });
      return this.dblSumY;
    }
  
    public sumXY(datalistX: string[], datalistY: string[]): number {
      this.dblSumXY = 0;
      for (let i = 0; i < datalistX.length; i++) {
        this.dblSumXY += parseFloat(datalistX[i]) * parseFloat(datalistY[i]);
      }
      return this.dblSumXY;
    }
  
    public sumXX(datalistX: string[]): number {
      this.dblSumXX = 0;
      datalistX.forEach(x => {
        this.dblSumXX += parseFloat(x) * parseFloat(x);
      });
      return this.dblSumXX;
    }
  
    public sumYY(datalistY: string[]): number {
      this.dblSumYY = 0;
      datalistY.forEach(y => {
        this.dblSumYY += parseFloat(y) * parseFloat(y);
      });
      return this.dblSumYY;
    }
  
    public getAvgX(datalistX: string[]): number {
      this.dblAvgX = 0;
      this.intN = datalistX.length;
      this.dblAvgX = this.dblSumX / this.intN;
      return this.dblAvgX;
    }
  
    public getAvgY(datalistY: string[]): number {
      this.dblAvgY = 0;
      this.intN = datalistY.length;
      this.dblAvgY = this.dblSumY / this.intN;
      return this.dblAvgY;
    }
  
    public getRXY(): number {
      this.dblRXY = (this.intN * this.dblSumXY - this.dblSumX * this.dblSumY) /
                    Math.sqrt((this.intN * this.dblSumXX - Math.pow(this.dblSumX, 2)) *
                              (this.intN * this.dblSumYY - Math.pow(this.dblSumY, 2)));
      this.dblRXY = parseFloat(this.dblRXY.toFixed(4));
      return this.dblRXY;
    }
  
    public getRR(): number {
      this.dblRR = Math.pow(this.getRXY(), 2);  // Asegúrate de llamar a getRXY() primero
      this.dblRR = parseFloat(this.dblRR.toFixed(4));
      return this.dblRR;
    }
  }
  