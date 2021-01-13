export class CarSlot {
  public slotId: string;
  public status: string;

  constructor(slotId: string) {
    this.slotId = slotId;
    this.status = 'vacant';
  }

  public occupy() {
    this.status = 'taken';
  }

  public calculatePrice(hours: number) {
    return hours * 30;
  }
}