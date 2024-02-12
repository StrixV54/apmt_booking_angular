import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master/master.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HealthProfessionalI } from '../../service/master/master.service.modal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  healthProfessional!: HealthProfessionalI[];
  filterList!: HealthProfessionalI[];
  // Have 'None' as default selected
  specialityList: string[] = ['None'];

  constructor(
    private masterService: MasterService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.masterService.getAllRecords().subscribe((data) => {
      this.healthProfessional = data;
      this.filterList = data;
    });
    this.masterService.getSpecialityList().subscribe((data) => {
      this.specialityList = [...this.specialityList, ...data];
    });
  }

  // Move to booking page 
  onbookTime(workId: string, time: string) {
    this.router.navigate(['/booking'], { queryParams: { workId, time } });
  }

  // Filter the list by choosen speciality
  filterBySpeciality(event: Event) {
    const element = event.target as HTMLSelectElement;
    if (element.value === 'None') this.filterList = this.healthProfessional;
    else
      this.filterList = this.healthProfessional.filter(
        (item) => item.speciality === element.value,
      );
  }
}
