const videoRutubeInit = (selector) => {
    const videos = document.querySelectorAll(`.${selector}`)

    if(videos.length > 0){
        videos.forEach(video => {
            videoRutubeGenerate(video)
        })
    }
}

const videoRutubeGenerate = (video) => {

    const btn = video.querySelector('.video-block__button');
    const videoId = btn.dataset.videoId;

    //console.log(videoId);

    apiRutube(videoId)




    //
    // const container = video.querySelector('.video-block__inner');
    //
    // btn.addEventListener('click',() => {
    //     const iframe = iframeGenerate(videoId);
    //
    //     container.innerHTML = '';
    //     container.appendChild(iframe)
    //
    // })
}



async function apiRutube(id) {


    // const url = 'https://rutube.ru/api/video/' + id;
    //
    // fetch(url,{mode: 'no-cors'})
    // .then((response) => {
    //
    //     console.log(response)
    //     //return response.json();
    //
    // }).then((data) => {
    //         console.log(data);
    //     });


    // const response = await fetch(url,{
    //     mode: 'no-cors',
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    // });
    //
    // console.log(response)

    //const apiRutube = await response.json();

    //console.log(apiRutube)

}

videoRutubeInit('video-block')
