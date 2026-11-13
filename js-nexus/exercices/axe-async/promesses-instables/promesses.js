// @ts-check

/**
 * Crée une promesse immédiatement résolue avec un message.
 *
 * @param {string} message Message
 *
 * @returns {*} Promise résolue avec message
 */
export function createSignal(message) {
  return new Promise((successCallback) => {
    successCallback(message);
  });
}

/**
 * Retourne une valeur après un délai.
 *
 * @param {string} value Valeur
 * @param {number} delay Delay en millisecondes
 *
 * @returns {*} Promise résolue avec delay
 */
export function delayValue(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

/**
 * Vérifie un code temporel.
 */
export function checkTemporalCode(code) {
  // TODO
}

/**
 * Prépare un message à partir d'un signal asynchrone.
 */
export function prepareMessage(message) {
  // TODO
}

/**
 * Vérifie un code et transforme un rejet en message de refus.
 */
export function safeTemporalCode(code) {
  // TODO
}
