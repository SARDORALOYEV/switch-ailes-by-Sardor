const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button10 = document.getElementById("button10");
const button11 = document.getElementById("button11");
const button12 = document.getElementById("button12");

buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12];

buttons.forEach((button, index) => {
  button.addEventListener("click", function() {
    const buttonNumber = index + 1;
    let nomi = '';
    let narxi = 0;

    switch (buttonNumber) {
      case 1:
        nomi = 'Qiyqiriq сет';
        narxi = 45000;
        break;
      case 2:
        nomi = 'Снек сет';
        narxi = 79000;
        break;
      case 3:
        nomi = 'Классик сет';
        narxi = 34000;
        break;
      case 4:
        nomi = 'Лонгер рингс сет';
        narxi = 45000;
        break;
      case 5:
        nomi = 'Биг сет';
        narxi = 62000;
        break;
      case 6:
        nomi = 'Лестер сет';
        narxi = 53000;
        break;
      case 7:
        nomi = 'Скул сет';
        narxi = 36000;
        break;
      case 8:
        nomi = 'Комбо сет Большой';
        narxi = 20000;
        break;
      case 9:
        nomi = 'Do’stlar 1х';
        narxi = 43000;
        break;
      case 10:
        nomi = 'Do’stlar 2х';
        narxi = 79000;
        break;
      case 11:
        nomi = 'Do’stlar 4х';
        narxi = 149000;
        break;
      case 12:
        nomi = 'Острый Do’stlar 1х';
        narxi = 43000;
        break;
      default:
        break;
    }

    const zakazNum = prompt(`${nomi} dan nechta zakaz qilmoqchisiz?`);
    if (zakazNum !== null && !isNaN(zakazNum) && zakazNum > 0) {
      const jami = narxi * zakazNum;
      alert(`Jami narx: ${jami} so'm`);

      const confirmOrder = confirm(`Mahsulotni zakaz qilmoqchimisiz?\n${nomi}: ${zakazNum} dona\nJami narx: ${jami} so'm`);
      if (confirmOrder) {
        alert("Sizning zakazingiz qabul qilindi!");
      } else {
        alert("Zakaz bekor qilindi.");
      }
    } else {
      alert("Iltimos, to'g'ri son kiriting.");
    }
  });
});
