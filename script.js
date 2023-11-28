// API
const url = "https://stars-api.p.rapidapi.com/starslist";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "66f73b6c79mshfc9febeb400ab27p115c2djsn13f5c3cd76f1",
    "X-RapidAPI-Host": "stars-api.p.rapidapi.com",
  },
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    const starsListElement = document.getElementById("stars-list");

    data.forEach((star) => {
      console.log(`STAR ${star.name}`);
      const starElement = document.createElement("div");
      starElement.classList.add("star-element");
      starElement.innerHTML = `Star Name: <br> ${star.name}`;
      starsListElement.appendChild(starElement);

      // ANIMATION

      const starsList = document.querySelectorAll(".star-element");
      window.addEventListener("scroll", checkBoxes);
      function checkBoxes() {
        const triggerBottom = (window.innerHeight / 5) * 4;
        starsList.forEach((stars) => {
          const starTop = stars.getBoundingClientRect().top;

          if (starTop < triggerBottom) {
            stars.classList.add("show");
          } else {
            stars.classList.remove("show");
          }
        });
      }

      checkBoxes();
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData();
