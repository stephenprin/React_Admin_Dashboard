import ChartBox from '../../components/chartBox/ChartBox'
import TopBox from '../../components/topBox/TopBox'
import './home.scss'
import { chartBoxUser } from '../../utils/data'
import { chartBoxProduct } from '../../utils/data'
import { chartBoxRevenue } from '../../utils/data'
import {chartBoxConversion} from '../../utils/data'

const Home = () => {
  return (
    <div className="home">
      
      <div className='box box1'>
        <TopBox/>
      </div>
      <div className='box box2 chartBox'>
        <ChartBox {...chartBoxUser} />
      </div>
      <div className='box box3 chartBox'>
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className='box box4'>box4</div>
      <div className='box box5 chartBox'>
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className='box box6 chartBox'>
        <ChartBox  {...chartBoxConversion} />
      </div>
      <div className='box box7'>box7</div>
      <div className='box box8'>box8</div>
      <div className='box box9'>box9</div>
    </div>
  )
}

export default Home