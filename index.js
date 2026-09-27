// STATE
const state = {
  breeds: [],
  selectedBreed: null,
};

const breedsList = document.querySelector("#breeds");
const imageDisplay = document.querySelector("#output");

// API Call
const getBreeds = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const result = await response.json();
  state.breeds = Object.keys(result.message); // store dog breed names
  state.breeds.forEach((breed) => {
    const li = document.createElement("li");
    li.textContent = breed;
    breedsList.appendChild(li);
    li.addEventListener("click", async () => {
      state.selectedBreed = breed;
      console.log("fetching breed:", breed);
      const img = await fetch(
        `https://dog.ceo/api/breeds/image/random/${breed}`,
      );
      const pulledImg = await img.json();
      imageDisplay.innerHTML = "";
      const imageElement = document.createElement("img");
      imageElement.src = pulledImg.message;
      imageDisplay.appendChild(imageElement);
    });
  });
};
getBreeds();
