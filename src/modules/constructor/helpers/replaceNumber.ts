const replaceNumber = (displayNumber: string) => (displayNumber.includes(',') ? displayNumber.replace(',', '.') : displayNumber);

export default replaceNumber;
