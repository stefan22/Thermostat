$('#search').keyup(function() {
  var searchfield = $('#search').val();
  var myExp = new RegExp(searchfield)
  $.getJSON('data.json', function(data) {
    console.log(data);
    var output = '<ul class="searchresults">';
        output +='<h2 style="text-align:center;text-decoration:underline;">Latest updates</h2>';
    $.each(data, function(key,val) {
        if ((val.city.search(myExp) != -1) ||
            (val.weather.search(myExp) != -1)) {
                output += '<li>';
                output += '<h2>' + (val.city) + '</h2>';
                output += '<p>' + val.weather + '</p>'
                output += '</li>';
        }
    });
    output += '</ul>';
    $('#update').html(output);
  }); //get JSON
});



// weather underground api
// wunderground.com
// api key: 4ccb3bd543770f97
