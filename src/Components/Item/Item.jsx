import React from "react"
import './Item.css'
import { Link } from "react-router-dom";

function Item(props) {

  return (
    <div className="item">
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  )
}
export default Item;


// import p1_img from '../Assets/product1.jpeg'
// import p2_img from '../Assets/product2.jpeg'
// import p3_img from '../Assets/product3.jpeg'
// import p4_img from '../Assets/product4.jpeg'

// function Item() {

//     let data_product = [
//         {
//             id: 1,
//             name: "Striped Flutter Sleeves Blouse",
//             image: p1_img,
//             new_price: 50.00,
//             old_price: 80.50,
//         },
//         {
//             id: 2,
//             name: "Striped Flutter Sleeves Blouse",
//             image: p2_img,
//             new_price: 79.00,
//             old_price: 99.50,
//         },
//         {
//             id: 3,
//             name: "Striped Flutter Sleeves Blouse hvi3 hci3 hcu374 c7",
//             image: p3_img,
//             new_price: 60.00,
//             old_price: 80.50,
//         },
//         {
//             id: 4,
//             name: "Striped Flutter Floral Sleeves Blouse",
//             image: p4_img,
//             new_price: 80.99,
//             old_price: 100.50,
//         }
//     ]

//   return (
//     <div className="item">
//         <ul className="item-card">
//         {data_product.map((item, i) => 
//           <li className="item-details" key={i}>
//             <img src={item.image} alt="" />
//             <br />
//             <li className="item-name">{item.name}</li>
//             <li className="item-price-new" style={{textAlign: 'left'}}>${item.new_price}</li> 
//             <li className="item-price-old" style={{textDecoration: 'line-through'}}>${item.old_price}</li>
//           </li>
//         )}
//         </ul>
      
//     </div>
//   )
// }
// export default Item;