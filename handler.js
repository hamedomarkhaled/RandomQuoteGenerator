 
$(document).ready(function(){
      var url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1&mashape-key=Y2WnFKhquumshQq4C03BYJu2Ap2bp1WYqMRjsnTP20eycCnzdX";
	        $.getJSON(url, function(json) {
        $("#txt").text(json.quote);
        $("#author").text(json.author);
          //document.getElementById("cpy").style.visibility = "visible";
  
	});
    $("#getQuote").click(function(){
      //request to the api
      $.getJSON(url, function(json) {
        $("#txt").text(json.quote);
        $("#author").text(json.author);
          //document.getElementById("cpy").style.visibility = "visible";
  
	});
      });
});