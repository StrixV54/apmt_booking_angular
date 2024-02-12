export interface TimingI {
  date: string;
  time: string;
  booked: boolean;
}

export interface HealthProfessionalI {
  profession: string;
  name: string;
  address: string;
  workId: string;
  speciality: string;
  availableTimings: TimingI[];
}
