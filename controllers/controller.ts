let car: Car;


function submitCar() {
    let errores = 0;
    let plateInput = <HTMLInputElement>document.getElementById("plateInput");
    let brandInput = <HTMLInputElement>document.getElementById("brandInput");
    let colorInput = <HTMLInputElement>document.getElementById("colorInput");

	//EX1. Validar los campos de matricula (formato: 1234ABC), marca y color, antes de hacer el new Car
	const validPlate = /^[0-9]{4}[A-Z]{3}/;
    const onlyLetters = /^[a-zA-Z]+$/;
    
    plateInput.classList.remove("is-invalid");
    brandInput.classList.remove("is-invalid");
    colorInput.classList.remove("is-invalid");

    if (validPlate.test(plateInput.value) == false) {
      plateInput.classList.add("is-invalid");
      errores++;
    }

    if (onlyLetters.test(brandInput.value) == false) {
      brandInput.classList.add("is-invalid");
      errores++;
    }

    if (onlyLetters.test(colorInput.value) == false) {
      colorInput.classList.add("is-invalid");
      errores++;
    }

    if (errores == 0) {
      car = new Car(plateInput.value, colorInput.value, brandInput.value);
      showVehicle();
      showWheelForm();
    }

}

function showVehicle() {
    let carTitle = <HTMLInputElement>document.getElementById("carTitle");
    let plateOutput = <HTMLInputElement>document.getElementById("plateOutput");
    let brandOutput = <HTMLInputElement>document.getElementById("brandOutput");
    let colorOutput = <HTMLInputElement>document.getElementById("colorOutput");

    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + car.plate;
    brandOutput.innerText = "Brand: " + car.brand;
    colorOutput.innerText = "Color: " + car.color;

}

function validateDiameter(diameter: number) {
    return diameter < 2 || diameter > 0 ? true : false;
}

function submitWheelForm() {
    let errores = 0;
    const onlyLetters = /^[a-zA-Z]+$/;

	//EX2. Solo hacer el "new Wheel" si las 4 ruedas son correctas
	//EX3. Una rueda correcta deberá tener un diámetro entre 1 y 2. Crear una función para validarlas

	for (let i = 1; i <= 4; i++) {
		let brandWheel = <HTMLInputElement>document.getElementById("brandWheel" + i);
		let diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel" + i);

        diameterWheel.classList.remove('is-invalid');
        brandWheel.classList.remove('is-invalid');
        
        let checkDiameter = validateDiameter(Number(diameterWheel.value)) == false;
        
        //Validate if wheel contains numbers between 1 and 2
        if (checkDiameter || diameterWheel.value == "") {
            diameterWheel.classList.add('is-invalid');
            errores++;
        }
        //Validate if brand contains only letters
        if (onlyLetters.test(brandWheel.value) == false) {
            brandWheel.classList.add('is-invalid');
            errores++;
        }
	};

    if (errores == 0) {
        for (let i = 1; i <= 4; i++) {
            let brandWheel = <HTMLInputElement>document.getElementById("brandWheel" + i);
		    let diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel" + i);
            
            let wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            car.addWheel(wheel_generica);
        }
        showWheels();
    } else {
        alert("Please fill all fields");
    }

	console.log(car);
}

function showWheels() {
	//EX4. Optimizar la función showWheels
    let wheelTitle = <HTMLInputElement>document.getElementById("wheelTitle");
    for (let i = 1; i <= 4; i++) {
        let wheelOutput = <HTMLInputElement>document.getElementById("wheelOutput"+i);
        wheelTitle.innerText = "Wheels:";
        wheelOutput.innerText = `Wheel ${i}:  Brand: ${car.wheels[i-1].brand}  Diameter: ${car.wheels[i-1].diameter}`;
    }
}


function showWheelForm() {
    let carForm = <HTMLInputElement>document.getElementById("create-car-form");
    let carWheel = <HTMLInputElement>document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";

}