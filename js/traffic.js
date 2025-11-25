const merah = document.querySelector("#lampu-merah");
const kuning = document.querySelector("#lampu-kuning");
const hijau = document.querySelector("#lampu-hijau");

const lampu = [merah, kuning, hijau];
const warna = ["red", "yellow", "green"];
const durasi = [3000, 2000, 3000]; // ms

let index = 0;

function nyalakanLampu() {
  lampu.forEach((el) => (el.style.backgroundColor = "#333"));

  lampu[index].style.backgroundColor = warna[index];

  const waktu = durasi[index];

  setTimeout(() => {
    index = (index + 1) % lampu.length;
    nyalakanLampu();
  }, waktu);
}

export function main() {
  nyalakanLampu();
}
