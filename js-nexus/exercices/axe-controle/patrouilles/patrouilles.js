// @ts-check

/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 *
 * @param {number} numberOfRounds Nombre de ronde
 *
 * @returns {number} Nombre de ronde
 */
export function sumRounds(numberOfRounds) {
  let sumNumberOfRounds = 0;

  for (let i = 0; i <= numberOfRounds; i++) {
    sumNumberOfRounds = sumNumberOfRounds + i;
  }

  return sumNumberOfRounds;
}

/**
 * Compte le nombre de caractères d'un code.
 *
 * @param {string} code Code
 *
 * @returns {number} Nombre de caractère du code
 */
export function countSymbols(code) {
  let counter = 0;

  for (const char of code) {
    counter++;
  }

  return counter;
}

/**
 * Compte le nombre de caractères `X` dans un code.
 *
 * @param {string} code Code
 *
 * @returns {number} Nombre de X dans le code
 */
export function countX(code) {
  let counter = 0;

  for (const char of code) {
    if (char === "X") {
      counter++;
    }
  }

  return counter;
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 *
 * @param {number} energy Energie du générateur
 * @param {number} consumption Consomation du drone
 *
 * @returns {number} Nombre de tours avant épuisement
 */
export function turnsBeforeEmpty(energy, consumption) {
  let counter = 0;
  let rest = energy;

  while (true) {
    if (rest - consumption < 0) {
      break;
    } else {
      rest = rest - consumption;
      counter++;
    }
  }

  return counter;
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 *
 * @param {number} limit Limite
 *
 * @returns {number} Premier numéro de ronde pour lequel le total devient strictement supérieur à limit
 */
export function firstRoundAbove(limit) {
  let round = 1;
  let total = 0;

  while (total <= limit) {
    total += round;

    if (total > limit) {
      return round;
    }

    round++;
  }
}
