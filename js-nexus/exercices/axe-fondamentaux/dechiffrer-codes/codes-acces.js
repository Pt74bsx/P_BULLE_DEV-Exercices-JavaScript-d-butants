// @ts-check

/**
 * Convertit une valeur en nombre.
 *
 * @param {string} value Valeur du code
 *
 * @returns {number} Valeur convertie en nombre
 */
export function convertCode(value) {
  return Number(value);
}

/**
 * Compare deux valeurs avec l'égalité souple.
 *
 * @param {string} value1 Valeur
 * @param {string} value2 Valeur
 *
 * @returns {boolean} Egalité souple
 */
export function sameCodeLoose(value1, value2) {
  if (value1 == value2) {
    return true;
  } else {
    return false;
  }
}

/**
 * Compare deux valeurs avec l'égalité stricte.
 *
 * @param {string} value1 Valeur
 * @param {string} value2 Valeur
 *
 * @returns {boolean} Egalité stricte
 */
export function sameCodeStrict(value1, value2) {
  if (value1 === value2) {
    return true;
  } else {
    return false;
  }
}

/**
 * Indique si un code est pair.
 *
 * @param {number} code Code d'acces
 *
 * @returns {boolean} Code pair
 */
export function isEvenCode(code) {
  if (code % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * Indique si la conversion de la valeur produit NaN.
 *
 * @param {number} value  Valeur convertie
 *
 * @returns {boolean} Convertion de nombre produit NaN
 */
export function isInvalidCode(value) {
  if (isNaN(value)) {
    return true;
  } else {
    return false;
  }
}
