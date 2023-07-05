import React from 'react'
import styles from './CheckUp.module.css'
import stat from '../../../assets/stat.jpg'
import check from '../../../assets/check.jpg'
import regular from '../../../assets/regular.jpg'
import Header from '../../Header/Header'
import { useNavigate } from 'react-router-dom'

const CheckUp = () => {

  const history = useNavigate()
const handleClick = () => {
  history(-1)
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
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h1 className={styles.title}><strong>Early detection, better outcomes</strong></h1>
      <p>&nbsp;</p>
      <p>A few countries have screening programmes that are designed to detect conditions,
          such as cancers and heart problems, where early detection enables individuals to
          access effective treatment or, in some cases, to make lifestyle changes that will
          manage or prevent the condition altogether. This is particularly true of many forms
          of cancer where outcomes are vastly improved with early intervention.
      </p>
      <p>
        Many countries are seeing a rise in the incidence of Type II diabetes.
        This has a long asymptomatic period during which it can be detected through blood or urine tests.
        Diagnosis at this stage makes it easier to prevent complications such as nerve damage,
        kidney problems and strokes. There is also evidence that, through changes in diet and weight loss,
        some diabetics can put their condition into remission.
      </p>
      <p>&nbsp;</p>
      <h1 className={styles.title}> <strong>Checking on health</strong></h1>
      <p>&nbsp;</p>
      <p>The survey found that 60% of respondents have a full medical check-up or body scan
         at least once every two years, with just under half (45%) of respondents having
          a check-up every year (Fig 21). It is encouraging to
      </p>
      <p>Clearly, keeping fit is a critical element of a proactive health strategy and
         in Theme 1 we sought to gain insights into consumers’ attitudes to fitness and wellness.
          But, given the importance of detecting potentially damaging latent conditions, 
          the survey also sought information from respondents about the frequency with which 
          they underwent a medical check-up.
      </p>
      <p>see that such a high proportion of the respondents seem to have bought into the merits
         of proactive health management. However, it is also important to understand what drives
         the respondents to undergo a regular medical check-up. Around 50% cited the prevention of 
         health issues as being a motivator while 45% said that the check-up had been triggered by
          doctor’s advice.
        </p>
        <p>&nbsp;</p>   
          <div >  
          <img src={stat} width="820" height="327"
           loading="lazy" typeof="foaf:Image" className={styles.image}/>
           </div>
         <p>&nbsp;</p>

         <p>The role of the employer can also have a significant influence. Overall,
            26% of respondents reported having a regular check-up because it was provided
            as a workplace benefit. Amongst Japanese respondents this proportion swelled to 47% (Fig 22).
            </p>
          <p>&nbsp;</p>
          <div>
          <img src={check} 
          width="820" height="327" loading="lazy" typeof="foaf:Image" className={styles.image}/>
          </div>
          <p>&nbsp;</p>
          <h1 className={styles.title}><strong>Technology to the rescue</strong></h1>
          <p>&nbsp;</p>
          <p>Amongst those who did not have a regular health check, the biggest barriers were cost,
             which was cited by 44%, and the time and inconvenience, noted by 39% (Fig 23).
          </p>
          <p>The answer to overcoming these barriers May lie in technology. A number of 
              technology companies are working on systems and equipment to facilitate health management
              through convenient monitoring and reporting of health data.
          </p>  
          <p>Some are designed to track markers and treatment for specific conditions such as those that
              track blood pressure and heart rate in order to monitor stroke risk or those tracking the metrics
              associated with Type II diabetes. Other systems in development are designed to capture data relating
              to a broader family of conditions.
          </p>
          <p>These systems are set to revolutionise the possibilities for active health management.</p>
          <p>&nbsp;</p>
          <div>
           <img src={regular} width="820" height="601" loading="lazy" typeof="foaf:Image" className={styles.image} />
          </div>

    </div>
  )
  }

export default CheckUp
