function getRootsNdPol(a, b, c) {
  const delta = b * b - 4 * a * c;
  if (delta > 0) {
    const x1 = (-b - Math.sqrt(delta)) / (2 * a);
    const x2 = (-b + Math.sqrt(delta)) / (2 * a);

    return [x1, x2];
  }
  if (delta === 0) {
    return [-b / (2 * a)];
  }
  return [];
}

module.exports = getRootsNdPol;
