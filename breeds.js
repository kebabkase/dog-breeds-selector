const buttonSelected = document.querySelector(".btn");
buttonSelected.addEventListener("click", addDogBreed);
const doggo = document.querySelector(".doggo");

function addDogBreed() {
  const selectedValue = document.querySelector(".selector").value;
  const DOG_BREED_URL = `https://dog.ceo/api/breed/${selectedValue}/images/random`;
  fetch(DOG_BREED_URL)
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = `${selectedValue} doggo`;
      doggo.appendChild(img);
    });
}
