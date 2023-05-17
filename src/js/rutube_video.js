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
    const container = video.querySelector('.video-block__inner');

    console.log(videoId)

    btn.addEventListener('click',() => {
        const iframe = iframeRutubeGenerate(videoId);
        container.innerHTML = '';
        container.appendChild(iframe)
    })




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

const iframeRutubeGenerate = (videoId) => {
    const iframe = document.createElement('iframe');
    const src = "https://rutube.ru/play/embed/" + videoId;

    iframe.setAttribute('src', src)
    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute('allow', 'clipboard-write; autoplay')
    iframe.setAttribute('webkitAllowFullScreen', '')
    iframe.setAttribute('mozallowfullscreen', '')
    iframe.setAttribute('allowfullscreen', '')

    iframe.classList.add('video-block__content');


    //<iframe width="720" height="405" src="https://rutube.ru/play/embed/5cf99794db543cd3a49a6b5e4a0ebb5a" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

    console.log(iframe)

    return iframe;
}

videoRutubeInit('video-block')



//https://rutube.ru/api/video/5959ba29f80d377af52d33eb18a7f529/thumbnail/?redirect=1




