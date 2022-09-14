function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz'
    if (n % 3 === 0) return 'Fizz'
    if (n % 5 === 0) return 'Buzz'
    return n

}
c = 0
while (c < 101) {
    console.log(fizzBuzz(c))
    c += 1
}
