import { DecimalPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { dataModel } from './data.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
	
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public dataService: DataService) {

  }
  headers = [
    'date',
    'dateChecked',
    'death',
    'deathIncrease',
    'hospitalized',
    'hospitalizedCumulative',
    'hospitalizedCurrently',
    'hospitalizedIncrease',
    'inIcuCumulative',
    'inIcuCurrently',
    'lastModified',
    'negative',
    'negativeIncrease',
    'onVentilatorCumulative',
    'onVentilatorCurrently',
    'pending',
    'posNeg',
    'positive',
    'positiveIncrease',
    'recovered',
    'states',
    'total',
    'totalTestResults',
    'totalTestResultsIncrease',
    'CRUD',
  ];

  maxSize:string = ''
  allData: dataModel[] = [];
  searchData: dataModel[] = [];
  insertData = new dataModel();
  searchValue = '';
  value = '';
  valueRecord = ''
  valueNeg = ''
  valueNegtive = ''
  deaths: number[] = [];
  recoverds: any[] = [];
  posNegs: number[] = [];
  negitives: number[] = [];
  collectionSize = 0
  page = 1;
	pageSize = 4;
  totalRecords:string = ''

  ngOnInit(): void {
 
  }
  title = 'proyecto';

  onDelete(data: dataModel) {
    
    this.dataService.deletData(data.hash).subscribe((res) => {
      
    });
  }
  onUpdate(data: dataModel) {
    
  }

  passValue(event: any) {
    if (!event) {
      this.dataService.getData().subscribe((res) => {
        this.searchData = res;
      });
    }
   
    console.log(
      (this.searchData = this.allData.filter((value) => value.death == event))
    );
  }
  recordValue(event: any) {
    if (!event) {
      this.dataService.getData().subscribe((res) => {
        this.searchData = res;
      });
    }
    
    console.log(
      (this.searchData = this.allData.filter((value) => value.death == event))
    );
  }

  onInsert() {
    // this.insertData?.date = 1123232
    this.insertData.date = 20210309;
    this.insertData.dateChecked = '2021-03-07T24:00:00Z';
    this.insertData.death = 515151;
    this.insertData.deathIncrease = 842;
    // this.insertData. hash= 'a80d0063822e251249fd9a44730c49cb23defd83';
    this.insertData.hospitalized = 776361;
    this.insertData.hospitalizedCumulative = 776361;
    this.insertData.hospitalizedCurrently = 40199;
    this.insertData.hospitalizedIncrease = 726;
    this.insertData.inIcuCumulative = 45475;
    this.insertData.inIcuCurrently = 8134;
    this.insertData.lastModified = '2021-03-07T24:00:00Z';
    this.insertData.negative = 74582825;
    this.insertData.negativeIncrease = 131835;
    this.insertData.onVentilatorCumulative = 4281;
    this.insertData.onVentilatorCurrently = 2802;
    this.insertData.pending = 11808;
    this.insertData.posNeg = 0;
    this.insertData.positive = 28756489;
    this.insertData.positiveIncrease = 41835;
    this.insertData.recovered = 'null';
    this.insertData.states = 56;
    this.insertData.total = 0;
    this.insertData.totalTestResults = 363825123;
    this.insertData.totalTestResultsIncrease = 1170059;
    this.dataService.insertData(this.insertData);
  }
}
