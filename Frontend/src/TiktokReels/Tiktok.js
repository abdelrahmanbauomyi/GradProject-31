import { TikTokEmbed } from 'react-social-media-embed';
import React from 'react'

const Tiktok = () => {
  return (
    <div> 
      <h1 className='d-flex justify-content-center'>Tiktok/Reels </h1>
    <div style={{ display: 'flex', justifyContent: 'space-evenly' ,margin:'75px' ,}}>
        <TikTokEmbed
         url="https://www.tiktok.com/@docteur_ghr/video/7130670683612253446?q=medical%20doctors%20videos&t=1679975767562"
         width={325} 
        />
        <TikTokEmbed
         url="https://www.tiktok.com/@doctorkaramkhodian/video/7193772394253700398?q=medical%20advice&t=1679975917651"
         width={325} 
        />
        <TikTokEmbed
         url="https://www.tiktok.com/@drmichaelmurray/video/7189393744876260654?q=medical%20advice&t=1679975917651"
         width={325} 
        />
    </div>
    </div>  
    
  )
}

export default Tiktok
