// ****************************************************
// ***************  CREATE SELECTORS ******************
// ****************************************************

var addEntryButton = document.getElementById("submitButton");
var searchBookButton = document.getElementById("searchButton");
var deleteAllEntriesButton = document.getElementById("deleteAllEntriesButton")
var searchResultsText = document.getElementById('resultsDisplay');



const entries = [
  // Object 0
  {
    firstName: "Candice",
    lastName: "Hewitt",
    dateOfBirth: "1984-10-31"
  },
  // Object 1
  {
    firstName: "Hugh",
    lastName: "Roberts",
    dateOfBirth: "1987-07-05"
  },
]

// ****************************************************
// ************  CREATE EVENT LISTENERS ***************
// ****************************************************

// ADD ENTRY

addEntryButton.addEventListener("click", function(ev) {
  ev.preventDefault();
  addEntry();
  console.log("Entry added");
});

// SEARCH ENTRIES

searchBookButton.addEventListener("click", function(ev) {
  ev.preventDefault();

  if (entries.length > 0) {
    displaySearchResults();
  } else {
    displayEmptyBookMessage();
  }
});

// DELETE ALL ENTRIES

deleteAllEntriesButton.addEventListener("click", function(ev) {
  ev.preventDefault();
  // removes all entries from entries class
  entries.length = 0;
  // clear resultsDisplay
  document.getElementById("resultsDisplay").innerHTML = "";
});


// ****************************************************
// **************  EXTRACTED FUNCTIONS ****************
// ****************************************************

function addEntry() {
  // create newEntry object, take user input, and push the object to the entries array
  var newEntry = {};
  newEntry.firstName = document.getElementById('firstName').value;
  newEntry.lastName = document.getElementById('lastName').value;
  newEntry.dateOfBirth = document.getElementById('dateOfBirth').value;
  // add to entries array
  entries.push(newEntry);
  // Display conrirmation message to user
  fullName = newEntry.firstName + " " + newEntry.lastName
  document.getElementById("entryConfirmationMessage").innerHTML = "You successfully added " + fullName + "!";
}

function displaySearchResults() {
  // create a search results variable, assign it a table
  var results = "<table border>";
  // add a header row to the table
  results += "<tr>";
  results += "<td>" + "First Name" + "</td>";
  results += "<td>" + "Last Name" + "</td>";
  results += "<td>" + "Date Of Birth" + "</td>";
  results += "</tr>";

  // create variables with a value for each input field

  var searchedFirstName = document.getElementById('searchFirstName').value;
  var searchedLastName = document.getElementById('searchLastName').value;
  var searchedDateOfBirth = document.getElementById('searchDateOfBirth').value;


  // loop through entries and add element[i].'key' to the results
  for (var i = 0; i < entries.length; i++) {
    // if variable matches entries[i].'key'
    if ((searchedFirstName === entries[i].firstName) || (searchedLastName === entries[i].lastName) || (searchedDateOfBirth === entries[i].dateOfBirth)) {

      results += "<td>" + entries[i].firstName + "</td>";
      results += "<td>" + entries[i].lastName + "</td>";
      results += "<td>" + entries[i].dateOfBirth + "</td>";
      results += "</tr>";
    } else {
      // THIS ISNT WORKING - it's being supplanted by the // Display results section below
      document.getElementById("resultsDisplay").innerHTML = "No entries match your search, please try again.";
    }
  }
  results += "</table>";
  // Display results
  document.getElementById("resultsDisplay").innerHTML = results;

};

function displayEmptyBookMessage() {
  // Tell the user that their Birthday Book is empty
  document.getElementById("resultsDisplay").innerHTML = "You don't have any entries in your Birthday Book!";
};
