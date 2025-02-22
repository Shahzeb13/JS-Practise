
  
  /* script.js */
  let calculation = localStorage.getItem('calculation') || "";
  updateScreen();
  
  function updateCalculation(character) {
    calculation += character;
    localStorage.setItem('calculation', calculation);
    updateScreen();
  }
  
  function calculate() {
    try {
      calculation = eval(calculation).toString();
      localStorage.setItem('calculation', calculation);
      updateScreen();
    } catch {
      calculation = "Error";
      updateScreen();
      setTimeout(() => {
        clearCal();
      }, 1000);
    }
  }
  
  function clearCal() {
    calculation = "";
    localStorage.removeItem("calculation");
    updateScreen();
  }
  
  function updateScreen() {
    document.getElementById("screen").innerText = calculation || "0";
  }
  
 
  