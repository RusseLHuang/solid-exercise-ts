import { Car } from './car';
import { ParkingLot } from '.'
import { CarSlot } from './car-slot';

test('should sum correctly', () => {
  const carSlot = new CarSlot('CX9');
  const parkingLot = new ParkingLot();
  const result = parkingLot.park(carSlot);

  expect(result).toBe(true);
})

