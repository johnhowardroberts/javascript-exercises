

// SAMPLE ENTRY

const person = {
  firstName: "John",
  lastName: "Roberts",
}

window.localStorage.setItem('entry', JSON.stringify(person));
console.log(person);
console.log("SAMPLE NAME HAS BEEN STORED");

// ADD AN ENTRY TO THE BOOK

var entries = [];

const addEntry = function(event) {
  // event.preventDefault();  //to stop the form submitting
  let entry = {
    firstName: entries.push(document.getElementById("firstName").value),
    lastName: entries.push(document.getElementById("lastName").value),
    dob: entries.push(document.getElementById("dateOfBirth").value),
  }
  entries.push(entry);
  console.log(entries);
  console.log("ENTRY ADDED!");
}

// SEARCH FOR AN ENTRY IN THE BOOK
function searchEntries() {
  console.log("SEARCHING!");
  // EMPTY SEARCH RETURNS ALL
  JSON.parse(window.localStorage.getItem('entry'));

}

// CLEAR BIRTHDAY BOOK FUNCTION
function clearEntries() {
  localStorage.clear();
  // PRINT localStorage TO CONFIRM IT IS EMPTY
  console.log(localStorage);
  console.log("BOOK IS CLEARED!");
}

// EVENT LISTENERS
document.getElementById("submitButton").addEventListener('click', addEntry());
document.getElementById("searchButton").addEventListener('click', searchEntries());
