function pow(a: number , b: number) {
  if (b === 0) {
    return 0;
  }
  let x = a;
  for (let i = 1; i < b; i++) {
    x = x * a;  // Dead store because the last return statement should return x instead of returning a
  }
  return a;
}
