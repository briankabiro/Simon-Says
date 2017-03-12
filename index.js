/*
	array with last used values
	array with all of the computed values
	computed function to calculate the next one(generate a random number between 1 and 4)
	function to change opacity
	function to keep track of the inputed values and check against	
	click, the game starts from one. it highlights that one and saves it in that array
	keeps track of user clicks and then checks it after
*/
var timer;
var app = new Vue({
	el:'.container',
	data:{
		userTurn:false,
		state:'Start',
		step:'--',
		isPlaying:false,
		pattern:[],
		index:0,
		isTopRightActive:false,
		isTopLeftActive:false,
		isBottomLeftActive:false,
		isBottomRightActive:false,
		score:0,
		message:null,
		hiScore:0
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
			if(this.step === '--'){
				this.step = 0;
			}
			this.index = 0;
			this.step++;
			this.pattern.push(this.getRandomNumberOnetoFour());
			console.log(this.pattern);
			this.showPattern(function(){
				this.userTurn = true;
			}.bind(this));
		},
		played(boxNum){
			if(this.state == 'Start'){
				return;
			}
			this.clickEffect(boxNum);
			var isCorrect = this.checkPattern(boxNum);
			if(!isCorrect){
				console.log('Incorrect')
				this.showPattern();
			}else{
				if(this.index === this.pattern.length - 1){
					this.score++;
					setTimeout(function(){
						this.userTurn = false;
						this.computerTurn();
					}.bind(this),1000);
				}else{
					this.index++;
				}
			}
		},
		processGameOver(){
			this.message = 'Game Over.';
			console.log('Score' + this.score);
			this.resetGame();
		},
		getRandomNumberOnetoFour(){
			return Math.floor(Math.random() * 4 + 1);
		},
		checkPattern(boxNum){
			return (this.pattern[this.index] === boxNum);
		},
		resetGame(){
			this.step = '--';
			this.userTurn = false;
			this.state = 'Start';
			this.score = 0;
			this.isPlaying = false;
			this.pattern = [];
			this.index = 0;
		},
		showPattern(){
			var i = 0;
			timer = setInterval(function(){
				if(i>=this.pattern.length){
					this.stopInterval();
				}
				this.clickEffect(this.pattern[i]);
				i++;
			}.bind(this), 500);
		},
		stopInterval(){
			clearInterval(timer);
		},
		changeMode(){
			if(this.state !== 'Start'){
				return;
			}
		},
		clickEffect(boxNum){
			switch(boxNum){
				case 1:
				this.isTopLeftActive = true;
				setTimeout(function(){
					this.isTopLeftActive = false;
				}.bind(this),100);
				break;
				case 2:
		          this.isTopRightActive = true;
		          setTimeout(function() {
		            this.isTopRightActive = false;
		          }.bind(this), 100);
		        break;
		        case 3:
		          this.isBottomLeftActive = true;
		          setTimeout(function() {
		            this.isBottomLeftActive = false;
		          }.bind(this),100);
		          break;
		        case 4:
		          this.isBottomRightActive = true;
		          setTimeout(function() {
		            this.isBottomRightActive = false;
		          }.bind(this), 100);
		        break;
			}
			return;
		}
	}
});