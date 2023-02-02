import React from 'react';
//@ts-ignore
import Slide from 'react-reveal/Slide';
//@ts-ignore
import Fade from 'react-reveal/Fade';
//@ts-ignore
import Zoom from 'react-reveal/Zoom';

import {FiChevronDown} from "react-icons/fi";
import {FiArrowRight} from "react-icons/fi";

function Navbar() {
  const [showMenu, setshowMenu] = React.useState<boolean>(false);
  const [menuProduct, setMenuProduct] = React.useState<boolean>(false);
  const [showLearn, setShowLearn] = React.useState<boolean>(false);

  return (
    <div className='navbar'>
      <h1
        onClick={() => {
          setshowMenu(false);
          setMenuProduct(false);
          setShowLearn(false);
        }}
        style={{ marginRight: '70px' }}
      >
        ClickUP!!
      </h1>
      <h3
        className='link'
        onClick={() => {
          setshowMenu(true);
          setMenuProduct(true);
          setShowLearn(false);
        }}
      >
        Product
      </h3>
      <h3 className='link'>Solutions</h3>
      <h3
        onClick={() => {
          setshowMenu(true);
          setMenuProduct(false);
          setShowLearn(true);
        }}
        className='link'
      >
        Learn
      </h3>
      <h3 className='link'>Services</h3>
      {/* {showMenu && ( */}
        <Slide top duration={400} when={showMenu}>
          <div className='megamenu'>
            {menuProduct && (
              <Fade when={menuProduct}>
                <div className='side1'>
                  <Fade top delay={100}>
                    <p className='innerlink'>Products</p>
                    <p className='innerlink'>learn more</p>
                    
                  </Fade>
                </div>
                <div className='side2'>
                  <Fade top delay={100}>
                    <p className='innerlink'>learn more</p>
                    <p className='innerlink'>learn more</p>
                    
                  </Fade>
                </div>
              </Fade>
            )}

            {showLearn && (
              <Fade when={showLearn}>
                <div className='side1'>
                  <Fade left={true}>
                    <p className='innerlink'>Learnnnnnn</p>
                    <p className='innerlink'>learn more</p>
                    <p className='innerlink'>learn more</p>
                    <p className='innerlink'>learn more</p>
                  </Fade>
                </div>
                <div className='side2'>
                  <Fade left={true}>
                    <p className='innerlink'>learn more</p>
                    <p className='innerlink'>learn more</p>
                    <p className='innerlink'>learn more</p>
                    <p className='innerlink'>learn more</p>
                  </Fade>
                </div>
              </Fade>
            )}
          </div>
        </Slide>
      {/* )} */}
    </div>
  );
}

export default Navbar;
