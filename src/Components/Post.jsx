
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import { IoGitCompareOutline } from 'react-icons/io5'


const Post = ({allpage}) => {
   
  return (
    <>
    <div className='flex flex-wrap justify-between '>
    {allpage.map((item)=>(
 <div className='relative group'>
                            
 <img src={item.thumbnail}  className='w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] object-cover' />
 <div className='flex justify-between'>
 <p>{item.title}</p>
 <p>${item.price}</p>
 </div>
 


 <div className='absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-white w-full p-2 flex flex-col gap-1'>
     <p className='flex items-center gap-2 cursor-pointer hover:font-bold text-sm sm:text-[14px]'>Add to Wish List <FaHeart /></p>
     <p className='flex items-center gap-2 cursor-pointer hover:font-bold text-sm sm:text-[14px]'>Compare <IoGitCompareOutline /></p>
     <p className='flex items-center gap-2 cursor-pointer hover:font-bold text-sm sm:text-[14px]'>Add to Cart <FaCartPlus /></p>
 </div>


 <div className='absolute left-0 top-0 bg-[#262626] px-1'>
     <p className='text-[#fff] text-[12px] sm:text-[14px] font-dm'>%{item.discountPercentage} </p>
 </div>
</div>
    ))}
    </div>
   
    

    </>
  )
}

export default Post