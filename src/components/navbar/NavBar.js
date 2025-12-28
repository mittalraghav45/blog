import React from 'react'
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const NavBar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.social}>
      <Image src='/facebook.png' alt='facebook-logo' width={24} height={24}/>
      <Image src='/instagram.png' alt='instagram-logo' width={24} height={24}/>
      <Image src='/tiktok.png' alt='tiktok-logo' width={24} height={24}/>
      <Image src='/youtube.png' alt='yt-logo' width={24} height={24}/>
    </div>
    <div className={styles.logo}>Blog LOgo</div>
    <div className={styles.links}>
      <ThemeToggle/>
      <Link href='/'>HomePage</Link>
      <Link href='/'>Contact</Link>
      <Link href='/'>About</Link>
      <AuthLinks/>
    </div>
      
    </div>
  )
}

export default NavBar