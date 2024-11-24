const contriesContainer = document.querySelector(".countries-container");
const input  = document.querySelector('.search input')
fetch("https://restcountries.com/v3.1/all ")
  .then((res) => res.json())
  .then((data) => {
    renderCuntries(data)
    allCountryData =data
  });

const FilterByRegion = document.querySelector(".Filter-by-region");
FilterByRegion.addEventListener("change", (e) => {
  fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res) => res.json())
    .then(renderCuntries)
});

let allCountryData

function renderCuntries(data) {
  contriesContainer.innerHTML = "";
  data.forEach((countries) => {
    const containerCard = document.createElement("a");
    containerCard.classList.add("countries-content");
    containerCard.href = `/country.html?name=${countries.name.common}`;

    containerCard.innerHTML = `
       
       <img src="${countries.flags.svg}" alt="">
          <div class="countries-text">
              <h3 class="countries-title">${countries.name.common}</h3>
              <p><b>Population: </b>${countries.population.toLocaleString(
                "en-IN"
              )}</p>
              <p><b>Region: </b>${countries.region}</p>
              <p><b>Capital: </b>${countries.capital}</p>
          
          </div> `;
    contriesContainer.append(containerCard);
  });
}


input.addEventListener('input', (e) =>{
 const filterCountries =allCountryData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
 renderCuntries(filterCountries)
})

const drk =document.querySelector('.drk')
drk.addEventListener('click', () => {

  const body = document.querySelector('body')
  body.classList.toggle('dark')
})