export enum Dice {
  D4 = 4,
  D10 = 10,
  D6 = 6,
  D8 = 8,
  D12 = 12,
  D20 = 20,
}

export const rollDice = (dice: Dice, useMedian = true) => {
  if (!useMedian) {
    return Math.ceil(Math.random() * dice.valueOf());
  }

  let rolls = [];

  for (let i = 0; i < 2; i++) {
    rolls.push(Math.ceil(Math.random() * dice.valueOf()));
  }

  return rolls.sort((a, b) => b - a)[1];
};
