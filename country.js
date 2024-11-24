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

        Currencies.innerText =Object.values(country.currencies).map((currency) => currency.name).join(', ')
        symbol.innerText = Object.values(country.currencies).map((symol) => symol.symbol)
    }

    // language
    if(country.languages){
        Languages.innerText = Object.values(country.languages)
    }

    // borders
    if(country.borders){
        // console.log(Object.values(country.borders));

        country.borders.forEach((border) => {
           fetch(`https://restcountries.com/v3.1/alpha/${border}`)
           .then((res) => res.json())
           .then(([countryData])=> {
            const a = document.createElement('a')
            a.innerText = countryData.name.common
            a.href= `country.html?name=${countryData.name.common}`
            borderContry.append(a)
           })
        })
    }
})

const linkTag = document.querySelector('.link-tag')
linkTag.addEventListener('click', () => {
    history.back()
})
const drk =document.querySelector('.drk')
drk.addEventListener('click', () => {

  const body = document.querySelector('body')
  body.classList.toggle('dark')
})