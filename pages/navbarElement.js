import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const NavbarElement = ({ title, arr }) => {
  const [up, setUp] = useState(false)

  return (
    <>
      <div
        className={styles.dropdown}
        onMouseEnter={() => setUp(true)}
        onMouseLeave={() => setUp(false)}
      >
        <button className={styles.dropBtn}>
          {title}
          {up && (
            <hr
              style={{
                backgroundColor: '#24b4ba',
                height: '3px',
                margin: '5px',
              }}
            />
          )}
        </button>
        <ul className={styles['dropdown-content']}>{arr}</ul>
        <FontAwesomeIcon
          icon={up ? faArrowUp : faArrowDown}
          style={{ marginLeft: '3px', width: '20px', color: 'white', textAlign: 'center', height:'10px' }}
        />
      </div>
    </>
  )
}

export default NavbarElement
