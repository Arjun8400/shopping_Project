import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartTotal } from '../features/Cart/cartSlice'

const Order = () => {
  const dispatch = useDispatch()
  const { cart, TotalPrice, TotalQuantity } = useSelector((state) => state.Cart)

  useEffect(() => {
    // ensure totals are up to date
    dispatch(cartTotal())
  }, [cart, dispatch])

  const [address, setAddress] = useState({
    fullName: '',
    line1: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
  })

  const [payment, setPayment] = useState({ method: 'cod', cardNumber: '', expiry: '', cvv: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value })
  }

  const handlePaymentChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const err = {}
    if (!address.fullName) err.fullName = 'Full name is required'
    if (!address.line1) err.line1 = 'Address line is required'
    if (!address.city) err.city = 'City is required'
    if (!address.zip) err.zip = 'ZIP/postal code is required'
    if (!address.phone) err.phone = 'Phone is required'
    if (!address.email) err.email = 'Email is required'

    if (payment.method === 'card') {
      if (!payment.cardNumber) err.cardNumber = 'Card number required'
      if (!payment.expiry) err.expiry = 'Expiry required'
      if (!payment.cvv) err.cvv = 'CVV required'
    }

    setErrors(err)
    return Object.keys(err).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess('')
    if (!validate()) return

    // Mock submit - in real app you'd call backend endpoints
    const orderPayload = {
      address,
      payment: { ...payment, method: payment.method },
      items: cart,
      total: TotalPrice,
      quantity: TotalQuantity,
    }

    console.log('Submitting order:', orderPayload)
    setSuccess('Order placed successfully!')
  }

  return (
    <div style={{ padding: 20, maxWidth: 1000, margin: '0 auto' }}>
      <h2>Checkout</h2>
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
        <form onSubmit={handleSubmit} style={{ flex: 1 }}>
          <h3>Shipping Address</h3>
          <div style={{ marginBottom: 8 }}>
            <input name="fullName" placeholder="Full name" value={address.fullName} onChange={handleAddressChange} style={{ width: '100%', padding: 8 }} />
            {errors.fullName && <div style={{ color: 'red' }}>{errors.fullName}</div>}
          </div>

          <div style={{ marginBottom: 8 }}>
            <input name="line1" placeholder="Address line 1" value={address.line1} onChange={handleAddressChange} style={{ width: '100%', padding: 8 }} />
            {errors.line1 && <div style={{ color: 'red' }}>{errors.line1}</div>}
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            <input name="city" placeholder="City" value={address.city} onChange={handleAddressChange} style={{ flex: 1, padding: 8 }} />
            <input name="state" placeholder="State" value={address.state} onChange={handleAddressChange} style={{ width: 140, padding: 8 }} />
            <input name="zip" placeholder="ZIP" value={address.zip} onChange={handleAddressChange} style={{ width: 120, padding: 8 }} />
          </div>
          {errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}
          {errors.zip && <div style={{ color: 'red' }}>{errors.zip}</div>}

          <div style={{ marginBottom: 8 }}>
            <input name="phone" placeholder="Phone" value={address.phone} onChange={handleAddressChange} style={{ width: '100%', padding: 8 }} />
            {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
          </div>

          <div style={{ marginBottom: 16 }}>
            <input name="email" placeholder="Email" value={address.email} onChange={handleAddressChange} style={{ width: '100%', padding: 8 }} />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>

          <h3>Payment</h3>
          <div style={{ marginBottom: 8 }}>
            <label style={{ marginRight: 12 }}>
              <input type="radio" name="method" value="cod" checked={payment.method === 'cod'} onChange={() => setPayment({ ...payment, method: 'cod' })} /> COD
            </label>
            <label>
              <input type="radio" name="method" value="card" checked={payment.method === 'card'} onChange={() => setPayment({ ...payment, method: 'card' })} /> Card
            </label>
          </div>

          {payment.method === 'card' && (
            <div style={{ marginBottom: 12 }}>
              <div style={{ marginBottom: 8 }}>
                <input name="cardNumber" placeholder="Card number" value={payment.cardNumber} onChange={handlePaymentChange} style={{ width: '100%', padding: 8 }} />
                {errors.cardNumber && <div style={{ color: 'red' }}>{errors.cardNumber}</div>}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <input name="expiry" placeholder="MM/YY" value={payment.expiry} onChange={handlePaymentChange} style={{ flex: 1, padding: 8 }} />
                <input name="cvv" placeholder="CVV" value={payment.cvv} onChange={handlePaymentChange} style={{ width: 120, padding: 8 }} />
              </div>
              {errors.expiry && <div style={{ color: 'red' }}>{errors.expiry}</div>}
              {errors.cvv && <div style={{ color: 'red' }}>{errors.cvv}</div>}
            </div>
          )}

          <button type="submit" style={{ padding: '10px 16px' }}>Place order</button>

          {success && <div style={{ marginTop: 12, color: 'green' }}>{success}</div>}
        </form>

        <aside style={{ width: 360, border: '1px solid #ddd', padding: 16, borderRadius: 6 }}>
          <h3>Order Summary</h3>
          <div style={{ marginBottom: 8 }}><strong>Items:</strong> {TotalQuantity}</div>
          <div style={{ marginBottom: 8 }}><strong>Subtotal:</strong> ${Number(TotalPrice).toFixed(2)}</div>

          <div style={{ marginTop: 12 }}>
            <h4>Items</h4>
            <div style={{ maxHeight: 240, overflow: 'auto' }}>
              {cart && cart.length ? (
                cart.map((it) => (
                  <div key={it._id} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #f0f0f0' }}>
                    <div>
                      <div style={{ fontSize: 14 }}>{it.productName || it.name || 'Product'}</div>
                      <div style={{ fontSize: 12, color: '#666' }}>Qty: {it.qunatity || it.quantity || 1}</div>
                    </div>
                    <div>${(parseFloat(it.productPrice || it.price || 0) * (it.qunatity || it.quantity || 1)).toFixed(2)}</div>
                  </div>
                ))
              ) : (
                <div>No items in cart</div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Order