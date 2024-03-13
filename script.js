function calculateBMI() {
  console.log("ABC");
  // Retrieve weight, height, and gender values from the form
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var gender = document.querySelector('input[name="gender"]:checked').value;

  // Calculate BMI
  var bmi = weight / ((height / 100) * (height / 100));

  // Determine BMI category
  var category;
  if (bmi < 18.5) {
    category1 = "kurang dari 18.5";
    category = "KEKURANGAN BERAT BADAN";
    category3 = "Anda memiliki berat badan kurang";
    category2 =
      "Cara terbaik untuk menaikan berat badan adalah dengan mengatur makan dan tidur anda, upayakan sehabis makan anda langsung tidur <br> jika BMI anda berada dalam kategori ini, maka anda dianjurkan untuk menaikan berat batas ke batas normal";
    category4 = "Cacingan <br> sering lapar <br> Stunting";
  } else if (bmi >= 18.5 && bmi < 25) {
    category1 = " diantara 18.5 dan 24.9";
    category = "NORMAL (IDEAL)";
    category3 = "Anda memiliki berat badan ideal";
    category2 =
      "Berat badan anda sudah ideal, silahkan melanjutkan hidup anda yang sempurna";
    category4 = "Tidak ada, ANDA SEMPURNA";
  } else if (bmi >= 25 && bmi < 30) {
    category1 = "diantara 25.0 dan 29.9";
    category = "KELEBIHAN BERAT BADAN";
    category3 = "Anda memiliki berat badan berlebih";
    category2 =
      "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikomsumsi dan berolahraga <br> jika BMI anda berada dalam kategori ini, maka anda dianjurkan untuk menurunkan berat badan ke batas normal";
    category4 =
      "Diabetes <br> Hipertensi <br> Sakit Jantung <br> Osteoarthritis";
  } else {
    category1 = " lebih dari 30.0";
    category = "KEGEMUKAN (OBESITAS)";
    category3 = "Anda memiliki berat badan berlebih";
    category2 =
      "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikomsumsi dan berolahraga <br> jika BMI anda berada dalam kategori ini, maka anda dianjurkan untuk menurunkan berat badan ke batas normal";
    category4 =
      "Diabetes <br> Hipertensi <br> Sakit Jantung <br> Osteoarthritis";
  }

  // Additional information based on gender
  var genderInfo = "";
  if (gender === "male") {
    genderInfo = "Male-specific additional information.";
  } else if (gender === "female") {
    genderInfo = "Female-specific additional information.";
  }

  // Display result
  var resultElement = document.getElementById("result");
  resultElement.style.textAlign = "center";
  resultElement.innerHTML =
    category +
    "<br><br><br>" +
    "<h1>" +
    bmi.toFixed(2) +
    "</h1>" +
    "<br><br>" +
    category3 +
    "<br><br>" +
    " <button style='height:40px;background-color:#007bff; border-color:#fff;color:#fff' type='button' onclick='kosongan()'>Download hasil BMI</button>";

  var resultElementF = document.getElementById("resultF");
  resultElementF.style.textAlign = "left";
  resultElementF.innerHTML =
    "Hasil BMI  " +
    category1 +
    "<br>" +
    "Anda berada dalam kategori " +
    category +
    "<br>" +
    category2 +
    "<br><br>" +
    "<button style='background-color:#007bff; border-color:#fff;height:40px;color:#fff;'type='button' onclick='kosongan()'>Konsultasi Ahli Via Aplikasi</button>   " +
    "<button style='background-color:#007bff; border-color:#fff;height:40px;color:#fff;'type='button' onclick='kosongan()''>Registrasi Online Ahli Gizi</button>" +
    "<br><br>" +
    "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. <br>Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";

  var resultElementL = document.getElementById("resultL");
  resultElementL.style.textAlign = "center";
  resultElementL.innerHTML =
    "Beberapa penyakit yang berasal dari " +
    category +
    "<br><br>" +
    category4 +
    "<br><br>" +
    "<button style='background-color:#007bff; border-color:#fff;height:40px;color:#fff;'type='button' onclick='kosongan()'>Konsultasi Dokter Via Aplikasi</button>   " +
    "<button style='background-color:#007bff; border-color:#fff;height:40px;color:#fff;'type='button' onclick='kosongan()''>Registrasi Online Sekarang</button>";
  var resultElementD = document.getElementById("resultD");
  resultElementD.style.textAlign = "center";
  resultElementD.innerHTML =
    "Download Aplikasi" +
    "<br><br>" +
    "<button type='button' onclick='kosongan()'><img style='width:170px;height:50px;'src='ios.png' alt='ios'></button>   " +
    "<button type='button' onclick='kosongan()'><img style='width:170px;height:50px;'src='ps.png' alt='ps'></button>";
}
function resetForm() {
  // Reset form fields and
  console.log("ABC");
  document.getElementById("bmiForm").reset();
  document.getElementById("result").innerHTML = "";
}

function kosongan() {
  console.log("KOSONGAN");
}
