const jsonurl = "source/data.json";

// cara panggil json
async function readjson() {
  let respone = await fetch(jsonurl);
  let data = await respone.json();

  //inisiasi variabel
  let index = 0;
  let item = data.dzikirPagi[index];

  //inisiasi button
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");

  //tampilkan awal
  displayItem(item);

  //buttonprev
  prev.addEventListener("click", function () {
    displayItem(data.dzikirPagi[--index]);
  });

  //butonnext
  next.addEventListener("click", function () {
    displayItem(data.dzikirPagi[++index]);
  });

  //fungsi display item
  function displayItem(dzikirPagi) {
    document.getElementById("judul").innerText = dzikirPagi.judul;
    document.getElementById("arab").innerText = dzikirPagi.arab;
    document.getElementById("latin").innerText = dzikirPagi.latin;

    if (index <= 0) {
      prev.style.opacity = 0.5;
      prev.style.pointerEvents = "none";
    } else {
      prev.style.opacity = 1;
      prev.style.pointerEvents = "auto";
    }

    if (index >= data.dzikirPagi.length - 1) {
      next.style.pointerEvents = "none";
      next.style.opacity = 0.5;
    } else {
      next.style.opacity = 1;
      next.style.pointerEvents = "auto";
    }
    //prev.disabled = index <= 0;
    //next.disabled = index >= data.item.length - 1;
  }
}

//menjalankan readjson
readjson();
