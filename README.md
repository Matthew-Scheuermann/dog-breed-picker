# Dog Breed Picker

A small practice project using the free [Dog CEO API](https://dog.ceo/dog-api/) (no signup or API key required).

## Requirements

### Part 1: Setup & Skeleton

<!-- - Create `index.html`, `style.css` (optional), and `script.js` in one folder.
- Link `style.css` in the `<head>` (if used) and `script.js` (with `defer`) near the end of `<body>`.
- Build the HTML directly:
  - A heading
  - An empty `<ul id="breeds"></ul>`
  - An empty `<div id="output"></div>` (will hold the dog photo) -->

### Part 2: JavaScript & Core Functionality

<!-- - Create a `state` object with two properties: `breeds` (starts as an empty array) and `selectedBreed` (starts as `null`).
- Fetch the breed list from `https://dog.ceo/api/breeds/list/all`.
  - The response is shaped like `{ message: { breedName: [...subBreeds], ... }, status: "success" }` — an object, not an array.
  - Use `Object.keys(result.message)` to turn the breed names into a usable array, and save that to `state.breeds`. -->

- Render the list using `forEach` + `document.createElement` (not `.map()` + `innerHTML` this time):
  - Clear `#breeds` first.
  - Loop through `state.breeds` with `.forEach()`.
  - For each breed, create an `<li>` element, set its `textContent` to the breed name.
  - Attach a click listener directly to that `<li>`, inside the loop (no `data-id` or `.dataset` needed this time — the breed name itself is already available directly in the loop).
  - Append each `<li>` to `#breeds` with `.appendChild()`.
- Inside each `<li>`'s click listener:
  - Save the clicked breed name to `state.selectedBreed`.
  - Fetch a random photo for that breed from `https://dog.ceo/api/breeds/image/random/{breedName}` (insert the breed name into the URL).
  - Get the image URL from the response (`result.message`).
  - Set that URL as an `<img>`'s `src` inside `#output`.
- Wrap fetch calls in `try...catch` (optional, but good practice).

### Part 3: CSS Polish (optional, time permitting)

- Center content on the page.
- Style the list and image so it looks clean.

## Notes

- No API key or signup needed — the API is free and open.
- Uses `forEach` + `createElement` + a per-item click listener instead of `.map()` + `innerHTML` + `data-id`/`.find()` — a different way to solve the same "list → click → detail" pattern practiced in earlier projects.
- New concept introduced: `Object.keys()`, used to convert an object's keys into an array.
