const refactResult = (result: number) => {
  if (String(result).split('.')[0].length > 8 || (String(result).includes('e') && String(result).includes('.'))) {
    return result.toExponential(4);
  }
  return String(result).replace('.', ',');
};

export default refactResult;
