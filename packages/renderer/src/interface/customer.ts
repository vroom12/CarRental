export interface CustomerItem {
  _id: string;
  name: string;
  phone: string;
  address: string;
  gender: number;
  integral: number;
}

export interface leaseRecordType {
  _id: string;
  customer_id: string;
  car_id: string;
  rent_date: Date;
  return_date: Date;
  total_days: number;
  rental_rate: number;
  late_fee: number;
  total_rental_fee: number;
}
