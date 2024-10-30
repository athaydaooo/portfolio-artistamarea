import React from 'react';
import { Noto_Serif_Display, Noto_Serif_Gujarati} from '@next/font/google';

const notoSerifDisplay = Noto_Serif_Display({
  variable: "--font-noto-serif-display",
  weight: "300",
});

const notoSerifGujarati = Noto_Serif_Gujarati({
  variable: "--font-noto-serif-display",
  weight: "500",
});

const TopMenu: React.FC = () => {
    return (
      <header className="fixed top-0 left-0 w-full z-10 items-center">
        <div className="flex text-black flex items-center mx-auto p-5">
          
          <h1 className={`${notoSerifDisplay.className} text-3xl font-extralight font-serif tracking-widest pr-6`}>ARTISTA MAREA</h1>

          <nav>
            <ul className={`${notoSerifGujarati.className} flex space-x-8`}>
              <li><a href="#" className="hover:underline">GALERIA</a></li>
              <li><a href="#" className="hover:underline">VIDEOS</a></li>
              <li><a href="#" className="hover:underline">O ULTIMO FRAME</a></li>
              <li><a href="#" className="hover:underline">SOBRE MIM</a></li>
            </ul>
          </nav>
          
        </div>
      </header>
    );
};

export default TopMenu;