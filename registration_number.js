
let button = document.querySelector(".submit");
let input = document.querySelector(".inputText");
let menu = document.querySelector(".menu");
let display = document.querySelector(".displayNumbers");
let filter = document.querySelector(".filter");
let select = document.getElementById("select").selectedIndex;
let option = document.getElementsByTagName("option")[select].value;
let regNumber = "";
let count = 1;

let registrationNumbers = {};
let capeRegNumbers = {};
let paarlRegNumbers = {}
let bellvilleRegNumbers = {};

function addRegNumbers() {

	regNumber = input.value;
	let varr = "reg_number" + count;
	if (regNumber) {

		let regNum = regNumber.trim().toUpperCase();

		if (!(registrationNumbers.hasOwnProperty(regNum))) {

			if (regNum.substring(0, 2) === "CA") {

				count++;
				capeRegNumbers[regNum] = varr;
				registrationNumbers[regNum] = "Cape Town";



				console.log(JSON.stringify(registrationNumbers));
			}

			else if (regNum.substring(0, 2) === "CJ") {

				count++;
				paarlRegNumbers[regNum] = varr;
				registrationNumbers[regNum] = "Paarl";

				console.log(JSON.stringify(registrationNumbers));
			}

			else if (regNum.substring(0, 2) === "CY") {

				count++;
				bellvilleRegNumbers[regNum] = varr;
				registrationNumbers[regNum] = "Bellville";

				console.log(JSON.stringify(registrationNumbers));

			}

		}

	}

	input.value = ""
}
button.addEventListener("click", addRegNumbers);

function show() {

	alert("filter")
}


filter.addEventListener("click", show);
