import { SET_NUMBERS, SET_OPERATION } from "./actions";

const initialState = {
    operation: '',
    from: 0,
    to: 0,
    result: []
};

const numberReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_OPERATION:
        return {...state, operation: action.payload };
        case SET_NUMBERS:
        const { from, to } = action.payload;
        let result = [];
        switch(state.operation) {
            case 'prime':
             result = getPrimes(from, to);
             break;
            case 'palandrome':
             result = getPalandromes(from, to);
             break;
            case 'fibonacci':
             result = getFibonacci(from, to);
             break;
            case 'strong':
             result = getStrongNumbers(from, to);
             break;
            case 'armstrong':
             result = getArmStrongNumber(from, to);
             break;
             default:
             break;
        }
        return {...state, from, to, result};
        default:
          return state;
    }
};

// Utility functions for calculations
const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };
  
  const getPrimes = (from, to) => {
    const primes = [];
    for (let i = from; i <= to; i++) {
      if (isPrime(i)) primes.push(i);
    }
    return primes;
  };
  
  const isPalindrome = num => num.toString() === num.toString().split('').reverse().join('');
  
  const getPalandromes = (from, to) => {
    const palindromes = [];
    for (let i = from; i <= to; i++) {
      if (isPalindrome(i)) palindromes.push(i);
    }
    return palindromes;
  };
  
  const getFibonacci = (from, to) => {
    const fib = [0, 1];
    while (fib[fib.length - 1] <= to) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib.filter(num => num >= from && num <= to);
  };
  
  const factorial = num => (num === 0 ? 1 : num * factorial(num - 1));
  
  const isStrongNumber = num => {
    const sum = num.toString().split('').reduce((acc, digit) => acc + factorial(parseInt(digit)), 0);
    return sum === num;
  };
  
  const getStrongNumbers = (from, to) => {
    const strongNumbers = [];
    for (let i = from; i <= to; i++) {
      if (isStrongNumber(i)) strongNumbers.push(i);
    }
    return strongNumbers;
  };
  
  const isArmStrongNumber = num => {
    const digits = num.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === num;
  };
  
  const getArmStrongNumbers = (from, to) => {
    const armstrongNumbers = [];
    for (let i = from; i <= to; i++) {
      if (isArmStrongNumber(i)) armstrongNumbers.push(i);
    }
    return armstrongNumbers;
  };
  
  export default numberReducer;

