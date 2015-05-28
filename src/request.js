$('#search').keyup(function() {
  var searchfield = $('#search').val();
  var myExp = new RegExp(searchfield)
  $.getJSON('data.json', function(data) {
    console.log(data);
    var output = '<ul class="searchresults">';
    $.each(data, function(key,val) {
        if ((val.name.search(myExp) != -1) ||
            (val.bio.search(myExp) != -1)) {
                output += '<li>';
                output += '<h2>' + val.name + '</h2>';
                output += '<p>' + val.bio + '</p>'
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
