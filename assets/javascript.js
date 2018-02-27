var options = {
    clientId: 'fdf45ekhg6vamm0nbo8ul9njzdkfe3p2',
    linkType: 'direct',
    multiselect: 'true'
};

var boxSelect = new BoxSelect(options);

// Register a success callback handler
boxSelect.success(function(response) {
    console.log(response);
});
// Register a cancel callback handler
boxSelect.cancel(function() {
    console.log("The user clicked cancel or closed the popup");
});



var uploadFile = $("#file");

var uploadUrl = 'https://upload.box.com/api/2.0/files/content';

var headers = {
    Authorization: "bUuexcdNEzGqu3E1Uz59xj1hZyEhRbtS"
};



// var form = new FormData();

// var fileBody = uploadFile;

// var blob = new Blob([fileBody], {type: 'text/xml'});

// form.append('file', blob);

// form.append('parent_id', '0');


$("#submit").on("click", function (){
	// event.preventDefault();

	// console.log(uploadFile);

	boxSelect.launchPopup();

	// var baseURL = "https://www.box.net/api/1.0/rest?action=get_ticket&api_key=fdf45ekhg6vamm0nbo8ul9njzdkfe3p2"

	// $.ajax({
	// 	url: uploadUrl,
	// 	headers: headers,
	// 	method: "POST",
	// 	processData: false,
	// 	contentType: false,
	// 	data: {
	// 		file: uploadFile,
	// 		parent_id: '0'
	// 	}
	// }).done(function (data){
	// 	console.log(data)
	// })
});