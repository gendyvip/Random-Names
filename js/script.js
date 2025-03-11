function getRandom(names) {
  var results = [];
  const randomIndex = function () {
    return Math.floor(Math.random() * names.length);
  };
  var fname = randomIndex();
  var sname = randomIndex();
  while (fname === sname) {
    sname = randomIndex();
  }
  results.push(names[fname], names[sname]);
  return results;
}
var arr = ["mona", "ahmed", "sally", "soha", "shady"];
console.log(getRandom(arr));
