var app = new Vue({
	el:'.container',
	data:{},
	methods: {
		startGame: function(event){
			alert('Hello' + event.target.tagName);
		}
	}
})