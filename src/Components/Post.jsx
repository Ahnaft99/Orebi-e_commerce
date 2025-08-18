import { FaHeart, FaShoppingCart } from "react-icons/fa"
import { FaCodeCompare } from "react-icons/fa6"

const Post = ({allPage}) => {
  return (
    <>
    { allPage.map((item)=>(
        <div className=" !w-[31%] relative group">
            <div className="w-full ">
                <img src={item.thumbnail} alt="" className="w-full" />
            </div>
            <div className="flex justify-between mt-5 z-10">
                <p className="text-[#262626] text-[16px] font-dm font-bold">{item.title}</p>
                <p className="text-[#767676] text-[16px] font-normal font-dm">${item.price}</p>
            </div>
            <div className="">
                <p className="text-[#767676] text-[16px] font-dm font-normal pt-3">Black</p>
            </div>
            <div className="absolute top-2 left-2">
                <p className="text-[#FFFFFF]  text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black hover:bg-[#2e2b2b] cursor-pointer">New</p>
            </div>
            <div className="absolute !w-[100%] left-0 bottom-[62px]">
                <div className=" opacity-0 group-hover:opacity-99 duration-300 ease-in-out bg-[#FFFFFF]">
                    <div className="pt-[26px] opacity-0 group-hover:opacity-95">
                        <div className="flex items-center justify-end mr-3">
                            <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Wish List</p>
                            <FaHeart className="" />
                        </div>
                        <div className="flex items-center justify-end mr-3 mt-[16px]">
                            <FaCodeCompare className="" />
                        </div>
                        <div className="flex items-center justify-end mr-3 mt-[16px]">
                            <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Cart</p>
                            <FaShoppingCart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default Post