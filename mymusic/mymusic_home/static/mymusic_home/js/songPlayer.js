    let listSong = [];
    const root = document.querySelector(":root");

    // get ALL song API
    fetch('https://nvminh9.github.io/playlist/playlist.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Lỗi, mã lỗi ' + response.status);
        return;
      }
      // parse response data
      response.json().then(data => {
        for(let i=0;i<data["songs"].length; i++){
            listSong[i] = data["songs"][i]
        }
        document.getElementById('audioSong').innerHTML = `<audio src="${listSong[0]["audio"]}" loop controls></audio>`;
        // document.getElementById('audioSong').innerHTML = `<audio src="../assets/music/uThiAnhDaOnHon.mp3" controls></audio>`;
        document.getElementById('songPlayedImg').innerHTML = `<img id="songImg" src="${listSong[0]["albumart"]}" alt="Ảnh Nhạc">`;
        // document.getElementById('songPlayedImg').innerHTML = `<img src="https://i.scdn.co/image/ab67616d0000b273b315e8bb7ef5e57e9a25bb0f" alt="Ảnh Nhạc">`;
        root.setAttribute('style', `--pseudo-background: url( ${listSong[0]["albumart"]})`);
      })
    }
  )
  .catch(err => {
    console.log('Error :-S', err)
  });

