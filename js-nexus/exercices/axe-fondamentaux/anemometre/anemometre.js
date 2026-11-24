// @ts-check

// TODO : déclarer la constante de conversion entre les km/h et les m/s
const valueConvertKmhToMs = 3.6;

/**
 * Convertit une vitesse de km/h en m/s.
 *
 * @param {number} speedKmh Vitesse en Km/h
 *
 * @returns {number} Retourne la vitesse en m/s
 */
export function kmhToMs(speedKmh) {
  return speedKmh / valueConvertKmhToMs;
}

/**
 * Calcule l'écart entre une rafale et le vent moyen.
 *
 * @param {number} gustKmh Vitesse de la rafale
 * @param {number} averageKmh Vitesse moyenne
 *
 * @returns {number} Retourne l'écart de vitesse d'une rafale
 */
export function gustGap(gustKmh, averageKmh) {
  return gustKmh - averageKmh;
}

/**
 * Calcule la moyenne de trois mesures.
 *
 * @param {number} speed1 Mesure une
 * @param {number} speed2 Mesure deux
 * @param {number} speed3 Mesure trois
 *
 * @returns {number} Retourne la moyenne des trois mesures
 */
export function averageOfThree(speed1, speed2, speed3) {
  return (speed1 + speed2 + speed3) / 3;
}

/**
 * Indique si le vent atteint au moins 75 km/h.
 *
 * @param {number} speedKmh Vitesse du vent
 *
 * @returns {boolean} Retourne true si la vitesse du vent atteint 75 Km/h
 */
export function isStormAlert(speedKmh) {
  if (speedKmh >= 75) {
    return true;
  } else {
    return false;
  }
}

/**
 * Construit le bulletin météo d'une station.
 *
 * @param {string} station Nom de la station
 * @param {number} speedKmh Vitesse du vent
 *
 * @returns {string} Retourne le bulletin météo de la station
 */
export function windReport(station, speedKmh) {
  return `${station} : vent de ${speedKmh} km/h (${kmhToMs(speedKmh)} m/s).`;
}
