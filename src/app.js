document.body.innerHTML = `<h1>Hello from: ${d3.version}</h1>`;

const timeScale = d3.scaleTime()
  .domain([new Date(2021, 0, 1), new Date()])
  .range([0, 100]);

console.log(`\n### timeScale(new Date(2021, 4, 15)): \n\t${timeScale(new Date(2021, 4, 15))}`);
console.log(`\n### timeScale.invert(50): \n\t${timeScale.invert(50)}`);


