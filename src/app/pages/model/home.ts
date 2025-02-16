export interface location {
  id: number;
  image: string;
  text: string;
  class: string;
}
export interface plans {
  id: number;
  class: string;
  image: string;
  Timeperiod: string;
  name: string;
  text: string;
  price: number;
  descound?: number;
}
export interface destinationCards {
  id: number;
  image: string;
  title: string;
  text: string;
}
