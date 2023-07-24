import ChartBox from '../../components/chartBox/ChartBox'
import TopBox from '../../components/topBox/TopBox'
import './home.scss'
import { chartBoxUser } from '../../utils/data'
import { chartBoxProduct } from '../../utils/data'
import { chartBoxRevenue } from '../../utils/data'
import { chartBoxConversion } from '../../utils/data'
import {barChartBoxVisit} from '../../utils/data'
import BarChartBox from '../../components/barChart/BarChart'

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
      <div className='box box7'>
        7
      </div>
      <div className='box box8'>
      <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className='box box9'>box9</div>
    </div>
  )
}

export default Home