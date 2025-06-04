console.log("welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName : "khatola 2" , filePath: "1.mp3" , coverPath : "1.jpg"},
    {songName : "ye dosti ...." , filePath: "2.mp3" , coverPath : "2.jpg"},
    {songName : "ye shaam mastani ...." , filePath: "3.mp3" , coverPath : "3.jpg"},
    {songName : "angreji bitde...." , filePath: "4.mp3" , coverPath : "4.jpg"},
    {songName : "blue-eyes" , filePath: "5.mp3" , coverPath : "5.jpg"},
    {songName : "brown rang" , filePath: "6.mp3" , coverPath : "6.jpg"},
    {songName : "Saam-e-Ishq" , filePath: "7.mp3" , coverPath : "7.jpg"},
    {songName : "Salam--\Ishq" , filePath: "8.mp3" , coverPath : "8.jpg"},
    {songName : "Salam-eIshq" , filePath: "9.mp3" , coverPath : "9.jpg"},
    {songName : "Salam-e-shq" , filePath: "10.mp3" , coverPath : "10.jpg"},
]

songItems.forEach((element , i) => {
    
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// handle play/pause click
masterPlay.addEventListener('click' , () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 1;
    }
})
// listen to events 
audioElement.addEventListener('timeupdate' , () => {
    // update seekbar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value *audioElement.duration)/100;
})

const makeAllPlays = () => {
       
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle'); 
    }) 
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click' , (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove(`fa-play-circle`);
        masterPlay.classList.add(`fa-pause-circle`);
    })
})


document.getElementById('previous').addEventListener(`click`,() => {
    if(songIndex < 1){
        songIndex = 10;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove(`fa-play-circle`);
    masterPlay.classList.add(`fa-pause-circle`);
})


document.getElementById('next').addEventListener(`click`,() => {
    if(songIndex > 10){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove(`fa-play-circle`);
    masterPlay.classList.add(`fa-pause-circle`);
})
