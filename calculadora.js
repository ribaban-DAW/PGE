/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function suma(a, b) {
  return a + b;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function resta(a, b) {
  return a - b;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function multiplicacion(a, b) {
  return a * b;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function division(a, b) {
  if (b === 0) throw new Exception("No se puede dividir por cero");
  return a / b;
}

// TODO: Implementar funciones mod, sqrt, pow