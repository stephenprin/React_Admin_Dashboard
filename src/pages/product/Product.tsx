import Single from '../../components/single/Single'
import './product.scss'
import {singleProduct} from '../../utils/data'

const Product = () => {
  return (
    <div className='product'>
          <Single {...singleProduct} />
    </div>
  )
}

export default Product
