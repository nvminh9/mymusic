var btnPlaySong = document.getElementsByClassName('btnSong')
var sourceAudioSong = document.getElementById('sourceSong')
var songImg = document.getElementById('songImg')
const rightContainer = document.querySelector('#rightContainer')
var songLyrics = document.getElementById('lyrics-content')

function playSong(songId, action, songimg){
    const url = '/play_song/'
    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'songId':songId,'action':action,'songimg':songimg}),
     })
     .then((response) => response.json())
     .then((data) => {
        console.log('Success:', data)
        sourceAudioSong.src = '/images/'+songId
        songImg.src = '/images/'+songimg
        rightContainer.style.setProperty('--pseudo-background', 'url(/images/'+songimg+')')
        songLyrics.innerHTML = ''
     })
}

for(i=0;i < btnPlaySong.length;i++){
    btnPlaySong[i].addEventListener('click', function(){
        var songId = this.dataset.song
        var action = this.dataset.action
        var songimg = this.dataset.songimg
        console.log('songId:',songId, 'action:',action, 'songImg:',songimg)
        console.log('user: ',user)
        playSong(songId, action, songimg)
    })
}

