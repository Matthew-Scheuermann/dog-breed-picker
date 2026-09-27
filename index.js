// STATE
const state = {
  breeds: [],
  selectedBreed: null,
};

const breedsList = document.querySelector("#breeds");

// API Call
const getBreeds = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const result = await response.json();
  state.breeds = Object.keys(result.message); // store dog breed names
  state.breeds.forEach((breed) => {
    const li = document.createElement("li");
    li.textContent = breed;
    breedsList.appendChild(li);
  });
};
getBreeds();
