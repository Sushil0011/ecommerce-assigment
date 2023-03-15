import styles from '../styles/items.module.scss'
import Image from 'next/image'
const Products = ({img, title}) => {
  return (
   

 <div className={styles.items}>
<Image src={img} width={90} height={90} style={{objectFit:"contain"}}  alt=""/>
<h2  className={styles.name}>{title}</h2>
</div>


  )
}

export default Products;