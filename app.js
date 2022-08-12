calculate = () => {
    const number = document.getElementById("number").value;
    const output = document.getElementById("output");
  if (number=='' || isNaN(number)) {
    output.innerText = "please fill the field correctly!";
  } else {
    const next = (Math.floor(number) + 1);

    output.innerText = " hmm..! " + "" + "Number next to " + number + " " + "is" + " " + next + ".";

}
};
reset = () => {
  number.value = "";
  output.innerText = "";
};
