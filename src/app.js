document.body.innerHTML = `<h1>Hello from: ${d3.version}</h1>`;

const quantizeScale = d3.scaleQuantize()
  .domain([0, 100])
  .range(["red", "white", "green"]);


console.log(quantizeScale(22));
console.log(quantizeScale(49));
console.log(quantizeScale(50));
console.log(quantizeScale(88));

console.log(quantizeScale.invertExtent('white'))
