
// Retrieve the student's name from the input field.
// Generate a random number to represent one of the four houses.
// Map the random number to one of the houses (e.g., 0 for Gryffindor, 1 for Hufflepuff, 2 for Ravenclaw, 3 for Slytherin).
// Display the assigned house to the user.

const wizards = [
    {
      id: 1,
      name: "Snape",
      house: "Slytherin",
      imageUrl: "https://hips.hearstapps.com/cos.h-cdn.co/assets/16/02/1024x768/sd-aspect-1452789266-professor-severus-snape-harry-potter-1.jpg?resize=1200:*",
    },
    {
      id: 2,
      name: "Harry Potter",
      house: "Griffindore",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/mv5bogi0ogi5ztmtnwm4ys00zwizlthmymytzgnknzdkotnjndkxxkeyxkfqcgdeqxvynjq4ode4mzqat-v1-sy1000-cr0-0-1528-1000-al-1589922130.jpg?crop=0.656xw:1.00xh;0.119xw,0&resize=640:*",
    }
]

    const targetingApp = document.querySelector("#app");
app.innerHTML = "Hello!"; // we set the inner HTML text to Hello!

const renderToDom = (array) => {
  let domString = ""

  for(const wizard of array){ 
    domString += `<div class="card myWizardCard" style="width: 18rem">
      <div class="card-header">
        ${wizard.name}
      </div>
      <img src="${wizard.imageUrl}" class="card-img-top" alt="${wizard.name}">
      <div class="card-body">
      <h5 class="card-title">${wizard.house}</h5>
      </div>
      <div class="card-body">
      </div>
      <a href="#" class="btn btn-outline-danger" id="expel--${wizard.id}">Expel</a>
     </div>
    </div>`
  }
  const appDiv = document.querySelector("#app")
  appDiv.innerHTML = domString
}
renderToDom(wizards)

  const slytherinButton = document.querySelector("#Slythein") //So, this line of code is finding the HTML element that has id="Slytherin" in your webpage and assigning it to the variable SlytherinButton. 
  const griffindoreButton = document.querySelector("#Griffindore")
  const ravenclawButton = document.querySelector("#Ravenclaw")
  const hufflepuffButton = document.querySelector("#Hufflepuff")
  const allButton = document.querySelector("#All")

  const filter = (wizardType) => { 
    let wizardArray = []; //initialized an empty array! 
    
    for (wizard of array) //iterates through each wizard object in the array. For each wizard:
    if(wizard.house === wizardType){ 
    wizardArray.push(wizard) ////so. the entire array, You can use this method to dynamically add elements to an array
  }
  renderToDom(wizardArray) 
//   //After looping through all the wizards in the array, the wizardArray contains only the wizards of the specified wizardType
//Finally, the renderToDom(wizardArray) function is called to update the DOM and display the filtered wizards.
//This function is a simple filter that takes an array of wizards and returns a new array containing only wizards of a specific type.
}

slytherinButton.addEventListener('click', () => {
  filter(wizards, "Slytherin")
    }) 

griffindoreButton.addEventListener('click', () => {
  filter(wizards, "Griffindore")
})

ravenclawButton.addEventListener('click', () => {
  filter(wizards, "Ravenclaw")
})

hufflepuffButton.addEventListener('click', () => {
    filter(wizards, "Hufflepuff")
  })

allButton.addEventListener("click" , () => {
  renderToDom(wizards)
})