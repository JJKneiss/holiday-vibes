import { music, image } from './data.js';

export default class MusicPlayer {
    constructor() {
        let mix = Math.floor((Math.random() * music.length));
        let random = Math.floor((Math.random() * image.length));
        this.musicPlayer = document.querySelector('.music-player');
        this.shuffle(mix, random);
        document.querySelector('.previous').addEventListener('click', () => {
            if (mix > 0) {
                mix = mix - 1;
            }
            else {
                mix = music.length - 1;
            }
            this.shuffle(mix, random);
        });
        document.querySelector('.next').addEventListener('click', () => {
            if (mix < music.length - 1) {
                mix = mix + 1;
            }
            else {
                mix = 0;
            }
            this.shuffle(mix, random);
        });
    }
    shuffle(mix, random) {
        this.setMusic(mix);
        let currentNum = random
        while (random == currentNum)
            random = Math.floor((Math.random() * image.length));
        this.setImage(random);
    }
    setImage(random) {
        // Set Image & Link to Source
        this.musicPlayer.querySelector('img').src = image[random].src;
        this.musicPlayer.querySelector('[data-img-attribution]').setAttribute('href', image[random].link);
        this.musicPlayer.querySelector('[data-img-attribution]').innerHTML = image[random].attribution;
    }
    setMusic(mix) {
        // Set Music values & Link to Source
        this.musicPlayer.querySelector('[data-music-title]').setAttribute('href', music[mix].fileLink);
        this.musicPlayer.querySelector('[data-music-title]').innerHTML = music[mix].title;
        this.musicPlayer.querySelector('[data-music-author]').innerHTML = music[mix].creator;
        this.musicPlayer.querySelector('audio').src = music[mix].song;
    }
}