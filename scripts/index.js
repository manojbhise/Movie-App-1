var images = [
    "https://webneel.net/file/images/11-16/8-xmen-movie-poster-design.jpg",
    "https://preview.redd.it/atyf1poo8oe31.jpg?auto=webp&s=d28749798085f4b4947e99c167dc3b2ab1f04e30",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QQi4HcCVrF-eATfCjzane8uoUpHi-xWs5yHFRRlYcGD3rAHYtd9-6m2pOI1WPlGdnL8&usqp=CAU",
    "https://hd-report.com/wp-content/uploads/2021/02/Monster-Hunter-movie-poster-landscape.jpg",
    "https://www.leicestersquare.london/wp-content/uploads/2019/05/Film-Poster-Aladdin-movie-landscape.jpg",
    "http://qrius.com/wp-content/uploads/2014/03/Highway-Movie-Poster.jpg",
    "https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/03/Mortal-Kombat-Poster-Header.jpg",
];
let k = 0;
let img = document.createElement("img");
img.src = images[0];
document.getElementById("slideshow").append(img);

let id = setInterval(async function() {
    document.getElementById("slideshow").innerHTML = null;
    if (k == images.length) {
        k = 0;
    }
    let img = document.createElement("img");
    img.src = images[k];
    document.getElementById("slideshow").append(img);
    k++;
}, 2000);

// Slideshow End
// Movie Start
var movies = [{
        name: "Pushpa: The Rise",
        releaseDate: "17 December 2021",
        poster: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/pushpa_the_rise_reviews_box_office.jpg",
        imdbRating: 8,
    },
    {
        name: "Satyameva Jayate 2",
        releaseDate: "25 November 2021",
        poster: "https://assetscdn1.paytm.com/images/cinema/Satye-2-2f7e71a0-3559-11ec-9674-4bf4dd94f669.jpg",
        imdbRating: 5.1,
    },
    {
        name: "Lai Bhaari",
        releaseDate: "11 July 2014",
        poster: "https://images-na.ssl-images-amazon.com/images/I/81NzGVMut3L._RI_.jpg",
        imdbRating: 6.3,
    },
    {
        name: "Chhorii",
        releaseDate: "26 November 2021",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Chhorii_poster.jpg/220px-Chhorii_poster.jpg",
        imdbRating: 7,
    },
    {
        name: "Atrangi Re",
        releaseDate: "24 December 2021",
        poster: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/atrangi_re_trailer_main.jpg",
        imdbRating: 6.7,
    },
    {
        name: "Sooryavanshi",
        releaseDate: "5 November 2021",
        poster: "https://m.media-amazon.com/images/M/MV5BM2QwZWI5ZmYtNmU1My00YjI3LWE1ZmMtZTVmZGRhZmVhOWQ0XkEyXkFqcGdeQXVyNzkxOTEyMjI@._V1_.jpg",
        imdbRating: 7,
    },
    {
        name: "Shiddat",
        releaseDate: "1 October 2021",
        poster: "https://m.media-amazon.com/images/M/MV5BZWFiMjVlYTMtMzlhYy00MDcxLWFlNmEtMGJkNmRhNjE5N2ViXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        imdbRating: 8.7,
    },
    {
        name: "The Great Indian Murder",
        releaseDate: "4 February 2022",
        poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9449/1109449-h-01dd6c588fb3",
        imdbRating: 7.9,
    },
    {
        name: "Shikara",
        releaseDate: "7 February 2020",
        poster: "https://upload.wikimedia.org/wikipedia/en/2/22/Shikara_film_poster.jpg",
        imdbRating: 3.4,
    },
]
localStorage.setItem("movies", JSON.stringify(movies));

document.getElementById("movies").innerHTML = null;
movies.forEach(function(el) {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div2.setAttribute("id", "left");
    let div3 = document.createElement("div");
    div3.setAttribute("id", "right");

    let img = document.createElement("img");
    img.src = el.poster;
    div2.append(img);

    let name = document.createElement("h3");
    name.innerText = `Title: "` + el.name + `"`;
    let date = document.createElement("h3");
    date.innerText = `Date: "` + el.releaseDate + `"`;
    let rating = document.createElement("h3");
    rating.innerText = `IMDB Rating: "` + el.imdbRating + `"`;
    div3.append(name, date, rating);

    div1.append(div2, div3);
    document.getElementById("movies").append(div1);
});

function selectValue() {
    var sortBy = document.getElementById("select").value;
    if (sortBy == "lowToHigh") {
        let moviesLowToHigh = movies.slice();
        // Sorting Low To HIgh
        for (i = 0; i < moviesLowToHigh.length; i++) {
            for (j = 0; j < moviesLowToHigh.length; j++) {
                if (moviesLowToHigh[i].imdbRating < moviesLowToHigh[j].imdbRating) {
                    temp = moviesLowToHigh[j];
                    moviesLowToHigh[j] = moviesLowToHigh[i];
                    moviesLowToHigh[i] = temp;
                }
            }
        }
        document.getElementById("movies").innerHTML = null;
        moviesLowToHigh.forEach(function(el) {
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            div2.setAttribute("id", "left");
            let div3 = document.createElement("div");
            div3.setAttribute("id", "right");

            let img = document.createElement("img");
            img.src = el.poster;
            div2.append(img);

            let name = document.createElement("h3");
            name.innerText = `Title: "` + el.name + `"`;
            let date = document.createElement("h3");
            date.innerText = `Date: "` + el.releaseDate + `"`;
            let rating = document.createElement("h3");
            rating.innerText = `IMDB Rating: "` + el.imdbRating + `"`;
            div3.append(name, date, rating);

            div1.append(div2, div3);
            document.getElementById("movies").append(div1);
        });
        // console.log(moviesLowToHigh);
    } else if (sortBy == "highToLow") {
        let moviesHighToLow = movies.slice();
        // Sorting HIgh To Low
        for (i = 0; i < moviesHighToLow.length; i++) {
            for (j = 0; j < moviesHighToLow.length; j++) {
                if (moviesHighToLow[i].imdbRating > moviesHighToLow[j].imdbRating) {
                    temp = moviesHighToLow[j];
                    moviesHighToLow[j] = moviesHighToLow[i];
                    moviesHighToLow[i] = temp;
                }
            }
        }
        document.getElementById("movies").innerHTML = null;
        moviesHighToLow.forEach(function(el) {
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            div2.setAttribute("id", "left");
            let div3 = document.createElement("div");
            div3.setAttribute("id", "right");

            let img = document.createElement("img");
            img.src = el.poster;
            div2.append(img);

            let name = document.createElement("h3");
            name.innerText = `Title: "` + el.name + `"`;
            let date = document.createElement("h3");
            date.innerText = `Date: "` + el.releaseDate + `"`;
            let rating = document.createElement("h3");
            rating.innerText = `IMDB Rating: "` + el.imdbRating + `"`;
            div3.append(name, date, rating);

            div1.append(div2, div3);
            document.getElementById("movies").append(div1);
        });
        // console.log(moviesHighToLow);
    }
}