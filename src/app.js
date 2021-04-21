document.body.innerHTML = `<h1>${d3.version}</h1>`;

const testScoresRange = [0, 100];
const outputRange = [0, 1];
const linearScale = d3.scaleLinear()
  .domain(testScoresRange)
  .range(outputRange)

console.log(`\n### linearScale(0): \n\t${linearScale(0)}`);
console.log(`\n### linearScale(50): \n\t${linearScale(50)}`);

