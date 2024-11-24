const countryName = new URLSearchParams(window.location.search).get('name')
const countryDetails = document.querySelector('.country-details img')
const nativeName = document.querySelector('.Native span')
const countryHeading = document.querySelector('.country-name');
const Population = document.querySelector(".Population span")
const Region = document.querySelector(".Region span")
const subRegion = document.querySelector(".sub span")
const Capital = document.querySelector(".Capital span")
const Currencies = document.querySelector(".Currencies span")
const symbol = document.querySelector(".symbol")
const Languages = document.querySelector('.Languages span')
const domain = document.querySelector('.domain span')
const borderContry = document.querySelector('.border-contry')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res) => res.json())
.then(([country]) => {
    console.log(country)

    countryDetails.src =country.flags.svg
    countryHeading.innerText = country.name.common
    Population.innerText = country.population.toLocaleString('en-IN')
    Region.innerText = country.region
    Capital.innerText = country.capital
    domain.innerText = country.tld[0]

  
// native name
    if(country.name.nativeName){
        nativeName.innerText = Object.values(country.name.nativeName)[0].common;
    } else{
        nativeName.innerText = country.name.common
    }

    // subregin
    if(country.subregion)
    {
        subRegion.innerText = country.subregion
    } else
    {
        subRegion.innerText = 'Not Available'
    }

    // currency 
    if(country.currencies){
        Currencies.innerText = Object.values(country.currencies)[0].name
        symbol.innerText = Object.values(country.currencies)[0].symbol
    }

    // language
    if(country.languages){
        Languages.innerText = Object.values(country.languages)[0]
    }

    // borders
    if(country.borders){
        // console.log(Object.values(country.borders));

        country.borders.forEach((border) => {
            console.log(border);
         
            const a = document.createElement('a')
            a.innerText = border
            a.href = '#';

            borderContry.append(a)
        })
    }
})