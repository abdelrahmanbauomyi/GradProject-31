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
<h1>Balancing Hormones Through Nutrition &amp; LifeStyle</h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className={styles.vert}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 > Many Natural Ways to </h3>
    <h4 >Balance Your Hormones</h4>
    <p>
    Certain lifestyle practices, including exercising regularly,
    and eating a nutritious diet rich is protein and fiber can help naturally balance your hormones.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    date="first Step"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 >Eat enough protein </h3>
    <h4 >at every meal</h4>
    <p>
    protein provide essential amino acids that your body can’t make on its own
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    date="Second step "
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 >Healthy fats</h3>
    <h4 >Stay away from trans fats.</h4>
    <p>
    include omega 3s such as fatty fish, nuts, seeds, avocado, eggs yolk
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    date="Third Step"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 >Stay away from sugar </h3>
    <h4 >and sugary</h4>
    <p>
    which can cause insulin resistance and increase belly fat storage
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    date="Fourth Step"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 >Consume a high fiber diet</h3>
    <h4 >both soluble and insoluble</h4>
    <p>
     Fiber is essential to a healthy diet.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    date="Fifth Step"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 >Get consistent, </h3>
    <h4 >high quality sleep</h4>
    <p>
    getting enough restorative sleep is crucial for optimal health.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    date="Sixth Step"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}   
  >
    <h3 >Engage in regular exercise</h3>
    <h4 >strongly influences hormonal health</h4>
    <p>
    improving blood flow to your muscles, 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  />
</VerticalTimeline>
</div>
  )
}

export default BalanceHormones
