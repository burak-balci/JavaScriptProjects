const menu = [
  {
    test1:
      "Boyunuza göre uygun ağırlıkta olmadığınızı, zayıf olduğunuzu gösterir. Zayıflık, bazı hastalıklar için risk oluşturan ve istenmeyen bir durumdur. Boyunuza uygun ağırlığa erişmeniz için yeterli ve dengeli beslenmeli, beslenme alışkanlıklarınızı geliştirmeye özen göstermelisiniz.",
  },
  {
    test2:
      "Boyunuza göre uygun ağırlıkta olduğunuzu gösterir. Yeterli ve dengeli beslenerek ve düzenli fiziksel aktivite yaparak bu ağırlığınızı korumaya özen gösteriniz.",
  },
  {
    test3:
      "Boyunuza göre vücut ağırlığınızın fazla olduğunu gösterir. Fazla kilolu olma durumu gerekli önlemler alınmadığı takdirde pek çok hastalık için risk faktörü olan obeziteye (şişmanlık) yol açar.",
  },
  {
    test4:
      "Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz.",
  },
];

let button = document.querySelector(".btn");
let bmi = document.querySelector(".bmi");
button.addEventListener("click", calculate);

function calculate() {
  let kgInput = document.querySelector(".kgInput").value;
  let boyInput = document.querySelector(".boyInput").value;
  let total = Math.round(kgInput / boyInput / boyInput);

  if (total > 0 && total < 18) {
    createContent(0, total);
  } else if (total >= 18 && total < 25) {
    createContent(1, total);
  } else if (total >= 25 && total < 30) {
    createContent(2, total);
  } else if (total >= 30) {
    createContent(3, total);
  }
}

function createContent(test, total) {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  bmi.append(ul);
  ul.textContent = "Vücut Kitle İndeksiniz : " + total;
  ul.append(li);
  li.innerHTML = Object.values(menu[test]);
}
