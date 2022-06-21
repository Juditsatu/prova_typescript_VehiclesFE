"use strict";
var car;
function submitCar() {
    var errores = 0;
    var plateInput = document.getElementById("plateInput");
    var brandInput = document.getElementById("brandInput");
    var colorInput = document.getElementById("colorInput");
    //EX1. Validar los campos de matricula (formato: 1234ABC), marca y color, antes de hacer el new Car
    var validPlate = /^[0-9]{4}[A-Z]{3}/;
    var onlyLetters = /^[a-zA-Z]+$/;
    if (validPlate.test(plateInput.value) == false || onlyLetters.test(brandInput.value) == false || onlyLetters.test(colorInput.value) == false) {
        plateInput.classList.add('is-invalid');
        brandInput.classList.add('is-invalid');
        colorInput.classList.add('is-invalid');
        errores++;
    }
    else {
        plateInput.classList.remove('is-invalid');
        brandInput.classList.remove('is-invalid');
        colorInput.classList.remove('is-invalid');
        car = new Car(plateInput.value, colorInput.value, brandInput.value);
        showVehicle();
        showWheelForm();
    }
}
function showVehicle() {
    var carTitle = document.getElementById("carTitle");
    var plateOutput = document.getElementById("plateOutput");
    var brandOutput = document.getElementById("brandOutput");
    var colorOutput = document.getElementById("colorOutput");
    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + car.plate;
    brandOutput.innerText = "Brand: " + car.brand;
    colorOutput.innerText = "Color: " + car.color;
}
function submitWheelForm(event) {
    var errores = 0;
    var onlyLetters = /^[a-zA-Z]+$/;
    var diameterRequired = /[1-2]/;
    //EX2. Solo hacer el "new Wheel" si las 4 ruedas son correctas
    //EX3. Una rueda correcta deberá tener un diámetro entre 1 y 2. Crear una función para validarlas
    for (var i = 1; i <= 4; i++) {
        var brandWheel = document.getElementById("brandWheel" + i);
        var diameterWheel = document.getElementById("diameterWheel" + i);
        if (diameterRequired.test(diameterWheel.value) == false || onlyLetters.test(brandWheel.value) == false || diameterWheel.value == "") {
            diameterWheel.classList.add('is-invalid');
            brandWheel.classList.add('is-invalid');
            errores++;
        }
        else if (errores === 0) {
            diameterWheel.classList.remove('is-invalid');
            brandWheel.classList.remove('is-invalid');
            var wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            car.addWheel(wheel_generica);
        }
        ;
    }
    ;
    if (errores > 0) {
        alert("Please fill all fields");
    }
    else {
        showWheels();
    }
    ;
    console.log(car);
}
function showWheels() {
    //EX4. Optimizar la función showWheels
    var wheelTitle = document.getElementById("wheelTitle");
    for (var i = 1; i <= 4; i++) {
        var wheelOutput = document.getElementById("wheelOutput" + i);
        wheelTitle.innerText = "Wheels:";
        wheelOutput.innerText = "Wheel ".concat(i, ":  Brand: ").concat(car.wheels[i - 1].brand, "  Diameter: ").concat(car.wheels[i - 1].diameter);
    }
}
function showWheelForm() {
    var carForm = document.getElementById("create-car-form");
    var carWheel = document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}
