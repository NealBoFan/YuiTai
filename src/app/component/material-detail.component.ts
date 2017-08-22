import {Component,Input} from '@angular/core';
import {Material} from '../model/material';

@Component({
    selector:'material-detail',
    templateUrl: '../view/material-detail.component.html',
    styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class materialDetailComponent{
  @Input() material:Material;

}
