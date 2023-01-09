window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  hidePortfolio();
  hideAllScreens();
  delayedLoad();

  document.querySelector("#tema_1_knap").addEventListener("mousedown", tema1);
  document.querySelector("#tema_2_knap").addEventListener("mousedown", tema2);
  document.querySelector("#tema_3_knap").addEventListener("mousedown", tema3);
  document.querySelector("#tema_4_knap").addEventListener("mousedown", tema4);
  document.querySelector("#tema_5_knap").addEventListener("mousedown", tema5);
}

function hidePortfolio() {
  document.querySelector(".portfolio_content").classList.add("hide");
}

function hideAllScreens() {
  console.log("hideAllScreens");
  delayedLoad();

  document.querySelector("#tema_1_img").classList.add("hide");
  document.querySelector("#tema_1_h2").classList.add("hide");
  document.querySelector("#tema_1_p").classList.add("hide");
  document.querySelector("#tema_1_a").classList.add("hide");

  document.querySelector("#tema_2_img").classList.add("hide");
  document.querySelector("#tema_2_h2").classList.add("hide");
  document.querySelector("#tema_2_p").classList.add("hide");
  document.querySelector("#tema_2_a").classList.add("hide");

  document.querySelector("#tema_3_img").classList.add("hide");
  document.querySelector("#tema_3_h2").classList.add("hide");
  document.querySelector("#tema_3_p").classList.add("hide");
  document.querySelector("#tema_3_a").classList.add("hide");

  document.querySelector("#tema_4_img").classList.add("hide");
  document.querySelector("#tema_4_h2").classList.add("hide");
  document.querySelector("#tema_4_p").classList.add("hide");
  document.querySelector("#tema_4_a").classList.add("hide");

  document.querySelector("#tema_5_img").classList.add("hide");
  document.querySelector("#tema_5_h2").classList.add("hide");
  document.querySelector("#tema_5_p").classList.add("hide");
  document.querySelector("#tema_5_a").classList.add("hide");
}

function tema1() {
  console.log("tema1");
  hideAllScreens();
  document.querySelector(".portfolio_content").classList.remove("hide");
  document.querySelector("#tema_1_h2").classList.remove("hide");
  document.querySelector("#tema_1_img").classList.remove("hide");
  document.querySelector("#tema_1_p").classList.remove("hide");
  document.querySelector("#tema_1_a").classList.remove("hide");
  document.querySelector("#tema_1_knap").addEventListener("click", tema1);
}

function tema2() {
  console.log("tema2");
  hideAllScreens();
  document.querySelector(".portfolio_content").classList.remove("hide");
  document.querySelector("#tema_2_h2").classList.remove("hide");
  document.querySelector("#tema_2_img").classList.remove("hide");
  document.querySelector("#tema_2_p").classList.remove("hide");
  document.querySelector("#tema_2_a").classList.remove("hide");
  document.querySelector("#tema_2_knap").addEventListener("click", tema2);
}

function tema3() {
  console.log("tema3");
  hideAllScreens();
  document.querySelector(".portfolio_content").classList.remove("hide");
  document.querySelector("#tema_3_h2").classList.remove("hide");
  document.querySelector("#tema_3_img").classList.remove("hide");
  document.querySelector("#tema_3_p").classList.remove("hide");
  document.querySelector("#tema_3_a").classList.remove("hide");
  document.querySelector("#tema_3_knap").addEventListener("click", tema3);
}
function tema4() {
  console.log("tema4");
  hideAllScreens();
  document.querySelector(".portfolio_content").classList.remove("hide");
  document.querySelector("#tema_4_h2").classList.remove("hide");
  document.querySelector("#tema_4_img").classList.remove("hide");
  document.querySelector("#tema_4_p").classList.remove("hide");
  document.querySelector("#tema_4_a").classList.remove("hide");
  document.querySelector("#tema_4_knap").addEventListener("click", tema4);
}
function tema5() {
  console.log("tema5");
  hideAllScreens();
  document.querySelector(".portfolio_content").classList.remove("hide");
  document.querySelector("#tema_5_h2").classList.remove("hide");
  document.querySelector("#tema_5_img").classList.remove("hide");
  document.querySelector("#tema_5_p").classList.remove("hide");
  document.querySelector("#tema_5_a").classList.remove("hide");
  document.querySelector("#tema_5_knap").addEventListener("click", tema5);
}

/* Sætter delay på loading af scroll script */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* scroll script */
async function delayedLoad() {
  let progress = document.getElementById("progressbar");
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
  };
}
