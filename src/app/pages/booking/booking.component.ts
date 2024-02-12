import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from '../../service/master/master.service';
import { CommonModule, Location } from '@angular/common';
import { HealthProfessionalI } from '../../service/master/master.service.modal';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent implements OnInit {
  healthProfessional!: HealthProfessionalI | null;
  time!: string;
  workId!: string;
  bookingForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    remark: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private masterService: MasterService,
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.time = params.get('time')!;
      this.workId = params.get('workId')!;
    });
    // this.workId = this.route.snapshot.queryParamMap.get('workId')!;
    // this.time = this.route.snapshot.queryParamMap.get('time')!;
    this.masterService.getRecordById(this.workId).subscribe((data) => {
      this.healthProfessional = data;
    });
  }

  onSubmit() {
    console.log(this.bookingForm.valid);
    if (!this.bookingForm.valid) {
      this.bookingForm?.markAllAsTouched();
    } else {
      console.log('first');
      this.masterService.bookAvailableTime(this.workId, this.time);
      this.router.navigateByUrl('/home');
    }
  }

  onCancel() {
    this.location.back();
  }
}
