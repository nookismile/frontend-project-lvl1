import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('Whats your name?: ');
  console.log(`Hello, ${userName}`);
};
