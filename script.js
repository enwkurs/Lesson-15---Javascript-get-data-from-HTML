// greetingInput
// numberInput
// emailInput
// submitButton
// displayFormInputs

// H = Henter noe
//
const submitButton = document.querySelector("#submitButton");
console.log(submitButton + "Button existence check");
// WORD OUTPUT MUST BE IN " " OR IT THINKS ITS CODE


// M = Modifisere noe
//
// Create the function that you want to happen, give it a name
function gatherData(){
  console.log("Button Clicked");

  // H = Henter noe - Get something
  const greetingInput = document.querySelector("#greetingInput");
  const greetingInputValue = greetingInput.value;
  // .value takes the value that is inside the input box
  // can also add .value at the end of a querySelector --- querySelector("#name").value;
  console.log(greetingInput);
  console.log(greetingInputValue);

  const displayFormInputs = document.querySelector("#displayFormInputs");
  console.log(displayFormInputs + "Form inputs existence check");

  const numberInput = document.querySelector("#numberInput");
  const numberInputValue = numberInput.value;
  console.log(numberInput + "Number input exists");
  console.log(numberInputValue + "Number input value exists");

  // L = Lage Elementer - Create a new element
  const displayGreeting = document.createElement("p");
  // ^ creates a new <p> element to display data inside of

  // M = Modifisere noe - Modify something
  displayFormInputs.textContent = `${greetingInputValue} ${numberInputValue}`;
  // This will display data inside of pre-defined elements based on their id, requires the element to already exist in HTML

  // displayFormInputs.textContent = greetingInputValue;
  // displayFormInputs.textContent = numberInputValue;
  // This will not function because the lowest line will overwite the other and everything won't show

  displayGreeting.textContent = greetingInputValue;
  displayFormInputs.appendChild(displayGreeting);
  // ^ displays defined data inside the created <p> element
  // This is an alternative method

  // S = Sender noe

}

// S = Sender noe - Send something
// Call back to the name of your function here - "gatherData" is the name of the function - define when this function is triggered
submitButton.addEventListener("click", gatherData);
