const pictures = document.querySelectorAll("img");
const resetGame = document.querySelector("#reset");
const breed = document.querySelector("h1");
const dogs = document.querySelectorAll(".dogs");
const DisplayMessage = document.querySelector("#message");
const AllDivs = document.querySelectorAll("div img")
const ImgSource = document.querySelectorAll("src");


const SourceJpeg = ["Frenchie.jpeg", "dalmatian.jpeg", "Doberman.jpeg",
	"Pug.jpeg", "Husky.jpeg", "Labrador.jpeg", "Chihuahua.jpeg",
	"Schnauzer.jpeg", "Boxer.jpeg", "Beagle.jpeg", "Yorkshire.jpeg",
	"Pomeranian.jpeg"]
	
let Dogslist = [];
let AllImgsSources = [];

SetupPicture();
SetupBreedTitle();

resetGame.addEventListener("click",function(){
	for(let i = 0; i < pictures.length; i++){
		pictures[i].classList.remove("hidden");
		resetPicture();
	}
	GenerateRandomImgs();
	DisplayMessage.textContent = " ";
});


for(let i = 0; i< dogs.length; i++){
		let Dogs0 = dogs[i];
		let dogg = Dogs0.classList[3]
		Dogslist.push(dogg);
}

for(let i = 0; i < Dogslist.length; i++){
	AllImgsSources.push( Dogslist[i]+".jpeg");
	// console.log(AllImgsSources)
}

function changePicture(){
	for(let i = 0; i < pictures.length; i++){
		pictures[i].src = breed.textContent + ".jpeg";
		pictures[i].classList.remove("hidden");
	}
}

function resetPicture(){
	for(let i = 0; i < pictures.length; i++){
	for(let i = 0; i < SourceJpeg.length; i++){
		let ImgSrc = SourceJpeg[i];
		pictures[i].src = ImgSrc;
		}
	}
	}

function SetupPicture(){
	for(let i = 0; i < AllDivs.length; i++){
		AllDivs[i].addEventListener("click",function(){
			matchBreed = this.src.split("/").pop().split(".")[0];
			if(breed.textContent == matchBreed){
				DisplayMessage.textContent = " Correct";
				DisplayMessage.style.fontSize = "xx-large";
				changePicture();
			}
			else{
				DisplayMessage.textContent = " Try again";
				this.classList.add("hidden");
				DisplayMessage.style.fontSize = "large";
			}
		})
		}
}

function SetupBreedTitle(){
	resetGame.addEventListener("click",function(){
		for(let i = 0; i < SourceJpeg.length; i++){
			breed.textContent = SourceJpeg[i]
 			let generateNum =  Math.floor(Math.random() * SourceJpeg.length);
		let MatchTitle =  breed.textContent = SourceJpeg[generateNum].split(".jpeg").slice(0,-1);
		}
	});
}

function GenerateRandomImgs(){
	// First generate 12 random number
	let arr = [];
	for(let i = 0; i < SourceJpeg.length; i++){
		arr.push(i)
	}
	let ShuffledNums = shuffle(arr)
	for(let i = 0; i < SourceJpeg.length; i++){
		let randomNumber = ShuffledNums[i]
		let generatePic = AllImgsSources.textContent = SourceJpeg[randomNumber]; 
		pictures[i].src = generatePic;
	}
};

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
  return a;
}


