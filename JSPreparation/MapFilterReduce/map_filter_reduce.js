//ques1:
const nums = [1, 2, 3, 4];
//acc is result of previous computation
//curr is current element of array
// arr is array
//second parameter in reduce function is initial value of acc
const sum = nums.reduce((acc, curr, index, arr) => {
  return acc + curr;
}, 0);

console.log(sum);

/**
 * Ques 2 - Return total marks for students with marks greater than 60
 * after 20 marks have been added to those who scored less than 60
 */

const students = [
  {
    name: "Tarunya",
    rollNumber: 31,
    marks: 60,
  },
  {
    name: "Jenny",
    rollNumber: 15,
    marks: 69,
  },
  {
    name: "Kaushal",
    rollNumber: 16,
    marks: 35,
  },
  {
    name: "Dilpreet",
    rollNumber: 7,
    marks: 55,
  },
];

const totalMarks = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => stu, marks > 60)
  .reduce((total, stu) => total + stu.marks, 0);
