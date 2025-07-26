// Power of Given Number with base and exponent

function power(base, exp) {
  // Base case
  if (exp === 0) {
    return 1;
  }

  return base * power(base, exp - 1);
}
