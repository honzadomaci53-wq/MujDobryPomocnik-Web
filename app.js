const action = document.querySelector("#action");
const message = document.querySelector("#message");

action.addEventListener("click", () => {
  message.textContent = "Aplikace funguje!";
});
