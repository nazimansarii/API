const contriesContainer = document.querySelector(".countries-container");
fetch("https://restcountries.com/v3.1/all ")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((countries) => {
      console.log(countries);
      const containerCard = document.createElement("a");
      containerCard.classList.add("countries-content");
      containerCard.href = `/country.html?name=${countries.name.common}`;

      containerCard.innerHTML = `
         
         <img src="${countries.flags.svg}" alt="">
            <div class="countries-text">
                <h3 class="countries-title">${countries.name.common}</h3>
                <p><b>Population: </b>${countries.population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${countries.region}</p>
                <p><b>Capital: </b>${countries.capital}</p>
            
            </div> `;
      contriesContainer.append(containerCard);
    });
  });
