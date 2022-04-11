
let data = JSON.parse(localStorage.getItem('movies'))||[]
let movieData = [
    {name : "Valimai",
    rating : 3,
    poster : "https://m.media-amazon.com/images/M/MV5BZmQ5NTBmMDgtZmRlMi00MDNmLTg1MWUtMTU3ZGZiMDQ3NzE0XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX1148_.jpg"

    },

    {name : "Batman",
    rating : 9,
    poster : "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UY720_.jpg"
    },

    {name : "Minnal Murali",
    rating : 9,
    poster :"https://m.media-amazon.com/images/M/MV5BNzllYTM0ZDgtZTk4NS00YjYzLTliNjktMjZmNTZmNGZlNzI4XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_FMjpg_UX720_.jpg"
    },
    {name : "Manadu",
    rating : 8,
    poster : "https://m.media-amazon.com/images/M/MV5BMjFkMTFjYjgtNDhkNS00MGNmLWJkZWMtZWIwNGYyOWE3MTM0XkEyXkFqcGdeQXVyMTE1MjcwOTA4._V1_FMjpg_UY720_.jpg"
    },
    {name : "Sarpatta",
    rating : 6,
    poster : "https://m.media-amazon.com/images/M/MV5BYmQxNDliY2EtZWFlZS00YWM4LTkzMzAtMWZjNDFmNjkwM2JlXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX656_.jpg"
    },
    {name : "Karnan",
    rating : 10,
    poster : "https://m.media-amazon.com/images/M/MV5BZDBhZTQ0ZjYtMGU4OC00MzE2LWFmMDctMzljNjkxYjJmNmUxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX819_.jpg"
    }
]

let movieArr = [
    "https://m.media-amazon.com/images/M/MV5BZmQ5NTBmMDgtZmRlMi00MDNmLTg1MWUtMTU3ZGZiMDQ3NzE0XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX1148_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UY720_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNzllYTM0ZDgtZTk4NS00YjYzLTliNjktMjZmNTZmNGZlNzI4XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_FMjpg_UX720_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjFkMTFjYjgtNDhkNS00MGNmLWJkZWMtZWIwNGYyOWE3MTM0XkEyXkFqcGdeQXVyMTE1MjcwOTA4._V1_FMjpg_UY720_.jpg",
    "https://m.media-amazon.com/images/M/MV5BYmQxNDliY2EtZWFlZS00YWM4LTkzMzAtMWZjNDFmNjkwM2JlXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX656_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZDBhZTQ0ZjYtMGU4OC00MzE2LWFmMDctMzljNjkxYjJmNmUxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX819_.jpg",
]

let i=0;

    let container = document.getElementById("slideshow")

    setInterval(function(){
        if(i==movieArr.length){
            i=0;
        }

        let image = movieArr[i];

        container.innerHTML=null;

        let img = document.createElement("img");

        img.src=image;

        img.setAttribute("class","moviepic")

        container.append(img);

        i++

    },3000)

    function showdata(elem){

        movieData.map(function(elem){
            let moviediv = document.getElementById('movies')
            var miniDiv = document.createElement("div");
            miniDiv.setAttribute("clasa","mini")

            var imgDiv = document.createElement("div");
            imgDiv.setAttribute("class","imgBox")

            var imgae = document.createElement("img");
            imgae.setAttribute("class","imageprop")
            imgae.src = elem.poster;
            // console.log()

            var name = document.createElement("div");
            name.innerHTML="Movie Name :" + elem.name;

            var ratings = document.createElement("div");
            ratings.innerHTML="IMDB Ratings :" +" " + elem.rating;

            imgDiv.append(imgae)

            miniDiv.append(imgDiv,name,ratings)

            moviediv.append(miniDiv)
        })
    }
    showdata(movieData)

    // sorting function
function sort(){
    var sorting = document.getElementById("sort").value;

    document.getElementById("movies")=[] ;    

    if(sorting =="h2l")
    {
        movieData.sort(function(a,b){
            return b.rating - a.rating
        })
        
        showdata(movieData);
    }

    if(sorting =="l2h")
    {
        movieData.sort(function(a,b){
            return a.rating - b.rating
        })
        
        showdata(movieData);
    }
}





 
