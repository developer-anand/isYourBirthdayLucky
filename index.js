const bdayEl = document.querySelector("#dob");
const numberEl = document.querySelector("#luckyEl");
const btnEl = document.querySelector("#checkBtn");

//for output
let outputEl = document.querySelector("#output");

btnEl.addEventListener("click", () => {
  let dob = bdayEl.value;
  let luckyNumber = numberEl.value;
  isLucky(dob, luckyNumber);
});

function error(msg) {
  outputEl.innerText = msg;
}
function isLucky(dob, luckyNumber) {
  if (luckyNumber < 0) {
    return error("Please enter +ve Value as your Lucky Number");
  }
  if (dob === "" || luckyNumber === "") {
    return error("Please Enter Valid Date and Lucky Number first...");
  }
  dob = dob.replaceAll("-", "");
  let sum = calculateSum(dob);
  if (sum % luckyNumber === 0) {
    outputEl.innerText = "Hurryyy it's lucky";
  } else {
    outputEl.innerText =
      "Oh it's not lucky but don't believe in luck create your own luck";
  }
}

function calculateSum(dob) {
  // let dateOfBirth = Number(dob);
  // while (dateOfBirth !== 0) {
  //   let rem = dateOfBirth % 10;
  //   sum += rem;
  //   dateOfBirth = dateOfBirth / 10;
  // }
  // return Math.floor(sum);
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum += Number(dob[i]);
  }
  return sum;
}
