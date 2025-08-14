
import Container from './Container'
import ad1 from '../assets/Ad_1.png'
import ad2 from '../assets/Ad_2.png'
import ad3 from '../assets/Ad_3.png'

const Offer = () => {
  return (
    <div>
    <Container>
        <div className='flex gap-3 py-5 w-full'>
            <div className='1/2'>
            <img src={ad1} alt="" />
            </div>
            <div className='1/2'>
            <img src={ad2} alt="" />
            <div className='py-7'>
            <img src={ad3} alt="" />
            </div>
            </div>
           
        </div>
    </Container>
</div>
  )
}

export default Offer