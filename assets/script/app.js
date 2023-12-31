const parentContainer = document.querySelector("[data-value-parent]"); //MAIN PARENT
const buttonContainer = document.querySelector("[data-value-button]"); //MAIN BUTTON

const subtractButton = document.createElement("div"); //CREATE SUBTRACT BUTTON
subtractButton.classList.add("subtract-one");
subtractButton.textContent = "-";
parentContainer.appendChild(subtractButton);

const displayNumber = document.createElement("div"); // CREATE DISPLAY NUMBER 
displayNumber.classList.add("number-display");
displayNumber.textContent = "0";
parentContainer.appendChild(displayNumber);

const addButton = document.createElement("div"); // CREATE ADD ONE BUTTON
addButton.classList.add("add-one");
addButton.textContent = "+";
parentContainer.appendChild(addButton);

const autoButton = document.createElement("div"); // CREATE AUTO BUTTON
autoButton.classList.add("auto");
autoButton.textContent = "AUTO";
buttonContainer.appendChild(autoButton);

const cancButton = document.createElement("div"); // CREATE RESET BUTTON
cancButton.classList.add("canc");
cancButton.textContent = "RESET";
buttonContainer.appendChild(cancButton);


class Counter {
    constructor(){
        this.contatore = 0;
        this.autoRunning = false;
        this.interval = null;
        this.alertElementExist = false;
    }

    subtract(){
        if(window.innerWidth > 850 && this.contatore == -999999) {
            displayNumber.textContent = "Stop!";
        }else if(window.innerWidth < 850 && window.innerWidth > 500 && this.contatore == -999999){
            displayNumber.textContent = "Stop!";
        }else if(window.innerWidth < 501 && this.contatore == -999){
            displayNumber.textContent = "Stop!";
        }else{
            if(this.autoRunning == false){
                this.contatore--;
                displayNumber.textContent = this.contatore;
            }else{
                setTimeout(() => {
                    displayNumber.textContent = "";
                    const alertElement = document.createElement("div");
                    alertElement.classList.add("alert");
                    alertElement.innerHTML = `<p><i class="fa fa-exclamation-triangle"></i><br>"Auto" in progress...</p>`;
                    displayNumber.appendChild(alertElement);
                    this.alertElementExist = true;
                    setTimeout(() => {
                        displayNumber.textContent = this.contatore;
                        alertElement.style.display = "none";
                        this.alertElementExist = false;
                    }, 2000);
                }, 0);
                return;
            }
        }
    }

    add(){
        if(window.innerWidth > 850 && this.contatore > 9999998) {
            displayNumber.textContent = "Stop!";
        }else if(window.innerWidth < 850 && window.innerWidth > 500 && this.contatore > 999998){
            displayNumber.textContent = "Stop!";
        }else if(window.innerWidth < 500 && this.contatore > 998){
            displayNumber.textContent = "Stop!";
        }else{
            if(this.autoRunning == false) {
                this.contatore++;
                displayNumber.textContent = this.contatore;
            }else{
                setTimeout(() => {
                    displayNumber.textContent = "";
                    const alertElement = document.createElement("div");
                    alertElement.classList.add("alert");
                    alertElement.innerHTML = `<p><i class="fa fa-exclamation-triangle"></i><br>"Auto" in progress...</p>`;
                    displayNumber.appendChild(alertElement);
                    this.alertElementExist = true;
                    setTimeout(() => {
                        displayNumber.textContent = this.contatore;
                        alertElement.style.display = "none";
                        this.alertElementExist = false;
                    }, 2000);
                }, 0);
                return;
            }
        }
    }

    auto(){
        if(this.autoRunning == false){
            this.interval = setInterval( () => {
                if(window.innerWidth > 850 && this.contatore > 9999998) {
                    displayNumber.textContent = "Stop!";
                }else if(window.innerWidth < 850 && window.innerWidth > 500 && this.contatore > 999998){
                    displayNumber.textContent = "Stop!";
                }else if(window.innerWidth < 500 && this.contatore > 998){
                    displayNumber.textContent = "Stop!";
                }else{
                    if(this.alertElementExist == false){
                        this.contatore++;
                        displayNumber.textContent = this.contatore;
                    }else{
                        this.contatore++;
                    }
                }
            }, 1000);
            autoButton.textContent = "STOP";
            this.autoRunning = true;
        } else {
            this.interval = clearInterval(this.interval);
            autoButton.textContent = "AUTO";
            this.autoRunning = false;
        }
    }

    canc(){
        clearInterval(this.interval);
        this.contatore = 0;
        displayNumber.textContent = "0";
    }

}

let counter = new Counter();

subtractButton.addEventListener("click", () => {
    counter.subtract();
});

addButton.addEventListener("click", () => {
    counter.add();
});

autoButton.addEventListener("click", () => {
    counter.auto();
});

cancButton.addEventListener("click", () => {
    counter.canc();
    autoButton.textContent = "AUTO";
    counter.autoRunning = false;
})

document.addEventListener("keydown", (e) => {
    if(e.key == "ArrowUp"){
        counter.add();
    }else if(e.key == "ArrowDown"){
        counter.subtract();
    }else if(e.key == "a" || e.key == "A"){
        counter.auto();
    }else if (e.key == "r" || e.key == "R"){
        counter.canc();
    }else{
        return;
    }
})
