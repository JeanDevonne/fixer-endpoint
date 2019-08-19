const button = document.querySelector("button");
// const request = superagent;
const API_ENDPOINT = "http://data.fixer.io/api/latest?access_key=0b72d3e9686d0de7753c3dbd99d5168c&format=1";
function fetchPrice() {
    fetch(API_ENDPOINT)
      .then(function(response) {
          return response.json();
        })
        .then(function(data) {
            console.log(data);
            const EurToPen = data.rates.PEN;
            const priceBox = document.querySelector("#price");
            priceBox.textContent = `1 Euro = S/. ${EurToPen.toFixed(2)} Nuevos Soles`;
      })
      .catch(function() {
          alert("Ooops! algo ha salido mal");
      })
    }
button.addEventListener("click", fetchPrice);