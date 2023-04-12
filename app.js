
const searchInput = document.querySelector('#search-input');
const movieSort = document.querySelector('#movie-sort');
const searchButton = document.querySelector('#search-btn'); 
const containerOfMovies = document.querySelector('.movieContainer');

let sortOfMovie = movieSort.value; //value of select if you want looking a movie for his sort 
let nameOfMovie = searchInput.value; //value of search input if you want get a movie by it name
let APIKEY = '27373465';


searchButton.addEventListener("click", (event)=> {
    event.preventDefault();

    let sortM = movieSort.value; //if you want save the value from what ever variable from HTML you need declare inside of function , in this case inside of "evenlistener"

    console.log(searchInput.value);
    console.log(movieSort.value);
    console.log(sortM);

    console.log('http://www.omdbapi.com/?' + 
    `s=${movieSort.value}&` + 
    `t=${searchInput.value}&` +
    `apikey=${APIKEY}&`);

    getData();

    setTimeout(()=>{

        movieSort.value = "";

    },1000);

    
    searchInput.value= "";
    

});





function getData() {

    //fetch('http://www.omdbapi.com/?apikey=27373465&')  // this not work becasue we need add some "i" or "t"
    //fetch('http://www.omdbapi.com/?i=tt3896198&apikey=27373465')
    //fetch('http://www.omdbapi.com/?t=avengers&apikey=27373465&')  this work by name : t="moviename" example : t=avengers
    //fetch('http://www.omdbapi.com/?i=tt0000001&apikey=27373465')  this work by ID: i=tt0000001 
    //fetch('http://www.omdbapi.com/?s=&t=avengers&apikey=27373465&')  //this give us an array of several movies about de topic that you are looking for 

    //fetch('http://www.omdbapi.com/?t=avengers&apikey=27373465&')

    fetch('http://www.omdbapi.com/?' + 
    `s=${movieSort.value}&` + 
    `t=${searchInput.value}&` +
    `apikey=${APIKEY}&`)

    .then(response => response.json())
    .then((data) => {
        console.log(data);
        //console.log(data.Search);

        let movieArray = '';
        let movieArrayT = '';

        if (movieSort.value){
            movieArray = data.Search;
            console.log(movieArray);

            displayMovies(movieArray);

        } else {
            movieArrayT = data;
            console.log(movieArrayT.Title);
            console.log(movieArrayT.Year);
            console.log(movieArrayT.Type);

            displayMovieByName(movieArrayT);

            

        }

        

        //displayMovies(movieArray);



        
    })
    .catch(err => console.log(err));
}


function displayMovies (movieArray) {  //Type,Poster,Title,Year, /////Gener

    containerOfMovies.innerHTML = "";

    movieArray.forEach(element => {

        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        const posterMovie = document.createElement("img");
        posterMovie.src = `${element.Poster}`;
        posterMovie.alt = `Poster for ${element.Title}`;

        const titleMovie = document.createElement('h3');
        titleMovie.textContent= element.Title;

        const typeOfElement = document.createElement('p');
        typeOfElement.textContent = `Type : ${element.Type}`;

        const yearMovie = document.createElement('p');
        yearMovie.textContent = "Year : " + element.Year;




        movieCard.appendChild(posterMovie);
        movieCard.appendChild(titleMovie);
        movieCard.appendChild(typeOfElement);
        movieCard.appendChild(yearMovie);

        containerOfMovies.appendChild(movieCard);
        
        
    });

    

}

function displayMovieByName(movieObject){

    console.log(movieObject.Poster);
    //let imgUrl = movieObject.Poster;


    let cardMovie = "";
    
    

    cardMovie += `
        <div class="cardNewMovie">
                <div class :"posterMovie">
                    <img src="${movieObject.Poster}" />
                </div>
                    

                <div class : "infoMovie">
                    <h3>${movieObject.Title}</h3>
                    <p><b>Year : </b>${movieObject.Year}</p>
                    <p><b>Type : </b> ${movieObject.Type}</p>
                </div>
                    
                </div>
            `;


            containerOfMovies.innerHTML = cardMovie;
    


}

