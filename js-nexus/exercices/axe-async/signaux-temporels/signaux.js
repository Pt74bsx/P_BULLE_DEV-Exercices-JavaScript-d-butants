// @ts-check

/**
 * Exécute un callback après un délai.
 *
 * @param {string} callback
 * @param {number} delay
 */
export function runLater(callback, delay) {
  setTimeout(callback, delay);
}

/**
 * Transmet un message à un callback après un délai.
 *
 * @param {string} message
 * @param {number} delay
 * @param {string} callback
 */
export function sendSignal(message, delay, callback) {
  setTimeout(callback, delay, message);
}

/**
 * Double une valeur puis la transmet à un callback après un délai.
 *
 * @param {number} value
 * @param {number} delay
 * @param {string} callback
 */
export function doubleLater(value, delay, callback) {
  setTimeout(callback, delay, value * 2);
}

/**
 * Construit un statut puis le transmet après un délai.
 *
 * @param {string} name
 * @param {number} delay
 * @param {string} callback
 */
export function delayedStatus(name, delay, callback) {
  setTimeout(callback, delay, `${name} prêt`);
}
