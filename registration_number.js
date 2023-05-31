
let button = document.querySelector(".submit");
let input = document.querySelector(".inputText");
let menu = document.querySelector(".menu");
let display = document.querySelector(".displayNumbers");
let filter = document.querySelector(".filter");
let select = document.querySelector(".select");
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
	
while (display.hasChildNodes()){
               display.removeChild(display.firstChild);
               }
 
if(select.value==="All"){

for( let reg in registrationNumbers){
	
var para= document.createElement("p");
para.innerText=reg;
para.style.background="#FFE1A0";
para.style.width="100px";
para.style.borderRadius="2px 2px";
display.appendChild(para);
}
}          

else if(select.value==="Cape Town"){
         
for(let  reg in capeRegNumbers){
	
var para= document.createElement("p");
para.innerText=reg;
para.style.background="#FFE1A0";
para.style.width="100px";
para.style.borderRadius="2px 2px";
display.appendChild(para);
}


}

else if(select.value==="Paarl"){

for( let reg in paarlRegNumbers){
	
var para= document.createElement("p");
para.innerText=reg;
para.style.background="#FFE1A0";
para.style.width="100px";
para.style.borderRadius="2px 2px";
display.appendChild(para);
}
}

else if(select.value==="Bellville"){

for(let reg in bellvilleRegNumbers){
	
var para= document.createElement("p");
para.innerText=reg;
para.style.background="#FFE1A0";
para.style.width="100px";
para.style.borderRadius="2px 2px";
display.appendChild(para);
}



}


}


filter.addEventListener("click", show);
