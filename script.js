document.getElementById("clickBtn").addEventListener("click", function() {
  const msg = document.getElementById("msg");
  msg.textContent = "Thanks for clicking, Sahil!";
  msg.style.fontWeight = "bold";
  msg.style.color = "#ffcc00";
});
