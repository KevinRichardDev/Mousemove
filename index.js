const cursor = document.getElementById("cursor");
const mouse1 = document.getElementById("mouse1");
const mouse2 = document.getElementById("mouse2");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";

  mouse1.style.left = e.pageX + "px";
  mouse1.style.top = e.pageY + "px";

  mouse2.style.left = e.pageX + "px";
  mouse2.style.top = e.pageY + "px";
})

// S'assurer que les liens sont clickables