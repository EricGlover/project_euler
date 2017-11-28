/*
Project Euler #10: Summation of primes
*/
//a prime Class for doing mathy things
//NOTE: got the runtime on this down to 6.75 seconds
//on haxRax but still it feels wrong
//TODO: look into a more mathy solution of this problem
//then solve the project euler version and read the solution.
const Prime = function() {
  const bruteCheck = number => {
    if (!Number.isInteger(number)) return false;
    if (number <= 1) return false;
    if (number % 2 === 0) return false;
    const m = Math.sqrt(number);
    for (let i = 3; i <= m; i += 2) {
      if (number % i === 0) return false;
    }
    return true;
  };
  this.bruteCheck = bruteCheck;
  //injectable iterator
  _primeIterator = function*() {
    let prime = 2;
    yield prime;
    while (true) {
      let injected;
      if (bruteCheck(prime)) {
        injected = yield prime;
      }
      prime = injected || ++prime;
    }
    return new Error("JS math no good, sorry");
  };
  _nextPrime = _primeIterator();
  // _primes = Array(100).fill(undefined).map(el => _nextPrime.next().value);
  _primes = [2];
  //this works well-ish, not well enough for haxRax #3
  this.primeFactorDecomposition = n => {
    //check if n is prime, doing this beforehand seems inefficient
    //it's moderately efficient when setup Prime using a sieve beforehand
    let _nextPrime = _primeIterator();
    if (n <= _primes[_primes.length - 1]) {
      if (_primes.includes(n)) return [n];
    } else {
      if (bruteCheck(n)) return [n];
    }
    let primeFactors = [];
    //here's the idea, continously attempt to pull out prime factors from
    // n, this process is complete when n == 1
    const m = Math.sqrt(n);
    let temp = n;
    while (temp !== 1) {
      let nextPrime = _nextPrime.next().value;
      if (nextPrime >= n) {
        primeFactors = [n];
        break;
      } else if (nextPrime === n) {
        return [n];
      }
      while (temp % nextPrime === 0) {
        primeFactors.push(nextPrime);
        temp = Math.trunc(temp / nextPrime);
      }
    }
    return primeFactors;
  };
  //internal method for getting the nth prime via a sieve
  this.sieve = (n, upperBound) => {
    //now you can also pass it an upperBound
    upperBound = upperBound || Math.ceil(this.upperBound(n));
    let sieve = Array(upperBound).fill(true);
    sieve[0] = false;
    sieve[1] = false;
    for (let i = 0; i < Math.sqrt(upperBound); i++) {
      if (!sieve[i]) continue;
      for (let k = i * i; k <= upperBound; k += i) {
        sieve[k] = false;
      }
    }
    let primes = [];
    // let primes = new Set();
    sieve.forEach((el, i) => {
      if (el) primes.push(i);
      // if (el) primes.add(i);
    });
    return primes;
  };
  //
  this.sumPrimes = n => this.range(n).reduce((sum, prime) => sum + prime);
  //not inclusive
  this.primesLessThanN = n => {
    return this.sieve(n);
  };
  this.sumPrimesLessThanN = n => {
    this.primesLessThanN(n).reduce(function(sum, prime) {
      return sum + prime;
    });
  };
  this.nPrimesGenerator = n => {
    let nextPrime = _primeIterator();
    let primes = [];
    for (let i = 0; i < n; i++) {
      primes.push(nextPrime.next().value);
    }
    return primes;
  };
  this.nth = n => {
    let nextPrime = _primeIterator();
    let prime = 2;
    for (let i = 0; i < n; i++) {
      prime = nextPrime.next().value;
    }
    return prime;
  };
  this.upperBound = n => n * (Math.log(n) + Math.log(Math.log(n)));
  this.range = n => {
    // the generator works but it's a bit slow
    // return this.nPrimesGenerator(n)
    //slicing probably makes this just as slow but ohhh wells
    return this.sieve(n).slice(0, n);
  };
  this.printPrimes = n => console.log(_primes);
};
//
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
//
// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;
//
// process.stdin.on("data", function(data) {
//   input_stdin += data;
// });
//
// process.stdin.on("end", function() {
//   input_stdin_array = input_stdin.split("\n");
//   main();
// });
//
// function readLine() {
//   return input_stdin_array[input_currentline++];
// }

///////////// ignore above this line ////////////////////
//TODO: MEMEOIZE
// const getSum = (primes, upperBound) => {
//   let total = 0;
//   for (let i = 0; i < primes.length; i++) {
//     if (primes[i] > upperBound) return total;
//     total += primes[i];
//   }
// };
//find higher index
// const findHigh = (arr, num) => {
//   let i = 0;
//   //find the first idx that's higher or equal to num
//   while (arr[i] < num && i < arr.length) {
//     i++;
//   }
//   return i;
// };
//get subSum of primes
//from i ... primes[j] > upperBound
// const subSum = (primes, i, upperBound) => {
//   let total = 0;
//   for (let j = i; j < primes.length; j++) {
//     if (primes[j] > upperBound) return total;
//     total += primes[j];
//   }
// };
//new approach
//find all the primes using a sieve
//compute the value of all the sums of the previous primes
//in one loop
//then do a loop for each look up
//WORST TIME 8.76 seconds
const makeSums = primes => {
  let total = 0;
  return primes.map(prime => {
    total += prime;
    let arr = new Array(2);
    arr[0] = prime;
    arr[1] = total;
    return arr;
  });
};
/*
WORST TIME WITH BINARY SEARCH
6.75
*/
//binary search to find the lowest prime
//that is greater than num
//it's the same as binary search
//but arr[k - 1] needs to be less than or equal to num
//and arr[k] needs to be greater than
const findHigh = (arr, num, l = 0, r = arr.length - 1) => {
  //length of subarr = r + 1 - l
  //middle index of subarr = Math.ceil(subarr.length / 2) + 1
  //in terms of arr's index that = middle index + l
  let k = Math.ceil((r + 1 - l) / 2) - 1 + l;
  if (k === 0) return 1;

  //if found
  if (arr[k][0] > num && arr[k - 1][0] <= num) return k;
  //if not in array
  if (r - l === 0) return undefined;
  //else keep looking
  if (arr[k][0] > num) {
    return findHigh(arr, num, l, k - 1);
  } else {
    return findHigh(arr, num, k + 1, r);
  }
};
//find higher index
// const findHigh = (arr, num) => {
//   let i = 0;
//   //find the first idx that's higher or equal to num
//   while (arr[i][0] <= num && i < arr.length) {
//     i++;
//   }
//   return i;
// };
let tests = [5, 10];
function main() {
  // var t = parseInt(readLine());
  let p = new Prime();
  let primes = p.sieve(Math.pow(10, 6));
  let sums = makeSums(primes);
  // for (var a0 = 0; a0 < t; a0++) {
  for (var a0 = 0; a0 < tests.length; a0++) {
    // var n = parseInt(readLine());
    var n = tests[a0];
    var idx = findHigh(sums, n);
    console.log(sums[idx - 1][1]);
  }
  // const start = new Date();
  // let p = new Prime();
  // let primes = p.sieve(10 ** 6);
  // const finish = new Date();
  // console.log(`that took ${(finish - start) / 1000} seconds`);
}
main();
