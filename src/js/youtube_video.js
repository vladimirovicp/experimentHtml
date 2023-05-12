const videoInit = (selector) => {
    const videos = document.querySelectorAll(`.${selector}`)

    if(videos.length > 0){
        videos.forEach(video => {
            videoGenerate(video)
        })
    }
}

const videoGenerate = (video) => {
    const btn = video.querySelector('.video-block__button');
    const videoId = btn.dataset.videoId;
    const container = video.querySelector('.video-block__inner');

    btn.addEventListener('click',() => {
        const iframe = iframeGenerate(videoId);

        container.innerHTML = '';
        container.appendChild(iframe)

    })
}

const iframeGenerate = (videoId) => {
    const iframe = document.createElement('iframe');
    const src = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`

    iframe.setAttribute('src', src)
    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute('allow', 'autoplay')
    iframe.setAttribute('allowfullscreen', '')

    iframe.classList.add('video-block__content');

    return iframe;
}


const youtubeVideo = document.querySelector('.youtube_video');

if (youtubeVideo){
    videoInit('video-block')


    const btnStopVideo = document.querySelector('.video-stop')

    btnStopVideo.addEventListener('click',() => {

        let iframe = document.querySelector('.video-block__content');
        const container = document.querySelector('.video-block__inner');

        container.innerHTML = '';

        console.log(iframe);




        //video.stopVideo();


        // const iframe = iframeGenerate(videoId);
        //
        // container.innerHTML = '';
        // container.appendChild(iframe)

    })

}

//videoInit('video-block')


//video-stop








