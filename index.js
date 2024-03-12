document.addEventListener("DOMContentLoaded", () => {
  const no = document.querySelector("#no");
  no.onclick = () => {
    let number = Math.random();
    let newNumber = Math.floor(number * 65);
    console.log(newNumber);
    document.querySelector(".container").style.top = newNumber + "vh";
    number = Math.random();
    newNumber = Math.floor(number * 65);
    document.querySelector(".container").style.left = newNumber + "vw";
  };
  const yes = document.querySelector("#yes");
  yes.onclick = () => {
    document.querySelectorAll("button").forEach((el) => {
      el.style.display = "none";
    });
    document.querySelector(".h1").style.display = "none";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".container").style.top = "30%";
    document.querySelector(".container").style.left = "35%";
    document.querySelector(".container").style.transition = "none";
    const h1 = document.createElement("h1");
    h1.innerHTML = "Wiiiiiiiiiiiiiiiiiiiiiii🙂";
    h1.style.fontSize = "5rem";
    h1.style.whiteSpace = "nowrap";
    document.querySelector(".container").appendChild(h1);
  };
});
