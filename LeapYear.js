function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return "Leap year";
  } else {
    return "Not leap year";
  }
  console.log("Test")
}
const result = checkLeapYear(2000);
console.log(result);
