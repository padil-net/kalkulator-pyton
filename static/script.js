function add(value){

    let screen = document.getElementById("screen");

    screen.value += value;

}


function clearScreen(){

    document.getElementById("screen").value = "";

}


function deleteLast(){

    let screen = document.getElementById("screen");

    // hapus 1 karakter paling belakang
    screen.value = screen.value.slice(0, -1);

}


function calculate(){

    let screen = document.getElementById("screen");

    let expression = screen.value;


    // ubah simbol tampilan ke operator komputer
    expression = expression.replaceAll("×", "*");
    expression = expression.replaceAll("÷", "/");


    // cegah pembagian dengan nol
    if(expression.includes("/0")){

        screen.value = "Tidak bisa dibagi 0";
        return;

    }


    try {

        screen.value = eval(expression);

    }

    catch {

        screen.value = "Input salah";

    }

}