function displayResult() {
    var selectedCuisine = document.getElementById("cuisineSelect").value;
    document.getElementById("result").innerText = "You selected " + selectedCuisine + " cuisine.";
  }