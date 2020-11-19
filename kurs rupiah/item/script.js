function ubah() {
    let Nilai = Number(document.getElementById("nilai").value);
    let pilihan = document.getElementById("kurs").value;
    let dl = Number("9915");
    let dlsg = Number("13472");
    let rm = Number("874");
    let yj = Number("120");
    let eu = Number("15888");
    let ras = Number("3592");
    if (isNaN(Nilai)) {
        alert('isi form dengan angka!');
    } else {
        if (pilihan == "dollar") {
            hasil = Nilai * dl;
            document.getElementById("hasil").innerHTML = "Rp." + hasil;
        }
        if (pilihan == "dollarsg") {
            hasil = Nilai * dlsg;
            document.getElementById("hasil").innerHTML = "Rp." + hasil;;
        }
        if (pilihan == "ringgit") {
            hasil = Nilai * rm;
            document.getElementById("hasil").innerHTML = "Rp." + hasil;;
        }
        if (pilihan == "yen") {
            hasil = Nilai * yj;
            document.getElementById("hasil").innerHTML = "Rp." + hasil;;
        }
        if (pilihan == "euro") {
            hasil = Nilai * eu;
            document.getElementById("hasil").innerHTML = "Rp." + hasil;;
        }
        if (pilihan == "riyal") {
            hasil = Nilai * ras;
            document.getElementById("hasil").innerHTML = "Rp." + hasil;;
        }
    }
}