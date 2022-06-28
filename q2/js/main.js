$(document).ready(() => {
    $("#searchForm").on('submit', (e) => {
      e.preventDefault();
      let searchText = $("#searchText").val();
      getMovies(searchText);
    });
  });
  
  function getMovies(searchText){
    //make request to api using axios
    // Make a request for a user with a given I
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=8b0bb9ac453e418e7ff966adc253c475&language=en-US&query=" + searchText)
      .then(function (response) {
        let movies = response.data.results;
        let output = '';
        $.each(movies, (index, movie) => {
          output += `
            <div class="col-md-3">
              <div class="card" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" style="width: 150px; height: 150px" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.vote_average}</p>
                        <p class="card-text">${movie.release_date}</p>
                        
                        <div id="main">
                             <span style="font-size:30px;cursor:pointer" onclick="openNav()">More Details</span>
                        </div>

                        <div id="mySidenav" class="sidenav">
                             <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                             <h2>${movie.title}</h2>
                        </div>
                        
                    </div>
                </div>
            </div>
          `;
        });
        $('#movies').html(output);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }