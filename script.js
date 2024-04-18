console.log("welcome to spotify");

// intilize the variable 
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgresBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let songItemPlay = document.getElementsByClassName('songItemPlay');
let song = [
    { songName: "Hanuman Chalisa", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Sankat Mochan Hanumaan Astak", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Bajrang Baan ", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Shri Hanumaan Satvan", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "He Bajrangbali Hanumaan", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Jai Jai Hanumaan Gusai", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Mangalmurti Maruti Nandan", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Pawansut Binti Barambaar", filePath: "song/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Shri Hanumaan Vandna", filePath: "song/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Shri Hanumaan Ji Ki Aarti", filePath: "song/10.mp3", coverPath: "covers/10.jpg" },
]
songItem.forEach((element, i) => {
    let songDuration = document.getElementById('songDuration0');
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
    // console.log('song[i].filePath');
    // console.log();
    // audioElement.addEventListener('loadedmetadata', ()=>{
    //     audioElement = new Audio(song[i].filePath);
    //     songDuration.innerText =((audioElement.duration/60).toFixed(2));
    // })

});





// audioElement.play()
// handle play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
        gif.style.opacity = 1;
        resetPlayIcons();
        songItemPlay[songIndex].classList.remove('bi-play-circle-fill');
        songItemPlay[songIndex].classList.add('bi-pause-circle-fill');

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('bi-pause-circle');
        masterPlay.classList.add('bi-play-circle');
        gif.style.opacity = 0;
        resetPlayIcons();
        songItemPlay[songIndex].classList.remove('bi-pause-circle-fill');
        songItemPlay[songIndex].classList.add('bi-play-circle-fill');

    }
});
// listen to event
audioElement.addEventListener('timeupdate', () => {
    //update progressbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressbar.value = progress;
});
myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(songItemPlay).forEach((element) => {
        element.classList.remove('bi-pause-circle-fill');
        element.classList.add('bi-play-circle-fill');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        if (audioElement.paused) {

            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('bi-play-circle-fill');
            e.target.classList.add('bi-pause-circle-fill');
            audioElement.src = `song/${songIndex + 1}.mp3`;
            masterSongName.innerText = song[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('bi-play-circle');
            masterPlay.classList.add('bi-pause-circle');
            gif.style.opacity = 1;

        }
        else {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('bi-pause-circle-fill');
            e.target.classList.add('bi-play-circle-fill');
            audioElement.src = `song/${songIndex + 1}.mp3`;
            masterSongName.innerText = song[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.pause();
            masterPlay.classList.remove('bi-pause-circle');
            masterPlay.classList.add('bi-play-circle');
            gif.style.opacity = 0;
        }


    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
        console.log("next if" + songIndex)
    }
    else {
        songIndex += 1;
        console.log("next else" + songIndex)
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-circle');
    masterPlay.classList.add('bi-pause-circle');
    resetPlayIcons();
    songItemPlay[songIndex].classList.remove('bi-play-circle-fill');
    songItemPlay[songIndex].classList.add('bi-pause-circle-fill');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 9) {
        songIndex -= 1;
        if (songIndex < 0) {
            songIndex = 9;
        }
        console.log("previous if" + songIndex)
    }
    else {
        songIndex = 0;
        console.log("previous else" + songIndex)
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-circle');
    masterPlay.classList.add('bi-pause-circle');
    resetPlayIcons();
    songItemPlay[songIndex].classList.remove('bi-play-circle-fill');
    songItemPlay[songIndex].classList.add('bi-pause-circle-fill');

})



const resetPlayIcons = () => {
    Array.from(songItemPlay).forEach((element) => {
        element.classList.remove('bi-pause-circle-fill');
        element.classList.add('bi-play-circle-fill');
    });
};

