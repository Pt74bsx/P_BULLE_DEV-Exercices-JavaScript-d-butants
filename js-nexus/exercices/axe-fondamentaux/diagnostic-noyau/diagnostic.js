// @ts-check

import { convertCode } from "../dechiffrer-codes/codes-acces";

/**
 * Retourne le type JavaScript de la valeur.
 *
 * @param {*} value Valeur
 *
 * @returns {*} Type JavaScript de la valeur
 */
export function valueType(value) {
  return typeof value;
}

/**
 * Indique si la valeur est undefined.
 *
 * @param {*} value Valeur
 *
 * @returns {boolean} la valeur est strictement égale à undefined
 */
export function isUndefined(value) {
  if (value === undefined) {
    return true;
  } else {
    return false;
  }
}

/**
 * Indique si la valeur est null.
 *
 * @param {*} value Valeur
 *
 * @returns {boolean} La veleur est null
 */
export function isNull(value) {
  if (value === null) {
    return true;
  } else {
    return false;
  }
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 *
 * @param {*} value Valeur
 *
 * @returns {boolean} La valeur est connue
 */
export function hasKnownValue(value) {
  if (!isUndefined(value) && !isNull(value)) {
    return true;
  } else {
    return false;
  }
}

/**
 * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 *
 * @param {*} energy Energie du générateur
 * @param {*} minimumEnergy Energie minimum du générateur
 *
 * @returns {boolean} Le générateur a assez d'énergie
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  if (valueType(energy) !== Number && valueType(minimumEnergy) !== Number) {
    convertCode(energy);
    convertCode(minimumEnergy);
  }

  if (energy >= minimumEnergy) {
    return true;
  } else {
    return false;
  }
}

/**
 * Compare strictement le nom de la zone attendue.
 *
 * @param {string} zone Identifiant de la zone
 * @param {string} expectedZone Zone attendue
 *
 * @returns {boolean} Le nom de la zone et celui attendu
 */
export function isCorrectZone(zone, expectedZone) {
  if (zone === expectedZone) {
    return true;
  } else {
    return false;
  }
}
