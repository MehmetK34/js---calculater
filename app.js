const previous = document.querySelector(".previous-display");
const current = document.querySelector(".current-display");
const buttons = document.querySelector(".buttons-container");

//? THERE ARE GLOBAL
let altSatir = "";
let ustSatir = "";
let operator = "";

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    sayiyiAl(e.target.textContent);
    yazdirilanAlan();
  }

  if (e.target.classList.contains("operator")) {
    choose(e.target.textContent);
    yazdirilanAlan();
  }

  if (e.target.classList.contains("equal")) {
    hesapla();
    yazdirilanAlan();
  }

  if (e.target.classList.contains("pm")) {
    if (!altSatir) return;
    altSatir *= -1;
    yazdirilanAlan();
  }

  if (e.target.classList.contains("percent")) {
    if (!altSatir) return;
    altSatir /= 100;
    yazdirilanAlan();
  }

  if (e.target.classList.contains("ac")) {
    altSatir = "";
    ustSatir = "";
    operator = "";
    yazdirilanAlan();
  }
});

const sayiyiAl = (num) => {
  if (num == "0" && altSatir === "0") return; //? ilk baslangicta sadece bir defa 0 (sifir) yazabilmek icin yazdik.
  if (num !== "." && altSatir === "0") {
    //? burada 02 / 05 vs. gibi sayilar yazmamamiz icin yazdim.
    altSatir = num;
    return;
  }
  if (num == "." && altSatir.includes(".")) return;
  if (altSatir.length > 10) return; //? sadece 10 tane rakam giriliyor.
  altSatir += num;
  // console.log(altSatir);
};

const choose = (op) => {
  operator = op;
  ustSatir = altSatir;
  altSatir = "";
  //   console.log(operator);
};

const hesapla = () => {
  let calculation = 0;
  const sayi1 = Number(ustSatir);
  const sayi2 = Number(altSatir);
  console.log(sayi1);
  console.log(sayi2);

  switch (operator) {
    case "+":
      calculation = sayi1 + sayi2;
      break;
    case "-":
      calculation = sayi1 - sayi2;
      break;
    case "x":
      calculation = sayi1 * sayi2;
      break;
    case "÷":
      calculation = sayi1 / sayi2;
      break;

    default:
      return;
  }

  altSatir = calculation; //?
  ustSatir = "";
  operator = "";
};

const yazdirilanAlan = () => {
  previous.textContent = `${ustSatir}${operator}`;
  current.textContent = altSatir;
};
