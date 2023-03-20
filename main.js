let pennies = 1;

function handleClick() {
  console.log("I'm just to prove it's working!");
  pennies = pennies *2;
  console.log(pennies);
  let newNumber = document.querySelector("output");
  newNumber.textContent = `${pennies} pennies`;
  // Add a new line of code that double the pennies
        // work out the code syntax that doubles a number DONE
        // make it happen when the button is clicked DONE
        // add a return feature of this new doubled number DONE
}

// Use the pennies variable to update the textContent of the output tag to be ${pennies} pennies.
        // the output tag takes the returned number ${pennies} DONE
        // update the textContent with this feature DONE

let additionalTips = [
  "Keep your pennies is a glass jar",
  "Pick up every penny you find on the ground!",
  "Don't let your partner know...",
];

let newQuote = document.querySelector(".quote");
newQuote.textContent = ("Yay, you did it!");

let newHeader = document.querySelector("h1");
newHeader.style.textDecoration = "underline";

document.title = ("New Test Title!");

let newP = document.createElement(p);
newP.textDocument = "Hello, world I love this";
document.(#proof-section).appendChild(newP);



/*
var div = document.getElementyById("yourDivId");
div.appendChild("yourContent");