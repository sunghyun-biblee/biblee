const loginForm = document.getElementById("loginform");
const welcomText = document.getElementById("welcom");
const input = document.querySelector("#loginform input");
const speical = document.getElementById("speical");

const USERKEY = "name";
const HIDDEN = "hidden";

function loginHandler(event) {
  const userName = input.value;
  event.preventDefault();

  loginForm.classList.add(HIDDEN);
  localStorage.setItem(USERKEY, userName);
  paintUsername(userName);
}

function paintUsername(userName) {
  welcomText.innerText = `Nice to meet you, ${userName}✨`;
  welcomText.classList.remove(HIDDEN);
  speical.classList.remove(HIDDEN);
}

const getUsername = localStorage.getItem(USERKEY);

if (getUsername === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", loginHandler);
} else {
  paintUsername(getUsername);
}
