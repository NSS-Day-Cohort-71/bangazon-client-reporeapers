import { fetchWithResponse } from './fetcher'

export function getCart() {
  return fetchWithResponse('cart', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function getOrders() {
  return fetchWithResponse('orders', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function completeCurrentOrder(orderId, paymentTypeId) {
  console.log("Order ID:", orderId, "Payment Type ID:", paymentTypeId);
  return fetchWithResponse(`orders/${orderId}/complete`, {
    method: 'PUT',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ payment_type_id: paymentTypeId})
  })
}
