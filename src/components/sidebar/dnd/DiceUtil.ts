export const DiceSides = [20, 4, 6, 8, 10, 12] as const;

export const rollDice = (sides: number, useMedian = true) => {
  if (!useMedian) {
    return Math.ceil(Math.random() * sides.valueOf());
  }

  let rolls = [];

  for (let i = 0; i < 3; i++) {
    rolls.push(Math.ceil(Math.random() * sides.valueOf()));
  }

  return rolls.sort((a, b) => b - a)[1];
};
