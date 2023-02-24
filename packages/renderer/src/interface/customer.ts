export interface CustomerItem {
  _id: string;
  name: string;
  address: string;
  phone: string;
  drivingRecord: drivingRecordType[];
}

export interface drivingRecordType {
  startTime: string;
  endTime: string;
  carType: string;
  carNumber: string;
  carColor: string;
}
