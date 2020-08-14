export const DiceSides = [20, 4, 6, 8, 10, 12] as const;

// Returns the resulting roll of the given dice
export const rollDice = (sides: number, useMedian = true) => {
  // If not median of 3, return first roll
  if (!useMedian) {
    return Math.ceil(Math.random() * sides.valueOf());
  }

  let rolls = [];

  // Roll three times
  for (let i = 0; i < 3; i++) {
    rolls.push(Math.ceil(Math.random() * sides.valueOf()));
  }

  // Return median
  return rolls.sort((a, b) => b - a)[1];
};
