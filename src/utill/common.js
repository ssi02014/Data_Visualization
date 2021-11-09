export const createNumberList = (length) => {
  const randomList = [];
  const basicList = [];

  for (let i = 1; i <= length; i++) {
    basicList.push(i);
  }

  while (randomList.length < length) {
    let randomNum = Math.floor(Math.random() * length + 1);
    if (!randomList.includes(randomNum)) randomList.push(randomNum);
  }

  return randomList;
};
