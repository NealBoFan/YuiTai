import { Component,Input ,OnInit} from '@angular/core';
import {Material} from '../model/material';
@Component({
  selector: 'material-pieces',
  templateUrl: '../view/material-pieces.component.html',
  styleUrls: ['../app.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class materialPiecesComponent implements OnInit{
  
  title = '敔泰';
  selectedMaterial:Material;
  ngOnInit():void{}
  Materials:Material[]=[
    new Material(1,'黑鐵SS41',7.85,null,null,null,1,null,null)
    ,new Material(2,'白鐵板SUS304',7.98,null,null,null,1,null,null)
    ,new Material(3,'白鐵板SUS316',7.98,null,null,null,1,null,null)
    ,new Material(4,'白鐵板SUS316L',7.98,null,null,null,1,null,null)
    ,new Material(5,'銅板',8.9,null,null,null,1,null,null)
    ,new Material(6,'6061鋁板',3,null,null,null,1,null,null)
    ,new Material(7,'鎳塊',8.902,null,null,null,1,null,null)
    ,new Material(8,'紅銅塊',8.902,null,null,null,1,null,null)
    ,new Material(9,'錫鉛板',5.75,null,null,null,1,null,null)
    ,new Material(10,'磷銅板',8.5,null,null,null,1,null,null)
    ,new Material(11,'鈦板',4.51,null,null,null,1,null,null)
    ,new Material(12,'鉛板',11.37,null,null,null,1,null,null)];
  onSelect(material:Material):void{
    this.selectedMaterial=material;
  }
}


