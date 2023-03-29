import React from 'react'
import styles from '../styles/Home.module.css'

const First = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <div>“</div>
        <br />
        <h2>
          Our real wealth lies in the ambition of our people and the potential
          of our younger generations.
        </h2>
      </div>
      <div className={styles.slide}>
        <h2>Creating a Vision for All</h2>
      </div>
      <div className={styles.slide}>
        <h2>Empowering the Private Sector</h2>
      </div>
      <div className={styles.slide}>
        <div>“</div>
        <h2>
          My primary goal is to be an exemplary and leading nation in all
          aspects, and I will work with you in achieving this endeavour.
        </h2>
      </div>
      <div className={styles.slide}>
        <h2>A Vision That Empowers Giving</h2>
      </div>
      <div className={styles.slide}>
        <h2>Vision 2030: A Story of Transformation</h2>
      </div>
    </div>
  )
}

export default First
