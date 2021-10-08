import Magician from '../Magician';

test('test stoned attack 200% stoned', () => {
  const marlin = new Magician('Marlin');

  marlin.stoned = true;
  marlin.distance = 2;
  marlin.attack = 200;

  expect(marlin.attack).toBe(175);
});

test('test stoned attack 100%', () => {
  const marlin = new Magician('Marlin');

  marlin.distance = 2;
  marlin.attack = 100;

  expect(marlin.attack).toBe(90);
});

test('test stoned attack - true\false', () => {
  const marlin = new Magician('Marlin');

  marlin.stoned = true;

  expect(marlin.stoned).toBe(true);
});

test('test stoned attack < 0', () => {
  const marlin = new Magician('Marlin');

  marlin.stoned = true;
  marlin.distance = 4;
  marlin.attack = 1;

  expect(marlin.attack).toBe(0);
});

test('test stoned attack < 0', () => {
  const marlin = new Magician('Marlin');

  marlin.stoned = true;
  marlin.distance = 3;
  marlin.attack = 13;

  expect(marlin.attack).toBe(2);
});
