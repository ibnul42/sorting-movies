let movies = [
    {
        title: "The Lord of the Rings: The Return of the King (2003)",
        rank: 7,
        rating: 8.9
    },
    {
        title: "The Godfather",
        rank: 2,
        rating: 9.1
    },
    {
        title: "12 Angry Men",
        rank: 5,
        rating: 8.9
    },
    {
        title: "Schindler's List",
        rank: 6,
        rating: 8.9
    },
    {
        title: "The Dark Knight",
        rank: 4,
        rating: 9
    },
    {
        title: "Pulp Fiction",
        rank: 8,
        rating: 8.9
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        rating: 9.2
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        rating: 9
    }

]

function displayMovies(movies) {
    let table = "<table border='1' style='width :100%'>";
    table += "<tr><th>Name</th><th>Rank</th><th>Rating</th></tr>";
    for(let index = 0; index <movies.length; index++) {  
        table += "<tr>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "<td>" + movies[index].rating + "</td>";
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
}

function sortMoviesList (movies) {
    for(let i=0; i<movies.length - 1; i++) {
        let max_obj = movies[i];
        let max_location = i;
        for(let j=i; j<movies.length; j++) {
            if(movies[j].rank > max_obj.rank) {
                max_obj = movies[j];
                max_location = j;
            }
        }
        movies[max_location] = movies[i];
        movies[i] = max_obj;
    }
    return movies;
}

window.onload = function () {
    let sortedMovies = sortMoviesByAttr(movies, 'rating');
    displayMovies(sortedMovies);
}

function sortByName(attr) {    
    document.getElementById("sort-by").innerHTML = 'Sorted by: ' + attr;
}
function sortMoviesByAttr(movies, attr) {
    sortByName(attr);
    for(let i=0; i<movies.length - 1; i++) {
        let max_obj = movies[i];
        let max_location = i;
        // let max = getMoviesObject(movies, i, attr);
        // max_obj = max.nax_obj;
        // max_location = max.max_location;

        for(let j=i; j<movies.length; j++) {
            if(movies[j] [attr] > max_obj[attr]) {
                max_obj = movies[j];
                max_location = j;
            }
        }

        movies[max_location] = movies[i];
        movies[i] = max_obj;
    }
    return movies;
}

// function getMoviesObject(movies, start, sortAttr) {
//     let max_obj = movies[start];
//     let max_location = start;

//     for( let i=start; i<movies.length; i++) {
//         if(movies[i] [sortAttr] > max_obj[sortAttr]) {
//             max_obj = movies[i];
//             max_location = i;
//         }
//     }
//     return {max_obj:max_obj, max_index:max_location}
// }