import Header from "../../Header/Header"
import styles from './Tips.module.css'

const Tips = () => {  
  return (
    
    <div>
      <Header  />
      <h1 className={styles.doctorstitle}>Health Tips</h1>
      <div className={styles.container}>
        <div className={styles.blog}>
          <a href="/Coivd" 
            className={styles.imagewrapper}>
          <picture>
            <source media="(max-width: 575px)" srcSet="https://oasisclinics.com/images/coronavirus-guide_hu2e44c639e52b9be564b2447f68a2150f_462593_500x0_resize_q75_h2_box_3.webp"/>
            <source media="(min-width: 576px)" srcSet="https://oasisclinics.com/images/coronavirus-guide_hu2e44c639e52b9be564b2447f68a2150f_462593_1000x0_resize_q75_h2_box_3.webp"/>
          <img loading="auto" 
           decoding="async" 
           className={styles.cardimage} 
           src="https://oasisclinics.com/images/coronavirus-guide_hu2e44c639e52b9be564b2447f68a2150f_462593_1000x0_resize_q75_h2_box_3.webp"
           alt="Coronavirus: No-Panic Help guide"/>
          </picture>
          </a>
            <div>
                <h2><a className={styles.cardheading} 
                href="Coivd">
                  Coronavirus: No-Panic Help guide</a>
                  </h2>
                <p className={styles.cardext}>
                  Here are the answers to the most common queries about the
                  Novel Coronavirus based on our discussion with the various
                  experts from the reputed institutes and analysis of the CDC,
                  WHO, and MoHFW guidelines…</p>
                <a href="/Coivd"
                className={`${styles.button} ${styles.buttonwhite}`}>Read More</a> 
            </div>         
        </div>
        <div className={styles.blog}>
            <a href="/BalanceHormones"
            className={styles.imagewrapper} >
            <picture>
               <source media="(max-width: 575px)" 
                srcSet="https://oasisclinics.com/images/balancing%20nutrition_hu16e5d5b560704da1dab81c7a828057c0_556022_500x0_resize_q75_h2_box_3.webp"/>
               <source media="(min-width: 576px)" 
                 srcSet="https://oasisclinics.com/images/balancing%20nutrition_hu16e5d5b560704da1dab81c7a828057c0_556022_1000x0_resize_q75_h2_box_3.webp"/>
               <img loading="auto"
                decoding="async"
                className={styles.cardimage}
                src="https://oasisclinics.com/images/balancing%20nutrition_hu16e5d5b560704da1dab81c7a828057c0_556022_1000x0_resize_q75_h2_box_3.webp"
                alt="Balancing Hormones Through Nutrition &amp; LifeStyle"/>
           </picture>
            </a>
            <div >
                <h2><a className={styles.cardheading}
                 href="/BalanceHormones">
                    Balancing Hormones Through Nutrition &amp; LifeStyle
                  </a></h2>
                <p className={styles.cardext}>
                We’ve all heard about hormones and how they can affect our mental,
                physical and emotional health, but what are hormones? 
                They are chemical messengers that travel around your bloodstream 
                playing a major role in controlling your appetite, weight, mood, sleep,
                stress level to name a few…</p>
                <a href="/BalanceHormones"
                 className={`${styles.button} ${styles.buttonwhite}`}>Read More
                </a>
            </div>          
        </div>
      
        <div className={styles.blog}>
            <a href="/CheckUp"
            className={styles.imagewrapper} >
              <picture>
               <source media="(max-width: 575px)" srcSet="https://oasisclinics.com/images/why%20regular%20checkup_hu19cb06f1c4be7f2e8cd854361b7c74ee_634520_500x0_resize_q75_h2_box_3.webp"/>
               <source media="(min-width: 576px)" srcSet="https://oasisclinics.com/images/why%20regular%20checkup_hu19cb06f1c4be7f2e8cd854361b7c74ee_634520_1000x0_resize_q75_h2_box_3.webp"/>
               <img loading="auto" 
                decoding="async"
                className={styles.cardimage}
                src="https://oasisclinics.com/images/why%20regular%20checkup_hu19cb06f1c4be7f2e8cd854361b7c74ee_634520_1000x0_resize_q75_h2_box_3.webp" alt="Why regular check-ups are important: Prevention is better than cure"/>
              </picture>
            </a>
            <div >
                <h2><a className={styles.cardheading}
                 href="/CheckUp">
                  Why regular check-ups are important: Prevention is better than cure</a></h2>
                <p className={styles.cardext}>
                  Here are the answers to the most common queries about the Novel Coronavirus 
                  based on our discussion with the various experts from the reputed institutes
                   and analysis of the CDC, WHO, and MoHFW guidelines…</p>
                <a href="/CheckUp" 
                className={`${styles.button} ${styles.buttonwhite}`}>Read More
                </a> 
            </div>          
        </div>
    
        </div>
      </div>
      
   
        
   
  )
}










export default Tips


