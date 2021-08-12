const imgcarousel = document.getElementById("imgcarousel");
const imgs = document.querySelectorAll('.imgcarousel img');
const loading = document.getElementById("loading");
const nextpage = document.getElementById("nextpage");

const note = document.getElementById('note');
const textold = document.getElementById('text-rpl');
 const textnew = "Dear sir, I am extending my best wishes to you on this special day of your life! Happy Birthday!";

 const dlttv = document.getElementById('dlt-tv');

 const gifcon =document.getElementById('gift-container');

 const audio = document.getElementById('audio');

 const body = document.querySelector('body');

const cake = document.getElementById('cake');

let idx = 0;



function changeimage(){
	if(idx > imgs.length - 1){
		idx = 0;
	}else if(idx < 0) {
		idx = imgs.length - 1;
	}
	// console.log(idx);

	imgcarousel.style.transform=`translateX(${-idx * 320}px)`;
}

function imgrun(){
	idx++;
	changeimage();
}
let interval = setInterval(imgrun,4000);

let iii = 1;
let speed = 200;

function autotext(){
	textold.innerText = textnew.slice(0,iii) + "|";

    iii++;

    if(iii > textnew.length){
	   iii = 1;
    }
    setTimeout(autotext,speed);
}

 setTimeout(()=>{
 	loading.remove();
 },5000);

 setTimeout(()=>{

	 dlttv.style.display = "flex";
	 nextpage.style.display ="flex";
	 gifcon.style.display = "flex";
	 cake.style.display = "flex";
	 note.style.display = "flex";
	 autotext();
 },5500);

 function wish(e){
		e.target.parentElement.classList.toggle("words");
		if(e.target.parentElement.classList.contains('words')){
			audio.play();
			body.classList.add('blur');
		}else {
			body.classList.remove('blur');
			audio.currentTime = 0;
			audio.pause();
		}
 }

 gifcon.addEventListener("click", wish);



