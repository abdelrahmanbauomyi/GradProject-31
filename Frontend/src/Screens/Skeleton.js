import React, { useEffect } from 'react';

const Skeleton = () => {
;

  return (
        <div style={{display:"flex" , justifyContent:"center"}}>
        <iframe
          id="embedded-human"
          frameBorder="0"
          style={{ aspectRatio: '4 / 3', width: '85%' }}
          allowFullScreen
          loading="lazy"
          src="https://human.biodigital.com/viewer/?id=5BYi&ui-anatomy-descriptions=true&ui-anatomy-pronunciations=true&ui-anatomy-labels=true&ui-audio=true&ui-chapter-list=false&ui-fullscreen=true&ui-help=true&ui-info=true&ui-label-list=true&ui-layers=true&ui-loader=circle&ui-media-controls=full&ui-menu=true&ui-nav=true&ui-search=true&ui-tools=true&ui-tutorial=false&ui-undo=true&ui-whiteboard=true&initial.none=true&disable-scroll=false&uaid=Lncjq&paid=o_11ab2a89"
        ></iframe>
        
      </div>
 
  );
};

export default Skeleton;
