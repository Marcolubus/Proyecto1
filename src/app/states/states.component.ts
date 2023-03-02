import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { secDataModel } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'],
})
export class StatesComponent implements OnInit {
  constructor(public dataService: DataService,public router: Router) {}

  headers = [
    'checkTimeEt',
    'commercialScore',
    'dataQualityGrade',
    'date',
    'dateChecked',
    'dateModified',
    'death',
    'deathConfirmed',
    'deathIncrease',
    'deathProbable',
    'fips',
    'grade',
    'hash',
    'hospitalized',
    'hospitalizedCumulative',
    'hospitalizedCurrently',
    'hospitalizedDischarged',
    'hospitalizedIncrease',
    'inIcuCumulative',
    'inIcuCurrently',
    'lastUpdateEt',
    'negative',
    'negativeIncrease',
    'negativeRegularScore',
    'negativeScore',
    'negativeTestsAntibody',
    'negativeTestsPeopleAntibody',
    'negativeTestsViral',
    'onVentilatorCumulative',
    'onVentilatorCurrently',
    'pending',
    'posNeg',
    'positive',
    'positiveCasesViral',
    'positiveIncrease',
    'positiveScore',
    'positiveTestsAntibody',
    'positiveTestsAntigen',
    'positiveTestsPeopleAntibody',
    'positiveTestsPeopleAntigen',
    'positiveTestsViral',
    'probableCases',
    'recovered',
    'score',
    'state',
    'total',
    'totalTestEncountersViral',
    'totalTestResults',
    'totalTestResultsIncrease',
    'totalTestResultsSource',
    'totalTestsAntibody',
    'totalTestsAntigen',
    'totalTestsPeopleAntibody',
    'totalTestsPeopleAntigen',
    'totalTestsPeopleViral',
    'totalTestsViral',
  ];
  searchValue = '';
  page = 1;
  pageSize = 4;
  totalRecords: string = '';
  user = '';
  maxSize: string = '';
  allData: secDataModel[] = [];
  searchData: secDataModel[] = [];
  value = '';
  valueRecord = '';
  valueNeg = '';
  valueNegtive = '';
  deaths: number[] = [];
  recoverds: any[] = [];
  posNegs: string[] = [];
  negitives: number[] = [];

  ngOnInit(): void {
    this.dataService.user.subscribe(res => {
      this.user = res
    })
    this.dataService.getSecData().subscribe(res => {
      console.log('the res ', res);
      this.allData = res;
      this.searchData = res;
      // this.allData.map((value) => {
      //   this.deaths.push(value.death);
      //   this.recoverds.push(value.dateChecked);
      //   this.posNegs.push(value.fips);
      // });
    })
  }
  passValue(event: any) {
    if (!event) {
      this.dataService.getSecData().subscribe((res) => {
        this.searchData = res;
      });
    }
    
    console.log(
      (this.searchData = this.allData.filter((value) => value.death == event))
    );
  }
  recordValue(event: any) {
    if (!event) {
      this.dataService.getSecData().subscribe((res) => {
        this.searchData = res;
      });
    }
    
    console.log(
      (this.searchData = this.allData.filter((value) => value.dateChecked == event))
    );
  }

  postNegValue(event: any) {
    if (!event) {
      this.dataService.getSecData().subscribe((res) => {
        this.searchData = res;
      });
    }
    
    console.log(
      (this.searchData = this.allData.filter((value) => value.fips == event))
    );
  }
  logout(){
    this.router.navigate(['']);
  }
}
