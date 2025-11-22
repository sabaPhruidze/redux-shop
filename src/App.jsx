import { useSelector } from "react-redux"

function App() {
  // ვიღებთ მთლიან state-ს და იქიდან მხოლოდ ჩვენს cart-ს
  const cartData = useSelector((state) => state.cart)

  return (
    <div>
       სულ გადასახდელია: {cartData.totalPrice}
    </div>
  )
}

export default App
