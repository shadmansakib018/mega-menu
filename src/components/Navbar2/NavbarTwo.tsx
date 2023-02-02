import React, { useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';
import styles from './NavbarTwoStyles.module.css';
//@ts-ignore
import { CSSTransition } from 'react-transition-group';
import blog from './blog.jpg'

function NavbarTwo() {
  const nodeRef = useRef(null);

  const [showMegaMenu, setShowMegaMenu] = React.useState<boolean>(false);
  return (
    <nav
      style={{ borderBottom: showMegaMenu ? '1px solid #e0e0e0' : 'none' }}
      className={styles.navbartwo}
    >
      <h1>ClickUp!!</h1>

      <div
        onMouseEnter={() => setShowMegaMenu(true)}
        onMouseLeave={() => setShowMegaMenu(false)}
        className={styles.linkContainer}
      >
        <p>Learn</p>

        <FiChevronDown className={styles.icon} />
      </div>
      <div className={styles.linkContainer}>
        <p>Solution</p>
        <FiChevronDown className={styles.icon} />
      </div>
      <div className={styles.linkContainer}>
        <p>More</p>
        <FiChevronDown className={styles.icon} />
      </div>

      <CSSTransition
        in={showMegaMenu}
        timeout={300}
        classNames='dropdowntransition'
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div
          ref={nodeRef}
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={() => setShowMegaMenu(false)}
          className={styles.dropdownContainer}
        >
          <div>
            <p>check out more</p>
          </div>
          <div>
            <p>See More</p>
          </div>
          <div>
            <div className={styles.blogSection}>
              <h4>Latest from blog</h4>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <h4>see all</h4>
                <FiArrowRight />
              </div>
            </div>
            <div className={styles.blogPosts}>
                <img src={blog} className={styles.img}/>
                    <p>15 best creative projects</p>
            </div>
            <div className={styles.blogPosts}>
                <img src={blog} className={styles.img}/>
                    <p>15 best creative projects</p>
            </div>
            <div className={styles.blogPosts}>
                <img src={blog} className={styles.img}/>
                    <p>15 best creative projects</p>
            </div>
          </div>
        </div>
      </CSSTransition>
    </nav>
  );
}

export default NavbarTwo;
