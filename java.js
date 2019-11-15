function showEvents(data){
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { // Loop through object
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }
    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;

  
}

showEvents({
	"events":[
	{
		"location": "San Francisco, CA",
		"date": "May 1",
		"map": "http://javascriptbook.com/code/c08/img/map-ca.png"
	}
	{
		"location": "Austin,TX",
		"date": "May 15",
		"map": "http://javascriptbook.com/code/c08/img/map-tx.png"
	}
	{
		"location": "New York, NY",
		"date": "May 30",
		"map: "http://javascriptbook.com/code/c08/img/map-ny.png"
	}
	]
});


// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).