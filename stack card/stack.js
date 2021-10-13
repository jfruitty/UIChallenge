let stack = document.querySelector(".stack");

[...stack.children].reverse().forEach(i => stack.append(i));


function forward(e) {
  console.log(e);
  let card = document.querySelector(".stackcard:last-child");
  card.style.animation = "next 1500ms forwards";
  setTimeout(() => {
    card.style.animation = "";
    stack.prepend(card);
  }, 1000);
}

function backward(e) {
  console.log(e);
  let first = document.querySelector(".stackcard:first-child");
  first.style.animation = "swap 1500ms forwards";
  setTimeout(() => {
    first.style.animation = "";
    stack.append(first);
  }, 1000);
}
