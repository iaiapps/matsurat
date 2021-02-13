<<<<<<< HEAD
const jsonurl = "source/dzikrpetang.json";

// cara panggil json
async function readjson() {
  let respone = await fetch(jsonurl);
  let data = await respone.json();

  //inisiasi variabel
  let index = 0;
  let dzikr = data[index];

  let prev = document.getElementById("prev");
  let next = document.getElementById("next");

  //tampilkan awal
  displayItem(dzikr);

  //buttonprev
  prev.addEventListener("click", function () {
    displayItem(data[--index]);
  });

  //butonnext
  next.addEventListener("click", function () {
    displayItem(data[++index]);
  });

  //fungsi display item
  function displayItem(dzikr) {
    document.getElementById("judul").innerText = dzikr.name + " " + dzikr.note;
    document.getElementById("arab").innerText = dzikr.text;
    document.getElementById("trans").innerText = dzikr.trans;

    if (index <= 0) {
      prev.style.opacity = 0.5;
      prev.style.pointerEvents = "none";
    } else {
      prev.style.opacity = 1;
      prev.style.pointerEvents = "auto";
    }

    if (index >= data.length - 1) {
      next.style.pointerEvents = "none";
      next.style.opacity = 0.5;
    } else {
      next.style.opacity = 1;
      next.style.pointerEvents = "auto";
    }
  }
}

//menjalankan readjson
readjson();
=======
const jsonurl = "source/dzikrpetang.json";

// cara panggil json
async function readjson() {
  let respone = await fetch(jsonurl);
  let data = await respone.json();

  //inisiasi variabel
  let index = 0;
  let dzikr = data[index];

  let prev = document.getElementById("prev");
  let next = document.getElementById("next");

  //tampilkan awal
  displayItem(dzikr);

  //buttonprev
  prev.addEventListener("click", function () {
    displayItem(data[--index]);
  });

  //butonnext
  next.addEventListener("click", function () {
    displayItem(data[++index]);
  });

  //fungsi display item
  function displayItem(dzikr) {
    document.getElementById("judul").innerText = dzikr.name + " " + dzikr.note;
    document.getElementById("arab").innerText = dzikr.text;
    document.getElementById("trans").innerText = dzikr.trans;

    if (index <= 0) {
      prev.style.opacity = 0.5;
      prev.style.pointerEvents = "none";
    } else {
      prev.style.opacity = 1;
      prev.style.pointerEvents = "auto";
    }

    if (index >= data.length - 1) {
      next.style.pointerEvents = "none";
      next.style.opacity = 0.5;
    } else {
      next.style.opacity = 1;
      next.style.pointerEvents = "auto";
    }
  }
}

//menjalankan readjson
readjson();
>>>>>>> 3ee77ea (update favicon)
