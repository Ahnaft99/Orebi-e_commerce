import Container from './Container'
import ad1 from '../assets/Ad_1.png'
import ad2 from '../assets/Ad_2.png'
import ad3 from '../assets/Ad_3.png'

const Offer = () => {
  return (
    <div>
      <Container>
        <div className='flex flex-col md:flex-row gap-3 py-5 w-full'>
    
          <div className='w-full md:w-1/2'>
            <img src={ad1} alt="Ad 1" className='w-full h-auto object-cover' />
          </div>

          <div className='w-full md:w-1/2 flex flex-col gap-3'>
            <img src={ad2} alt="Ad 2" className='w-full h-auto object-cover' />
            <div className='py-3 md:py-7'>
              <img src={ad3} alt="Ad 3" className='w-full h-auto object-cover' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Offer
