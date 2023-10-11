// dom content loaded event listener
document.addEventListener("DOMContentLoaded", () => {
  /* let apiKey = "545d54d22a1d2e11994701336242a056";
  let apiUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((featuredData) => mapData(featuredData));

  const mapData = (featuredData) => {
    console.log(featuredData.data);
    let carouselOne = document.querySelector("#carousel-one-text");
    let carouselTwo = document.querySelector("#carousel-two-text");
    let carouselThree = document.querySelector("#carousel-three-text");
    carouselOne.innerHTML = `
        <img src=${featuredData.data[0].image} class="d-block w-100 img-fluid" alt=${featuredData.data[0].title} />
        <div class="carousel-caption d-md-block carousel-content">
            <h5>${featuredData.data[0].title}</h5>
            <p>${featuredData.data[0].description}</p>
        </div>
    `;
    carouselTwo.innerHTML = `
        <img src=${featuredData.data[1].image} class="d-block w-100" alt=${featuredData.data[1].title} />
        <div class="carousel-caption d-md-block carousel-content">
            <h5>${featuredData.data[1].title}</h5>
            <p>${featuredData.data[1].description}</p>
        </div>
    `;
    carouselThree.innerHTML = `
    <img src=${featuredData.data[2].image} class="d-block w-100" alt=${featuredData.data[2].title} />
    <div class="carousel-caption d-md-block carousel-content">
        <h5>${featuredData.data[2].title}</h5>
        <p>${featuredData.data[2].description}</p>
    </div>
    `;
  }; */
});
