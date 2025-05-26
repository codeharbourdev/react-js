import './Product.css'

const Product = (props) => {
  return (
    <ul className='product-list'>
        {props.filteredItem.length > 0 ? (
            props.filteredItem.map(product => (
                <li key={product.id} className='product-item'>{product.name}</li>
            ))
        ) : (
            <li className='no-item'>No Item Required 🤷‍♀️</li>
        )}
    </ul>
  )
}

export default Product
