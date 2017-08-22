export class Material{
  total:number;
  constructor(
  public id:number,
  public name:string,
  public parameter:number,
  public l:number,
  public w:number,
  public t:number,
  public q:number,
  public kg:number,
  public price:number,
  ){}
  public getTotal(){
    this.kg=Math.round(this.t*((this.l/1000)*(this.w/1000))*this.parameter*this.q * 100) / 100
    this.total=this.kg*this.price;
  }
};
