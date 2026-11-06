// @ts-check

/**
 * Calcule la quantité d'énergie manquante.
 *
 * @param {number} maxEnergy Energie maximale
 * @param {number} currentEnergy Energie actuelle
 *
 * @returns {number} Energie manquante
 */
export function missingEnergy(maxEnergy, currentEnergy) {
  return maxEnergy - currentEnergy;
}

/**
 * Calcule le pourcentage d'énergie disponible.
 *
 * @param {number} maxEnergy Energie maximale
 * @param {number} currentEnergy Energie actuelle
 *
 * @returns {number} Pourcentage d'énergie disponible
 */
export function energyPercentage(maxEnergy, currentEnergy) {
  return (currentEnergy / maxEnergy) * 100;
}

/**
 * Calcule l'énergie après une recharge
 *
 * @param {number} currentEnergy Energie actuelle
 * @param {number} recharge Energie de la recharge
 *
 * @returns {number} Energie après recharge
 */
export function energyAfterRecharge(currentEnergy, recharge) {
  return currentEnergy + recharge;
}

/**
 * Vérifie si le générateur est prêt
 *
 * @param {number} currentEnergy Energie actuelle
 *
 * @returns {boolean} Vérifie si le générateur est prêt
 */
export function isGeneratorReady(currentEnergy) {
  if (currentEnergy >= 500) {
    return true;
  } else {
    return false;
  }
}

/**
 * Construit le message d'état du générateur
 *
 * @param {string} name Nom du générateur
 * @param {number} currentEnergy Energie actuelle
 *
 * @returns {*} Status du générateur
 */
export function generatorStatus(name, currentEnergy) {
  return name + " possède " + currentEnergy + " unités d'énergie.";
}
