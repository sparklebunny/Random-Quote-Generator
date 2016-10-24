$(document).ready(function() {

	function randomColor() {
		return Math.floor(Math.random() * 16777215).toString(16);
	}

	function quoteMachine() {
		$.getJSON("comedy-quotes.json", function(result) {
        	displayQuote(result.data[Math.floor(Math.random() * result.data.length)]);
     	 });
	}

	function displayQuote(quote) {
		//Random Colors for background, text, buttons
		var yayColors = "#" + randomColor();
		$("body").css('background-color', yayColors);
		$("#quote-text").css('color', yayColors);
		$("#quote-cite").css('color', yayColors);
		$(".new-quote-btn").css('background-color', yayColors);
		$("a.twitter.twitter-share-button").css('color', yayColors);

		//Random quotes
		$("#quote-text").html(quote.quote);
		$("#quote-cite").html(quote.author);

		setUpTweet(quote);
	}

	function setUpTweet(quote) {
		$("#twitter-button").click(function(event) {

			event.preventDefault();

			var tweetedLink = window.location.href;

			window.open("http://twitter.com/intent/tweet?text=" + quote.quote + " " + quote.author + "&hashtags=comedy,randomquote", "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");

		});

	}

	//click for next quote
	$("#getQuote").on("click", quoteMachine);

	quoteMachine();


}); // FIN