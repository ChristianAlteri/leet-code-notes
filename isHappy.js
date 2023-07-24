const isHappy = function (n) {
  const seen = new Set();

  const validate = (n) => {
    let numArray = n.toString().split('').map(Number);
    let sum = 0;
    for (let digit of numArray) {
      sum += digit ** 2;
    }
    return sum;
  };

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);

    switch (n) {
      case 1:
        return true;
      case 0:
        return false;
      default:
        n = validate(n);
    }
  }

  return n === 1;
};

const finalResult = (n) => {
  if (isHappy(n)) {
    console.log('HAPPY');
  } else {
    console.log('UNHAPPY');
  }
};

finalResult(2);
