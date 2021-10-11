/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view Compose as moving RIGHT to LEFT through its arguments.
 *
 * Compose Example:
   let greet = function(name){ return 'hello ' + name;}
   let exclaim = function(statement) { return statement.toUpperCase() + '!';}
   let welcome = compose(exclaim, greet);
   welcome('phillip'); // 'hello PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view Pipe as moving LEFT to RIGHT through its arguments.
 *
 * Pipe Example:
  let add2 = function(number){ return number + 2; }
  let multiplyBy3 = function(number){ return number * 3; }
  let addAndMultiply = pipe(add2, multiplyBy3);
  addAndMultiply(5);//should be 21
  let addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  addAndMultiplyTwice(5); //should be 63
 */

const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x)

const pipe = (...fns) => (x) => fns.reduce((res, fn) => fn(res), x)




describe('Tests', () => {
  it('test compose', () => {
    let greet = (name) => 'hello ' + name;
    let exclaim = (statement) => statement.toUpperCase() + '!';
    let welcome = compose(exclaim, greet);
    expect(welcome('phillip')).toStrictEqual('HELLO PHILLIP!');
  });

  it('test pipe', () => {
    let add2 = (number) => number + 2;
    let multiplyBy3 = (number) => number * 3;
    let addAndMultiply = pipe(add2, multiplyBy3);
    expect(addAndMultiply(5)).toStrictEqual(21);

    let addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
    expect(addAndMultiplyTwice(5)).toStrictEqual(63);
  });
});
