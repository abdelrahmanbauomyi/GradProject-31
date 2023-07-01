
import Covid1 from '../../../assets/Covid1.png'
import styles from './Covid.module.css'
import Header from '../../Header/Header'
import { useNavigate } from 'react-router-dom'

const Covid = () => {
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
        <path d="M25 29L19 23L25 17" stroke="#056839" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round">
        </path>
        </svg>
      </button>
        <h1 className={styles.text}>Tips to help if you are worried about COVID-19</h1>
      <section className={styles.sectionyellowtint} id="1">
        <div className={styles.nhsukwidthcontainer}>
          <div className={styles.nhsukgridrow}>
            <div className={` ${styles.nhsukgridcolumnfull} ${styles.nhsuksectioncontent}`}>
              <div className={styles.nhsukureadingwidth}>     
        </div>
      <div className={`${styles.emmcontainer} ${styles.emmleftcolumnimage}`} >
        <div className={`${styles.emmcontainergrid} ${styles.appcontainerblock}`}>
          <figure className={styles.nhsukimage}>
            <img className={styles.nhsukimageimg}
              src={Covid1}
            />
          </figure>    
        </div>
      <div className={styles.emmcontainergrid}>  
        <h2 data-block-key="5f6id">1. Stay connected with people</h2>
          <p data-block-key="pci9p">Maintaining healthy relationships with people we trust is
            important for our mental wellbeing. We all need to feel connected, so keep in touch
          – whether it's with people you see often or reconnecting with old friends.
          </p>
          <p data-block-key="4h0hb">There are lots of different ways to connect. You could 
            schedule time each week to meet in person, speak over the phone or make time for
            regular video calls.</p>
          <p data-block-key="i7vge">Social media is another good way to stay connected,
            but make sure you take regular breaks from your devices – and switch off before bed.
          </p>   
      </div>
      </div>  
      </div>
    </div>
    </div>
    </section>


<section className={styles.sectionlimegreentint} id="2">
  <div className={styles.nhsukwidthcontainer}>
    <div className={styles.nhsukgridrow}>    
        <div className={` ${styles.nhsukgridcolumnfull} ${styles.nhsuksectioncontent}`}>
           <div className={styles.nhsukureadingwidth}>         
            </div>
<div className={`${styles.emmcontainer} ${styles.emmalignright}`}>
  <div className={`${styles.emmcontainergrid} ${styles.appcontainerblock}`}>
<figure className={styles.nhsukimage}>
  <img className={styles.nhsukimageimg} 
  src="https://assets.nhs.uk/campaigns-cms-prod/images/Coronavirus_tip_-_Talk_about_your_worries_dKDa.width-320.png" 
  />
</figure>   
  </div>
  <div className={styles.emmcontainergrid}>
        <h2 data-block-key="mbqfr">2. Talk about your worries</h2>
        <p data-block-key="ka5jj">The COVID-19 outbreak is unlike anything we have experienced before,
         and it's normal if you have felt worried, scared or helpless.
         </p>
         <p data-block-key="4y60k">Remember: it's OK to share your concerns with others you trust –
          and doing so may help them too.</p>
          <p data-block-key="s2vk5">If you cannot speak to someone you know or if doing so has not helped,
           there are plenty of helplines you can try instead.
          </p>
      </div>
      </div>
     </div>
    </div>
  </div>
</section>

<section className={styles.sectionyellowtint} id="3">
  <div className={styles.nhsukwidthcontainer}>
    <div className={styles.nhsukgridrow}>
        <div className={` ${styles.nhsukgridcolumnfull} ${styles.nhsuksectioncontent}`}>
           <div className={styles.nhsukureadingwidth}>
            </div>
<div className={`${styles.emmcontainer} ${styles.emmleftcolumnimage}`}>
  <div className={`${styles.emmcontainergrid} ${styles.appcontainerblock}`}>
<figure className={styles.nhsukimage}>
  <img className={styles.nhsukimageimg}
   src="https://assets.nhs.uk/campaigns-cms-prod/images/Coronavirus_tip_-_Support_and_help_others.width-320.png"/>
</figure>
  </div>
  <div className={styles.emmcontainergrid}>
        <h2 data-block-key="01nbj">3. Support and help others</h2>
        <p data-block-key="hobm3">Helping someone else can benefit you as well as them.
         Having an understanding of other people's concerns, worries or behaviour is a great
          way to show your support.</p>
          <p data-block-key="ku9xx">Try to think of things you can do to help those around you.
           Is there a friend or family member nearby you could regularly check in with? 
           If you're not local to them, try phoning or messaging instead.</p>
  </div>
</div>
   </div>
    </div>
  </div>
</section>

<section className={styles.sectionlimegreentint} id="4">
  <div className={styles.nhsukwidthcontainer}>
    <div className={styles.nhsukgridrow}>
    <div className={` ${styles.nhsukgridcolumnfull} ${styles.nhsuksectioncontent}`}>
           <div className={styles.nhsukureadingwidth}>         
            </div>
            <div className={`${styles.emmcontainer} ${styles.emmalignright}`}>
  <div className={`${styles.emmcontainergrid} ${styles.appcontainerblock}`}>
<figure className={styles.nhsukimage}>
  <img className={styles.nhsukimageimg} 
   src="https://assets.nhs.uk/campaigns-cms-prod/images/Coronavirus_tip_-_Look_after_your_body.width-320.png" />
</figure>
  </div>
  <div className={styles.emmcontainergrid}>
 <h2 data-block-key="6zqmg">4. Look after your body</h2>
 <p data-block-key="m7i25">Our physical health has a big impact on our mental wellbeing. 
 If we are not feeling good, it can be easy to fall into unhealthy patterns of behaviour
  that end up making us feel worse.</p>
  <p data-block-key="txy27">Try to eat well-balanced meals, drink enough water and exercise 
  regularly. Avoid smoking or drugs, and try not to drink too much alcohol.
  </p>
  <p data-block-key="t144p">Going for a walk, run or bike ride can really help lift your 
  mood and clear your mind – or you could try an easy 10-minute home workout.
  </p>   
  </div>
</div>
</div>
    </div>
  </div>
</section>




    </div>

    
  )
}

export default Covid
