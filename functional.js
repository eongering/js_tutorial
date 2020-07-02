let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));



// 6.3: Reduce
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));


// Ex 6.3.4 - 1
let original = [2, 4, 6, 8, 10, 12, 14, 16];

// imperativeProduct
function imperativeProduct(elements) {
  let product = 1;
  elements.forEach(function(o) {
    product *= o;
  });
  return product;
}
console.log(imperativeProduct(original));

// functionalProduct
function functionalProduct(elements) {
  return elements.reduce((product, o) => { return product *= o; },1);
}
console.log(functionalProduct(original));


function functionalLengths(elements) { return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths;}, {});}
console.log(functionalLengths(states));
