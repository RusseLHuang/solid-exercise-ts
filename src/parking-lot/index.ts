import { Car } from "./car";
import { CarSlot } from "./car-slot";

export class ParkingLot {

  public slot: CarSlot[];

  constructor() {
    this.slot = [];
  }

  public park(carSlot: CarSlot) {
    carSlot.occupy();
    return true;
  }

  public saveToDb() {
    console.log('save to db');
  }

  public getSlot() {
    return;
  }

  public addSlot(slot: CarSlot) {
    this.slot.push(slot);
    return true;
  }

}