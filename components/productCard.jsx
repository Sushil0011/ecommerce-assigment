import Image from "next/image";
import styles from "../styles/itemCard.module.scss"
import images from './productDatabase'
import bookmark from '../public/Bookmark.png'
import cartbag from "../public/cart.png"
const ProductCard = ({elem}) => {

const {image,title,price,offerprice}=elem;
console.log(title)
  return (
    <div className={styles.card}>
      <Image src={image} height={432.53} width={288} alt=""/>




      <div className={styles.info}>

        <p>{title}</p>

      <div className={styles.priceContainer}>
        <h3> &#8377;{offerprice}</h3>

        <div className={styles.price}><del>{price}</del> <p>( 50% Off )</p></div>
        <Image src={cartbag} height={43} width={35} alt="cartBag"  style={{color:"white",objectFit:"contain"}}/>
 
      </div>

        </div>
        <Image   className={styles.bookmark} src={bookmark} height={36} width={26} alt="bookmark"/>

    </div>
  )
}

export default ProductCard