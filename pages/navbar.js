import React from 'react'
import Image from 'next/image'
import NavbarElement from './navbarElement'
import styles from '../styles/Navbar.module.css'
import logo from '../public/colored-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const languageArray = ['EN', 'AR']
  const visionArray = [
    'Leadership Message',
    'Overview',
    'Vision Realization Programs',
    'Progress & Achievements',
    'Vision 2030 Projects',
    'A Sustainable Saudi Vision',
    'A Story of Transformation',
    'Empowering the Private Sector',
    'Creating a Vision for All',
  ]
  const kingdomArray = [
    'Explore Saudi Arabia',
    'Invest in Saudi Arabia',
    'Visit Saudi Arabia',
  ]
  const mediaArray = ['News', 'Media']
  return (
    <>
      <nav className={styles.nav}>
        <section>
          <Image src={logo} alt="the logo" priority={true} />
        </section>
        <section className={styles.links}>
          <ul className={styles.listLinks}>
            <li className={styles.link}>
              <NavbarElement
                title="EN"
                array={languageArray.map((el) => (
                  <li style={{ marginBottom: '5px' }} key={el}>
                    {el}
                  </li>
                ))}
              />
            </li>
            <li>
              <a>HOME</a>
            </li>
            <li className={styles.link}>
              <NavbarElement
                title="VISION 2030"
                arr={visionArray.map((el) => (
                  <li style={{ marginBottom: '5px' }} key={el}>
                    {el}
                  </li>
                ))}
              />
            </li>
            <li className={styles.link}>
              <NavbarElement
                title="ABOUT THE KINGDOM"
                arr={kingdomArray.map((el) => (
                  <li style={{ marginBottom: '5px' }} key={el}>
                    {el}
                  </li>
                ))}
              />
            </li>
            <li className={styles.link}>
              <NavbarElement
                title="MEDIA CENTER"
                arr={mediaArray.map((el) => (
                  <li style={{ marginBottom: '5px' }} key={el}>
                    {el}
                  </li>
                ))}
              />
            </li>
            <li>
              <a>CONTACT</a>
            </li>
            <li
              style={{
                marginLeft: '10px',
                marginRight: '10px',
                width: '0.1rem',
                height: '5rem',
                backgroundColor: 'rgba(255,255,255,.2)',
              }}
            ></li>
            <li>
              <FontAwesomeIcon
                icon={faSearch}
                style={{ margin: '3px', width: '20px', color: 'white' }}
              />
            </li>
          </ul>
        </section>
      </nav>
    </>
  )
}

export default Navbar
