console.log("wellcome to spotify"); 

let songIndex=0;
let audioElement = new Audio('songs/1.mp3')
let playsong = document.getElementById('playsong')
let next = document.getElementById('next')
let previous = document.getElementById('previous')
let progressbar = document.getElementById('progressbar')
let songitem = Array.from(document.getElementsByClassName('item'))
let masterSName = document.getElementById('masterSName')
let masterPic = document.getElementById('masterPic')

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE" , filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"}
]

songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("sName")[0].innerText = songs[i].songName;
})



//main play/pause button
playsong.addEventListener('click',()=>{
    if(audioElement.paused){
        audioElement.play()
        playsong.src="pause-solid.svg"
        masterSName.innerText=songs[songIndex].songName;
    }
    else{
        audioElement.pause()
        playsong.src="play-solid.svg"
        makeAllPause();
    }
})

const makeAllPause = ()=>{
    Array.from(document.getElementsByClassName('item')).forEach((element)=>{
        element.getElementsByTagName("img")[1].src="play-solid.svg"
    })
}

Array.from(document.getElementsByClassName('sPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex=parseInt(e.target.id)
        makeAllPause();
        // console.log(e.target.id)
        e.target.src="pause-solid.svg"
        playsong.src="pause-solid.svg"
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.play();
        masterSName.innerText=songs[songIndex].songName;
        masterPic.src=`covers/${songIndex+1}.jpg`;
    })
})


audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressbar.value = progress;
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.play();
    masterSName.innerText=songs[songIndex].songName;
    masterPic.src = `covers/${songIndex+1}.jpg`;
    playsong.src = "pause-solid.svg";
})

document.getElementById('Previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.play();
    masterSName.innerText=songs[songIndex].songName;
    masterPic.src = `covers/${songIndex+1}.jpg`;
    playsong.src = "pause-solid.svg";
})