const emoji = [
  "🐰",
  "🐱",
  "🐿",
  "🐨",
  "🐟",
  "🐊",
  "🐰",
  "🐱",
  "🐿",
  "🐨",
  "🐟",
  "🐊"
];

const shuffled = shuffle(emoji);

var opened = {
  1: { opened: false, emoji: shuffled[0] },
  2: { opened: false, emoji: shuffled[1] },
  3: { opened: false, emoji: shuffled[2] },
  4: { opened: false, emoji: shuffled[3] },
  5: { opened: false, emoji: shuffled[4] },
  6: { opened: false, emoji: shuffled[5] },
  7: { opened: false, emoji: shuffled[6] },
  8: { opened: false, emoji: shuffled[7] },
  9: { opened: false, emoji: shuffled[8] },
  10: { opened: false, emoji: shuffled[9] },
  11: { opened: false, emoji: shuffled[10] },
  12: { opened: false, emoji: shuffled[11] }
};

var stack = [];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function putContent(array) {
  for (let index = 0; index < array.length; index++) {
    document.getElementById((index + 1).toString()).childNodes[3].innerHTML =
      array[index];
  }
}

function myFunction(id) {
  toggle(id);
  if (opened[id].opened === true) {
  }
  if (stack.length === 2) {
    document.getElementById(stack[0]).childNodes[3].style.background = "white";
    document.getElementById(stack[0]).childNodes[3].style.background = "white";
    toggle(stack.pop());
    toggle(stack.pop());
  }
  if (stack.length === 0) {
    stack.push(id);
    return;
  }
  if (stack.length === 1) {
    if (opened[stack[0]].emoji === opened[id].emoji) {
      document.getElementById(id).childNodes[3].style.background = "green";
      document.getElementById(stack[0]).childNodes[3].style.background =
        "green";
      stack.pop();
      return;
    }
    if (opened[stack[0]].emoji !== opened[id].emoji) {
      stack.push(id);
      document.getElementById(stack[1]).childNodes[3].style.background = "red";
      document.getElementById(stack[0]).childNodes[3].style.background = "red";
      return;
    }
  }
  return;
}

function toggle(id) {
  document.getElementById(id).classList.toggle("rotate");
  opened[id]["opened"] = !opened[id]["opened"];
}

putContent(shuffled);
