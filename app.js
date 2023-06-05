// 1-masala

// const a = 12
// const b = 5

// for (let i=0; i<b; i++){
//     console.log(a)
// }

// 2-masala

// let a = 10
// let b = 20

// if (b > a){
//     for (let i = a; i<=b; i++){
//         console.log(i)
//     }
// }

// 3-masala

// let a = 10
// let b = 20

// if (b > a){
//     for (let i = b; i>=a; i--){
//         console.log(i)
//     }
// }

// 4-masala

// let a = 10000;

// for (let i = 1; i<=10; i++){
//     console.log(a*i)
// }

// 5-6-masalaa

// let a = 10000;

// for (let i = 1; i<=2; i=i+0.2){
//     console.log(a*i)
// }


// 7-masala


// let a = 10;
// let b = 20;
// let count = 0;
// for (let i = a; i<=b; i++){
//     count += i;
// }

// console.log(count)


// 8-masala

// let a = 10;
// let b = 20;
// let count = 1;
// for (let i = a; i<=b; i++){
//     count *= i;
// }

// console.log(count)

// 9-masala

// let a = 10;
// let b = 20;
// let count = 0;
// let qua = 1;
// for (let i = a; i<=b; i++){
//     qua = 1;
//     qua = i ** 2;  
//     count += qua;
// }

// console.log(count)

// 10-masala

// let n = 10;
// let count = 0;
// for (let i = 1; i<=10; i++){
//     count += (1/i)
// } 

// console.log(count)

// 11-masala


// let n = 10;
// let count = 0;
// for (let i = 1; i<=10; i++){
//     if (i % 2 === 1){
//         console.log(i)
//     }
// } 

// 12-masala

// let n = 10;
// let count = 0;
// for (let i = 1; i<=10; i++){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// } 

// 13-masala

// function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   function findPrimes(numbers) {
//     const primes = [];
//     for (let i = 0; i < numbers.length; i++) {
//       if (isPrime(numbers[i])) {
//         primes.push(numbers[i]);
//       }
//     }
//     return primes;
//   }
  
//   const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//   const primeNumbers = findPrimes(numbers);
//   console.log(primeNumbers); 


// 14-masala

// let n = 10;
// let count = 0;
// console.log('Juft')
// for (let i = 1; i<=10; i++){
//     if (i % 2 === 0){
//         console.log(i,i**2)
//     }
// } 
// console.log('Toq')
// for (let i = 1; i<=10; i++){
//     if (i % 2 === 1){
//         console.log(i,i**2)
//     }
// } 

// 15-masala

// let n = 10;

// while(n>0){
//     n--;
//     console.log(n)
// }

// 16-masala

// let n = 15;
// for (let i = 0; i <= n; i++){
//     if (i % 5 !==0){
//         console.log(i)
//     }
// }

// 17-masala

// let n = 10;
// let count = 1;
// for (let i = 1; i<=10; i++){
//     count *= i;
// }

// console.log(count)

// 18-masala


// let n = 10;
// let count = 1;
// let count1 = 0;
// for (let i = 1; i<=10; i++){
//     count = 1;
//     for (let j = 1; j<=i; j++){
//         count *= j;
//     }
//     count1 += count
// }

// console.log(count1)

// 19-masala


// let n = 10;
// let x = 5;
// let count = 1;
// let count1 = 0;
// for (let i = 1; i<=10; i++){
//     count = 1;
//     for (let j = 1; j <= i; j++){
//         count *= j;
//     }
//     count1 += ((i*x)/count)
// }

// console.log(count1)

// 20-masala

// let n = 10;
// let x = 5;

// for (let i = 1; i<=n; i++){
//     if (i % x === 0){
//         console.log(i)
//     }
// }

// 21-masala

// let n = 10;
// let x = 5;
// let count = 1;
// let count1 = 0;
// for (let i = 1; i<=n; i++){
//    count1 += i
// }
// for (let i=0;i<=n; i++){
//     count += i*(count1)
// }

// console.log(count)

// 22-masala

// let a = 10;
// let b = 20;
// let c = 1;
// for (let i = 1; i<=10; i++){
//     c = 1;
//     for (j = 1; j<=10; j++){
//         c = i * j;

//         console.log(`${i} * ${j} = ${c}`)
//     }
//     console.log("\n")
// }

