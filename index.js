// dom content loaded event listener
document.addEventListener("DOMContentLoaded", () => {
  let apiKey = "545d54d22a1d2e11994701336242a056";
  let apiUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}`;
  let links = document.querySelectorAll("li");
  links.forEach((individualLink) => {
    individualLink.addEventListener("click", () => {
      console.log(individualLink.id);
      fetch(`${apiUrl}&categories=${individualLink.id}`)
        .then((res) => res.json())
        .then((latestData) => mapStories(latestData));
    });
  });

  const mapStories = (latestData) => {
    console.log(latestData.data.length);
    let storiesRender = document.querySelector("#stories");
    let storiesCount = document.querySelector("#stories-count");
    storiesRender.innerHTML = "";
    latestData.data.forEach((element) => {
      storiesCount.textContent = `Latest ${element.category} stories(${latestData.data.length})`;
      let dateFormat = element.published_at.slice(0,10)
      storiesRender.innerHTML += `
        <div class="col-sm-3 d-flex flex-column">
            <div class="card flex-fill">
              <img class="card-img-top" src=${element.image} alt=@${element.author} />
              <div class="card-body">
                <h6>${element.title}</h6>
                <p class="card-text">${element.description}</p>
                <div class="card-author">
                    <p class="card-text mt-2">${dateFormat}</p>
                    <p class="card-text mt-2">~ ${element.author}</p>
                </div>
              </div>
              <hr>
              <div class="icons">
                <div class="like">
                    <i id="like-icon" class="fa-regular fa-heart"></i>
                    <p class="count">12</p>
                </div>
                <div class="like">
                    <i id="bookmark-icon" class="fa-regular fa-bookmark"></i>
                    <p class="count">12</p>
                </div>
              </div>
            </div>
        </div>
    `;
    });
  };
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
