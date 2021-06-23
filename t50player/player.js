const player = document.querySelector('audio');

// const playBtn = document.querySelector('[data-action="play"]');

// playBtn.addEventListener('click' , (e) => {
//     const {target} = e;

//     if('play' === target.dataset.action) {
//         player.play();
//         target.dataset.action = 'pause';
//     } else {
//         player.pause();
//         target.dataset.action = 'play';
//     }
// })

const container = document.querySelector('.player');

container.addEventListener('click', (e) =>{
    const {target} = e;
    
        if('play' === target.dataset.action) {
            player.play();
            target.dataset.action = 'pause';
        } else {
            player.pause();
            target.dataset.action = 'play';
        }
})
