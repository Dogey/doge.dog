let instance = axios.create({
	"headers": {
		"authorization": "Client-ID 9cc0f16e9fdc675"
	}
});

var app = new Vue({
	el: "#app",
	data: {
		doges: []
	},
	created: function () {
		instance.get('https://api.imgur.com/3/album/URKZb')
		.then(function(response) {
		   response.data.data.images.forEach(function(obj) {
			   app.doges.push(obj)
		   })
	   }).catch(function(error) {
		   console.log(error);
	   });
	}
});