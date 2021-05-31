function getgifs(conditions) {
  var giphyAPI = "https://api.giphy.com/v1/gifs/search?";
  var params = {
    q: conditions,
    limit: 3,
    api_key: "EvIg8byxwnFjWckyukqSCi9jR8dV5aZ8",
    fmt: "json"
  };
  $("#image-area").empty()
  // Call giphy
  $.ajax({
    url: giphyAPI + $.param(params),
    method: "GET",
    // When data (r) received, show the gifs
    success: function(r) {
      console.log(r)
      for (var i = 0; i < r.data.length; i++) {
          var imgURL = r.data[i].images.preview_gif.url;
          $("#image-area").append('<img src="' + imgURL +'" />')
      }
    }
  })
}

console.log("hello")
var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?";

// On submit
$("#searchButton").click(function(e) {
  var query = $('#searchQuery').val();
  var params = {
    q: query,
    appid: "1b36a74db69e6f86487bf2188ce39962",
  }
  $.ajax({
    url: weatherAPI + $.param(params),
    method: "GET",
    // When data (weatherData) received, do something
    success: function(weatherData) {
      console.log(weatherData)

      getgifs(weatherData.weather[0].description)
    }
  })
})
