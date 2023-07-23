import TopBox from '../../components/topBox/TopBox'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      
      <div className='box box1'>
        <TopBox/>
      </div>
      <div className='box box2 chartBox'>box2</div>
      <div className='box box3 chartBox'>box3</div>
      <div className='box box4'>box4</div>
      <div className='box box5 chartBox'>box5</div>
      <div className='box box6 chartBox'>box6</div>
      <div className='box box7'>box7</div>
      <div className='box box8'>box8</div>
      <div className='box box9'>box9</div>
    </div>
  )
}

export default Home