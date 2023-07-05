// const button = document.querySelector('[data-js="increment-button"]');
// const countDisplay = document.querySelector('[data-js="count"]');
// const jokeContainer = document.querySelector('[data-js="joke"]');

// let count = 0;
// // make request to get dad joke.
// fetchDadJoke();

// console.log("loop about to start");
// for (let i = 1; i <= 1000; i++) {
//   //   console.log("i: ", i);
// }
// console.log("loop ended");

// button.addEventListener("click", () => {
//   count++;
//   countDisplay.textContent = count;
// });

async function fetchDadJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const { joke } = await response.json();

  //   const data = await response.json();
  //   const { joke } = data;
  //   console.log("data: ", data);
  jokeContainer.textContent = joke;
}

// function fetchDadJoke() {
//   fetch("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log("data: ", data);
//     });
// }

const cards = document.querySelectorAll('[data-js="card"]');
const test = document.getElementsByTagName("button");

console.log("test: ", test);

console.log("cards: ", cards);

cards.forEach((card) => {
  const cardButton = card.querySelector("button");
  cardButton.addEventListener("click", (event) => {
    // console.log("event.currentTarget: ", event.currentTarget);
    // console.log("event.target: ", event.target);
    const card = event.currentTarget.parentElement;
    card.classList.add("read");
  });
});
