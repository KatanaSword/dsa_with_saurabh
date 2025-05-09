function recurLength(string) {
  // Base case
  if (string === "") {
    return 0;
  }

  return 1 + recurLength(string.substring(1));
}
