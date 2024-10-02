import Table from "../table"

export default function CartDetail({ cart, removeProduct }) {
  const headers = ['Product', 'Price', '']

  const total = cart.lineitems?.reduce((acc, item) => acc + item.product.price, 0) || 0;

  const footers = ['Total', total.toFixed(2), ''];

  return (
    <Table headers={headers} footers={footers}>
      {
        cart.lineitems?.map(item => {
          return (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>
                <span className="icon is-clickable" onClick={() => removeProduct(item.product.id)}>
                  <i className="fas fa-trash"></i>
                </span>
              </td>
            </tr>
          )
        })
      }
    </Table>
  )
}
