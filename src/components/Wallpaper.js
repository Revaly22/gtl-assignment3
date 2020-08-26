import React from 'react';
import Img1 from'../img/venom-1.jpg';
import Img2 from '../img/hulk-1.jpg';
import Img3 from '../img/venom-2.jpg';
import '../css/sample-wallpaper.css'

export default function Wallpaper() {
    return (
        <div>
            {/* <Sample Wallpaper > */}
        <div class="sample-wallpaper">
          {/* < Wallpaper #1 > */}
          <article class="wallpaper">
            <img src={Img1} alt="Wallpaper #1" class="wallpaper" />
          </article>

          {/* < Wallpaper #2 > */}
          <article class="wallpaper">
            <img src={Img2} alt="Wallpaper #1" class="wallpaper" />
          </article>

          {/* <Wallpaper #3 > */}
          <article class="wallpaper">
            <img src={Img3} alt="Wallpaper #1" class="wallpaper" />
          </article>
        </div>
        </div>
    )
}
