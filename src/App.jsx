import React from 'react';
import { useSelector,useDispatch } from "react-redux"
import { addToCart,clearCart } from "./redux/cartSlice"
import { ShoppingCart,Trash2 } from "lucide-react";

 const products = [
    {id:1, name:'მარწყვი',price:2.5},
    {id:2, name:'ვაშლი', price:3.5},
    {id:3, name:'ბანანი', price: 4.6},
    {id:4, name:'ანანასი', price : 9.8}
  ]
function App() {
  // ვიღებთ მთლიან state-ს და იქიდან მხოლოდ ჩვენს cart-ს
  const {cartItems, totalPrice} = useSelector((state) => state.cart)
  //ვქმნით კურიერს
  const dispatch = useDispatch();
 

  return (
    <div className='app-container'>
      <nav className='navbar'>
        <h1>Fresh Market</h1>
        <div className='cart-badge'>
          <ShoppingCart size={24}/>
          <span>{cartItems.length}</span>
          <span className='price-tag'>{totalPrice.toFixed(1)}</span> {/*used toFixed method from prototype */}

        </div>
      </nav>
      <main className='main-content'>
       <h2>აირჩიე სასურველი პროდუქტი</h2>
       <div className='products-grid'>
         {products.map((product) => (
          <div key={product.id} className='product-card'>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className='add-button' onClick={() => dispatch(addToCart(product))}>
              დამატება
            </button>
          </div>
        ))}
       </div>
       {cartItems.length > 0 && (
        <div className='cart-actions'>
          <button onClick={() => dispatch(clearCart())} className="clear-button">გაათავისუფლე კალათი</button>
          <Trash2 size={18}/>
        </div>
       )}
      </main>
    </div>
  )
}

export default App
