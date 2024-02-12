import { HealthProfessionalI } from '../master/master.service.modal';

export const MockData: HealthProfessionalI[] = [
  {
    profession: 'Docter',
    name: 'Barry Hudson',
    address: '3740 W Sylvania Ave',
    workId: 'CER34232',
    speciality: 'Cardiologist',
    availableTimings: [
      {
        time: '11:00AM-1:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '1:00PM-3:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '4:00PM-6:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '7:00PM-8:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '8:00PM-10:00PM',
        date: '10/02/2024',
        booked: false,
      },
    ],
  },
  {
    profession: 'Docter',
    name: 'Larry Dome',
    address: '1260 S Federal Hwy',
    workId: 'RET32477',
    speciality: 'Dermatology',
    availableTimings: [
      {
        time: '11:00AM-1:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '1:00PM-3:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '4:00PM-6:00PM',
        date: '10/02/2024',
        booked: false,
      },
    ],
  },
  {
    profession: 'Docter',
    name: 'Melissa John',
    address: '',
    workId: 'BJF47643',
    speciality: 'Orthopedics',
    availableTimings: [
      {
        time: '11:00AM-1:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '1:00PM-3:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '4:00PM-6:00PM',
        date: '10/02/2024',
        booked: false,
      },
    ],
  },
  {
    profession: 'Nurse',
    name: 'Kelia Atlas',
    address: "St. Jude Children's Research Hospital",
    workId: 'KLD74353',
    speciality: 'Pediatric Nurse',
    availableTimings: [
      {
        time: '11:00AM-1:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '1:00PM-3:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '4:00PM-6:00PM',
        date: '10/02/2024',
        booked: false,
      },
    ],
  },
  {
    profession: 'Nurse',
    name: 'Lorraine Thorrez',
    address: '7001 Sw 87th Ave',
    workId: 'PLO54364',
    speciality: 'Public Health Nurse',
    availableTimings: [
      {
        time: '11:00AM-1:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '1:00PM-3:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '4:00PM-6:00PM',
        date: '10/02/2024',
        booked: false,
      },
    ],
  },
  {
    profession: 'Therapist',
    name: 'Joseph McCullough',
    address: '601 E Rollins St',
    workId: 'LSD34643',
    speciality: 'Psychologist',
    availableTimings: [
      {
        time: '11:00AM-1:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '1:00PM-3:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '4:00PM-6:00PM',
        date: '10/02/2024',
        booked: false,
      },
    ],
  },
  {
    profession: 'Therapist',
    name: 'Benjamin Kaszovitz',
    address: '6343 Penn Ave',
    workId: 'KDF35354',
    speciality: 'Physical Therapist',
    availableTimings: [
      {
        time: '11:00AM-1:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '1:00PM-3:00PM',
        date: '10/02/2024',
        booked: false,
      },
      {
        time: '4:00PM-6:00PM',
        date: '10/02/2024',
        booked: false,
      },
    ],
  },
];
