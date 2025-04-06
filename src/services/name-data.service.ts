import { Injectable } from '@angular/core';
import { NameCheckerResponse } from '../interfaces/name-checker-response';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameDataService {

  private nameDataSource = new BehaviorSubject<NameCheckerResponse | null>(null);
  nameDataService$ = this.nameDataSource.asObservable();


  nameData?: NameCheckerResponse;

  setNextData(data: NameCheckerResponse) {
    this.nameData = data;
    data.status;
    console.log(
      this.nameData?.error,
      this.nameData?.status,
      this.nameData?.msg
    );
    if (this.nameData?.msg === 'id_not_found' || this.nameData?.error) {
      alert('Invalid user ID!');
    }
  }
}
