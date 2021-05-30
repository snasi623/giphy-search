  var apiURL = "https://api.giphy.com/v1/gifs/search?";
  var query = "Friends";
  var params = {
    q: query,
    limit: 10,
    api_key: "EvIg8byxwnFjWckyukqSCi9jR8dV5aZ8",
    fmt: "json"
  };
  $.ajax({
    url: apiURL + $.param(params),
    method: "GET",
    success: function(r) {
        console.log(r)
        for (var i = 0; i < r.data.length; i++) {
            var imgURL = r.data[i].images.original.url;
            $("#image-area").append('<img src="' + imgURL +'" />')
        }
    }
  })
console.log("hello")