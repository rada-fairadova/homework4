import sortHeroes from '../sortHeroes';

test('should sort heroes by health in descending order', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortHeroes(heroes);

  expect(result).toEqual(expected);
  expect(result).not.toBe(heroes); // проверяем, что возвращается новый массив
});

test('should handle empty array', () => {
  expect(sortHeroes([])).toEqual([]);
});

test('should handle single hero', () => {
  const heroes = [{ name: 'маг', health: 100 }];
  expect(sortHeroes(heroes)).toEqual([{ name: 'маг', health: 100 }]);
});

test('should not mutate original array', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];
  const original = [...heroes];
  sortHeroes(heroes);
  expect(heroes).toEqual(original);
});