function fetchsimpsonJSON() {
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function(response) {
      return response.data;
    })
    .then(function(simpson) {
      console.log("data decoded from JSON:", simpson);
      const simpsonHtml = `
        <p><strong>${simpson[0].character}</strong></p>
        <img src="${simpson[0].image}" />
        <p>${simpson[0].quote}</p>
      `;
      document.querySelector("#simpson").innerHTML = simpsonHtml;
    });
}

fetchsimpsonJSON();

const refreshButton = document.querySelector(".refresh");
const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);
