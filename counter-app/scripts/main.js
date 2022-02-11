// async vs defer
/*
const startTime = new Date();

logged("parsing start");

window.addEventListener("load", () => {
  logged("rendered");
});

function logged(mess) {
  console.log(`${new Date() - startTime} ms : ${mess}`);
}
*/
const app = document.getElementById("app");
const divbtn = document.createElement("div");
divbtn.className = "btn";
divbtn.innerHTML = `<button>1</button>
<button>2</button>
<button>3</button>`;

console.log(divbtn);
console.log(typeof divbtn);
console.log(app);
// app.innerHTML = divbtn;

document.body.appendChild(divbtn);

// increase counter
let count = 0;
const btnDiv = document.querySelectorAll("div.btn > button");

//on click update
btnDiv.forEach((button) => {
  button.addEventListener("click", () => {
    count = parseInt(button.innerHTML);
    console.log(count);
    button.innerHTML = count + 1;
  });
});

console.log(btnDiv);

// 1. element
// 2. button
// 3. counter
// 4. button .addeventlisner
// 5. counter++;
