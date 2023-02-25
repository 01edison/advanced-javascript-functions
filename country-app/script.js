// https://restcountries.com/v2/name/nigeria

// classwork
// async function getCountryData(name) {
//   try {
//     const response = await fetch(`https://restcountries.com/v2/name/${name}`);
//     // console.log(response)
//     const data = await response.json();
//     // console.log(data[0].capital);

//     console.log(data[0].currencies[0].symbol)
//   } catch (e) {
//     console.log(e);
//   }
// }

// getCountryData("ghana");

const countries = document.querySelector(".countries");

const searchBar = document.querySelector("input")
const button = document.querySelector("button")

let countryName;
searchBar.addEventListener("change", (e) => {
  countryName = e.target.value
})

button.addEventListener("click", () => {
  getCountryData(countryName)
})

async function getCountryData(name) {
  // const res1 = fetch(`https://restcountries.com/v2/name/${name}`);
  const response = await fetch(`https://restcountries.com/v2/name/${name}`);


  // const res2 = res1.then(function (response) {
  //   return response.json();
  // });

  const data = await response.json()

  console.log(response)
  // res2.then(function (data) {
  if (response.ok) {
    countries.innerHTML = ""
    console.log(data)
    const result = data[0];
    console.log(result);

    let neighborCode
    if (result.borders != undefined) {
      neighborCode = result.borders[0]
    }

    const html = `
            <article class="country">
            <img class="country__img" src=${result.flag} />
            <div class="country__data">
              <h3 class="country__name">${result.name}</h3>
              <h4 class="country__region">${result.region}</h4>
              <p class="country__row"><span>👫</span>${(
        result.population / 1000000
      ).toFixed(1)}M</p>
              <p class="country__row"><span>🗣️</span>${result.languages[0].name}</p>
              <p class="country__row"><span>💰</span>${result.currencies[0].name
      }</p>
            </div>
          </article>
            `;

    countries.insertAdjacentHTML("beforeend", html);
    if (neighborCode != undefined) {
      getNeighborCountryData(neighborCode);
    }else{
      alert("this country has no neighbours")
    }

  } else {
    alert("Something went wrong. Check your spelling")
  }

  // });
}



async function getNeighborCountryData(code) {
  const res1 = fetch(`https://restcountries.com/v2/alpha/${code}`);

  const res2 = res1.then(function (response) {
    return response.json();
  });

  res2.then(function (data) {
    console.log(data);
    const html = `
        <article class="country neighbour">
        <img class="country__img" src=${data.flag} />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)}M</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
        `;

    countries.insertAdjacentHTML("beforeend", html);
  });
}


