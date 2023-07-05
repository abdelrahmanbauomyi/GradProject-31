import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Header from '../../Header/Header'
import { useNavigate } from 'react-router-dom';
import styles from './BalanceHormones.module.css'

const BalanceHormones = () => {
  
  const history = useNavigate();

  const handleClick = () =>{
    history(-1);
  }

  return (
        <div> 
   
       <Header/>
       <div className={styles.container} onClick={handleClick}>
        <button className={styles.box} onClick={handleClick} >
        Appointment
        </button>
        </div>
       <button className={styles.butt} onClick={handleClick}>
        <svg  width="45"  viewBox="0 0 45 45" fill="none" >
            <circle opacity="0.1" cx="22.5" cy="22.5" r="22.5" fill="#056839"></circle>
            <path d="M25 29L19 23L25 17" stroke="#056839" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    </button>
<h1> Skeleton Instructions and Usage</h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className={styles.vert}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 > Select a structure on the skeleton  </h3>
    <h4 >to see more information</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    date="Third Step"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 >To view the detailed information</h3>
    <h4 >click on the "Details" button associated with the selected structure.</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    date="first Step"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    
    <h3 >If you select the "skeleton,"</h3>
    <h4 >you have many options</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    date="Second step "
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 >Hide</h3>
    <h4 > This option allows you to hide the selected structure from the skeleton. </h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    date="Third Step"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 >Fade </h3>
    <h4 >Fade Only Selected Structure or Fade Everything Else</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    date="Fourth Step"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 >Isolate</h3>
    <h4 >Selecting this option isolates the chosen structure, highlighting it while hiding or fading everything else.</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  />
</VerticalTimeline>
<div>s
    <iframe id="embedded-human" 
      frameBorder="10"
      style={{aspectRatio: "4 / 3" , width: "50%" ,  margin: "30px" , justifyContent : "center" ,  display : "flex"}}
      allowFullScreen="true" 
      loading="lazy"
      src="https://human.biodigital.com/viewer/?id=5BYi&ui-anatomy-descriptions=true&ui-anatomy-pronunciations=true&ui-anatomy-labels=true&ui-audio=true&ui-chapter-list=false&ui-fullscreen=true&ui-help=true&ui-info=true&ui-label-list=true&ui-layers=true&ui-loader=circle&ui-media-controls=full&ui-menu=true&ui-nav=true&ui-search=true&ui-tools=true&ui-tutorial=false&ui-undo=true&ui-whiteboard=true&initial.none=true&disable-scroll=false&uaid=Lncjq&paid=o_11ab2a89">
    </iframe>
  </div>
  </div>

  )
}

export default BalanceHormones
