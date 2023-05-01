const getCalcResult = (theFirstNumber: number, oprtr: string, theSecondNumber: number) => {
  let result: number;
  switch (oprtr) {
    case '+':
      result = theFirstNumber + theSecondNumber;
      break;
    case '-':
      result = theFirstNumber - theSecondNumber;
      break;
    case 'x':
      result = theFirstNumber * theSecondNumber;
      break;
    case '/':
      result = theFirstNumber / theSecondNumber;
      break;
    default:
      result = Infinity;
  }

  if (String(result).includes('.')) {
    const value = String(result).split('.')[0];
    switch (value.length) {
      case 1:
        result = Number(result.toFixed(8));
        break;
      case 2:
        result = Number(result.toFixed(7));
        break;
      case 3:
        result = Number(result.toFixed(6));
        break;
      case 4:
        result = Number(result.toFixed(5));
        break;
      case 5:
        result = Number(result.toFixed(4));
        break;
      case 6:
        result = Number(result.toFixed(3));
        break;
      case 7:
        result = Number(result.toFixed(2));
        break;
      case 8:
        result = Number(result.toFixed(1));
        break;
      default:
        result = Number(result);
    }
  }
  return result;
};

export default getCalcResult;
