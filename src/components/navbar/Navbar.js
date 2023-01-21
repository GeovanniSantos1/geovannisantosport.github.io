import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';
import { Link as LinkScroll } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useWindowScroll } from 'react-use';

const Navbar = () => {
  const ref = useRef(null);
  const { y } = useWindowScroll();
  const [lastScroll, setLastScroll] = useState(0);
  const [navCss, setNavCss] = useState(styles.navbar);

  // console.log(x, y);

  useEffect(() => {
    if (y === lastScroll) return;
    if (y > lastScroll && y > 700) {
      setNavCss(styles.navbar_hidden);
    } else {
      setNavCss(styles.navbar);
    }
    setLastScroll(y);
  }, [lastScroll, y])

  const closeMenu = (e) => {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const checkRef = ref.current;
    if (width <= 858) {
      checkRef.checked = false;
    }
  }

  return (
    <header className={navCss}>
      <input type="checkbox" id="check" className={styles.checkinput} ref={ref} />
      <p className={styles.logo}>Portfólio</p>
      <label htmlFor="check" className={styles.checkbtn} >
        <AiOutlineMenu />
      </label>
      <label htmlFor="check" className={styles.checkbtnclose} >
        <AiOutlineClose />
      </label>
      <ul className={styles.menu_list} id="navmenu">
        <li className={styles.menu_item}>
          <LinkScroll to="resume" spy={true} smooth={true} offset={-70} duration={500} className={styles.link} onClick={closeMenu} >Home</LinkScroll>
        </li>
        <li className={styles.menu_item}>
          <LinkScroll to="projects" spy={true} smooth={true} offset={-70} duration={500} className={styles.link} onClick={closeMenu}>Projetos</LinkScroll>
        </li>
        <li className={styles.menu_item}>
          <LinkScroll to="about" spy={true} smooth={true} offset={-70} duration={500} className={styles.link} onClick={closeMenu}>Sobre Mim</LinkScroll>
        </li>
      </ul>
    </header>
  )
}

export default Navbar;
