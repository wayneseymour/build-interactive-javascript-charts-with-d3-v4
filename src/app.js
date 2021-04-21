document.body.innerHTML = `<h1>Hello from: ${d3.version}</h1>`;

const testScoresRange = [0, 100];
const outputRange = [0, 600];
const linearScale = d3.scaleLinear()
  .domain(testScoresRange)
  .range(outputRange)
  .clamp(true) // Forces the return value to be within the output range

console.log(`\n### linearScale(-20): \n\t${linearScale(-20)}`);
console.log(`\n### linearScale(0): \n\t${linearScale(0)}`);
console.log(`\n### linearScale(50): \n\t${linearScale(50)}`);
console.log(`\n### linearScale(100): \n\t${linearScale(100)}`);


