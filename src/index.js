let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });




  // Function to fetch and display toys
  function fetchToys() {
    fetch("http://localhost:3000/toys")
      .then((response) => response.json())
      .then((toys) => {
        toys.forEach((toy) => {
          renderToyCard(toy);
        });
      })
      .catch((error) => {
        console.error("Error fetching toys:", error);
      });
  }

  // Function to render a single toy card
  function renderToyCard(toy) {
    const toyCollection = document.querySelector("#toy-collection");

    const card = document.createElement("div");
    card.className = "card";

    const h2 = document.createElement("h2");
    h2.textContent = toy.name;

    const img = document.createElement("img");
    img.src = toy.image;
    img.className = "toy-avatar";

    const p = document.createElement("p");
    p.textContent = `${toy.likes} Likes`;

    const likeBtn = document.createElement("button");
    likeBtn.className = "like-btn";
    likeBtn.textContent = "Like ❤️";
    likeBtn.id = toy.id;

    likeBtn.addEventListener("click", () => {
      // Implement like button functionality here
      // Call function to update likes and DOM
    });

    card.append(h2, img, p, likeBtn);
    toyCollection.appendChild(card);
  }

  fetchToys(); // Call fetchToys on page load
});
