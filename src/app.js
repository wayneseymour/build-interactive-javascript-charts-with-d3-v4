document.body.innerHTML = `<h1>Hello from: ${d3.version}</h1>`;

const ordinalScale = d3.scaleOrdinal()
  .domain(['poor', 'good', 'great'])
  .range(["red", "white", "green"]);


console.log(ordinalScale('good'));
console.log(ordinalScale('poor'))
console.log(ordinalScale('great'))
