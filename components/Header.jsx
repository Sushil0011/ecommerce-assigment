import Link from 'next/link'
import styles from '../styles/header.module.scss'
import Image from 'next/image'
const Header = () => {
  return (

<>


<nav className={styles.navbar}>

<div   className={styles.logo}>
<h2>TANN TRIM</h2>

<div  className={styles.icons}>
<Image src='/search.png' width={18} height={18}  alt=""/>
<Image src='/user-alt.png' width={18} height={18}  alt=""/>
<Image src='/menubookmark.png' width={18} height={18} alt=""/>
<Image src='/shopping-bag.png' width={18} height={18} alt=""/>


</div>

</div>


<div className={styles.menus}>
<Link  href='/'>Bags</Link>
<Link  href='/travels'>Travel</Link>
<Link  href='/accesories'>Accesories</Link>
<Link  href='/gifting'>Gifting</Link>
<Link  href='/jewelery'>Jewelery</Link>
</div>


</nav>
</>

  )
}

export default Header