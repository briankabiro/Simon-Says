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
		userTurn:false,
		state:'Start',
		step:'--',
		isPlaying:'false',
		pattern:[],
		index:0,
		isTopRightActive:false,
		isTopLeftActive:false,
		isBottomLeftActive:false,
		isBottomRightActive:false,
		score:0,
		message:null
	},
	methods: {
		changeState:function(){
			if(this.state === 'Start'){
				this.state = 'Stop';
				this.message = null;
				this.isPlaying = true;
				this.computerTurn();
			}else{
				this.resetGame();
			}
		},
		computerTurn(){
			this.index = 0;
			this.step++;
			this.pattern.push(this.getRandomNumberOnetoFour());
			this.showPattern(function(){
				this.userTurn = true;
			});
		},
		played(boxNum){
			
		}
	}
})