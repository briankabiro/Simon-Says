/*
	array with last used values
	array with all of the computed values
	computed function to calculate the next one(generate a random number between 1 and 4)
	function to change opacity
	function to keep track of the inputed values and check against	
	click, the game starts from one. it highlights that one and saves it in that array
	keeps track of user clicks and then checks it after
*/
var app = new Vue({
	el:'.container',
	data:{
		recentArray:[],
		eachArray:[]
	},
	methods: {
		startGame: function(event){
			console.log('Game has started');

			
		}
	}
})