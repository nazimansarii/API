const countryName = new URLSearchParams(window.location.search).get('name')

// fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
// .then((res) => res.json())
// .then((data) => {
//     console.log(data[0]);
// })