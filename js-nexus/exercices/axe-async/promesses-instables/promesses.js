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
 * 
 * @param {string} code Code temporel
 * 
 * @returns {*} Retourne une Promise
 */
export function checkTemporalCode(code) {
  return new Promise((resolve, reject) => {
    if (code === "NYX") {
      resolve("Code accepté")
    } else {
      reject(new Error("Code refusé"))
    }
  })
}

/**
 * Prépare un message à partir d'un signal asynchrone.
 * 
 * @param {string} message Message du signal
 * 
 * @returns {string} Retourne le signal
 */
export function prepareMessage(message) {
  return createSignal(message).then(() => {
    return `Signal : ${message}`
  })
}

/**
 * Vérifie un code et transforme un rejet en message de refus.
 * 
 * @param {string} code Code
 * 
 * @returns {string} Retourne un message d'erreur en cas de rejet
 */
export function safeTemporalCode(code) {
  return checkTemporalCode(code).catch(() => {
    return "Code refusé"
  })
}
