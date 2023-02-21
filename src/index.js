
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
   let arr = [];
   let arr2 = [];
   for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
         arr.push(matrix[i]);
      } else {
         arr.push(matrix[i].reverse())
      }
   }
   for (let num of arr) {
      for (let num2 of num) {
         arr2.push(num2)
      }
   }
   return arr2
};

