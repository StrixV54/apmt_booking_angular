import { Injectable } from '@angular/core';
// @ts-ignore
import { MockData } from '../mockdata/mockdata';
import { Observable, of } from 'rxjs';
import { HealthProfessionalI, TimingI } from './master.service.modal';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private mockData: HealthProfessionalI[] = [...MockData];

  constructor() {}

  getAllRecords(): Observable<HealthProfessionalI[]> {
    return of(this.mockData);
  }

  getRecordById(workId: string): Observable<HealthProfessionalI> {
    return of(this.mockData.filter((item) => item.workId === workId)[0]);
  }

  getSpecialityList(): Observable<string[]> {
    const data = new Set();
    this.mockData.forEach((item) => data.add(item.speciality));
    return of([...data] as string[]);
  }

  bookAvailableTime(workId: string, time: string): Observable<string> {
    this.mockData = this.mockData.map((person: HealthProfessionalI) => {
      if (person.workId === workId) {
        person.availableTimings = person.availableTimings.map(
          (timing: TimingI) => {
            if (timing.time === time) {
              return { ...timing, booked: true };
            }
            return timing;
          },
        );
      }
      return person;
    });
    // console.log(this.mockData);
    return of('Updated Availability');
  }
}
