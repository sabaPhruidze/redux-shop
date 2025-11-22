import { useSelector,useDispatch } from "react-redux"
import { addToCart,clearCart } from "./redux/cartSlice"

function App() {
  // ვიღებთ მთლიან state-ს და იქიდან მხოლოდ ჩვენს cart-ს
  const cartData = useSelector((state) => state.cart)
  //ვქმნით კურიერს
  const dispatch = useDispatch();
  const banana = { id: 1, name: 'ბანანი', price: 3 };

  return (
    <div>
     <h1>  სულ გადასახდელია: {cartData.totalPrice} </h1>
     <button onClick={() => dispatch(addToCart(banana))}> {/* ვეუბნები რომ გაუშვას ბრძანება რომლითაც addToCart რომელიც შევქმენით slice ში ღილაკად მიიღოს და დაამუშაოს banana */}
      ბანანის ყიდვა
     </button>
     <button onClick={() => dispatch(clearCart())}>
      კალათის გასუფთავება
     </button>
    </div>
  )
}

export default App
