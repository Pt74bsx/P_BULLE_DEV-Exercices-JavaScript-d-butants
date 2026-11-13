// @ts-check

/**
 * Retourne le message d'accès correspondant au niveau.
 *
 * @param {number} level Niveau
 *
 * @returns {string} Retourne le message d'accès correspondant au niveau.
 */
export function accessMessage(level) {
  if (level >= 5) {
    return "Accès autorisé";
  } else {
    return "Accès refusé";
  }
}

/**
 * Retourne l'état textuel d'une porte.
 *
 * @param {boolean} isOpen Porte ouvert ou non
 *
 * @returns {string} Etat textuel de la porte
 */
export function doorStatus(isOpen) {
  if (isOpen) {
    return "Ouverte";
  } else {
    return "Fermée";
  }
}

/**
 * Retourne le nom de la zone correspondant à un code.
 *
 * @param {string} code Code d'une zone
 *
 * @returns {string} Nom de la zone correspondant à un code
 */
export function zoneName(code) {
  switch (code) {
    case "N":
      return "Les Fondations";

    case "E":
      return "Les Archives";

    case "SE":
      return "La Forge";

    case "SO":
      return "La Citadelle";

    case "O":
      return "La Faille";

    default:
      return "Zone inconnue";
  }
}

/**
 * Détermine le niveau d'alerte selon l'énergie disponible.
 *
 * @param {number} energy Energie disponible
 *
 * @returns {string} Niveau d'alerte
 */
export function alertLevel(energy) {
  if (energy < 20) {
    return "CRITIQUE";
  } else if (energy >= 20 && energy <= 49) {
    return "FAIBLE";
  } else if (energy >= 50 && energy <= 79) {
    return "STABLE";
  } else {
    return "OPTIMAL";
  }
}
