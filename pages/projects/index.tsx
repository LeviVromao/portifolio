import React from "react";
import Image from "next/image";
import styles from "@/styles/Projects.module.css"
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className={styles.projects}>
      <div className={styles.logoHeader}>
        <Link 
          href='/'
          className={styles.logo}
          >
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconLogo} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="32" height="32" ><path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd"></path></svg>
          <p className={styles.headerP}>LeVii13</p>
        </Link> 
      </div>
      <h1 className={styles.title}>👷 Projects</h1>  
      <ul className={styles.projectstUl}>
        <li className={styles.list}>
          <Link className={styles.links} target="_blank" href="https://watch-party-levi.vercel.app/">
            <svg stroke="currentColor" className={styles.img} fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z"></path></svg>
            <h2 className={styles.watchPartyTitle}>Watch Party</h2>
            <p className={styles.siteLink}>https://watch-party-levi.vercel.app/</p>
          </Link>
          <Link href="https://watch-party-levi.vercel.app/" target="_blank">
            <Image src="/banner-watch-party.png" className={styles.bannerSites} alt="" width={210} height={210}/>
          </Link>
        </li>
        <li className={styles.list}>
          <Link className={styles.links} target="_blank" href="https://e-learning-mu-gray.vercel.app/">
            <Image src="/e-learning-logo.png" className={styles.img} alt="an logo of the Ur Academy site" width={80} height={80}/>
            <h2 className={styles.urAcademyTitle}>Ur Academy</h2>
            <p className={styles.siteLink}>https://e-learning-mu-gray.vercel.app/</p>
          </Link>
          <Link href="https://e-learning-mu-gray.vercel.app/" target="_blank">
            <Image src="/banner-e-learning.png" className={styles.bannerSites} alt="" width={210} height={210}/>
          </Link>
        </li>
        <li className={styles.list}>
          <Link className={styles.links} href="https://clone-filmes-vitor.vercel.app/" target="_blank">
            <Image src="/clone-netflix-logo.png" className={styles.img} alt="An Netflix logo" width={120} height={120}/>
            <h2 className={styles.cloneNetflixTitle}>Clone Netflix</h2>
            <p className={styles.siteLink}>https://clone-filmes-vitor.vercel.app/</p>
          </Link>
          <Link href="https://clone-filmes-vitor.vercel.app/" target="_blank">
            <Image src="/banner-clone-netflix.png" className={styles.bannerSites} alt="" width={210} height={210}/>
          </Link>
        </li>
      </ul>
    </div>
  )
}



/**
 * Watch party - 1
 * e-learning - 2
 * clone Netflix -3
 */