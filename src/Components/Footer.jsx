import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logoF from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="py-5 lg:py-[45px] bg-[#F5F5F3]">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="flex flex-wrap gap-6 lg:gap-0">

          <div className="w-1/2 sm:w-1/4 lg:w-2/12">
            <h2 className="text-[#262626] text-[16px] font-dm font-bold cursor-pointer">MENU</h2>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-2 lg:pt-[18px] cursor-pointer">Home</p>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[5px] lg:pt-[10px] cursor-pointer">Shop</p>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[5px] lg:pt-[10px] cursor-pointer">About</p>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[5px] lg:pt-[10px] cursor-pointer">Contact</p>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[5px] lg:pt-[10px] cursor-pointer">Journal</p>
          </div>


          <div className="w-1/2 sm:w-1/4 lg:w-2/12">
            <h2 className="text-[#262626] text-[16px] font-dm font-bold cursor-pointer">SHOP</h2>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-2 lg:pt-[18px] cursor-pointer">Category 1</p>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[5px] lg:pt-[10px] cursor-pointer">Category 2</p>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[5px] lg:pt-[10px] cursor-pointer">Category 3</p>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[5px] lg:pt-[10px] cursor-pointer">Category 4</p>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[5px] lg:pt-[10px] cursor-pointer">Category 5</p>
          </div>


          <div className="w-1/2 sm:w-1/4 lg:w-2/12">
            <h2 className="text-[#262626] text-[16px] font-dm font-bold cursor-pointer">HELP</h2>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-2 lg:pt-[18px] cursor-pointer">Privacy Policy</p>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[5px] lg:pt-[10px] cursor-pointer">Terms & Conditions</p>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[5px] lg:pt-[10px] cursor-pointer">Special E-shop</p>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[5px] lg:pt-[10px] cursor-pointer">Shipping</p>
            <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[5px] lg:pt-[10px] cursor-pointer">Secure Payments</p>
          </div>


          <div className="w-1/2 sm:w-1/2 lg:w-3/12 flex flex-col gap-2 lg:gap-0">
            <p className="text-[#262626] text-[14px] lg:text-[16px] font-dm font-bold">(052) 611-5711</p>
            <p className="text-[#262626] text-[14px] lg:text-[16px] font-dm font-bold">company@domain.com</p>
          </div>

 
          <div className="w-1/2 sm:w-1/2 lg:w-3/12 flex justify-center lg:justify-end">
            <img src={logoF} alt="Logo" className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain"/>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center lg:mt-[40px] mt-5 gap-3 sm:gap-0">
          <div className="flex items-center gap-x-3">
            <FaFacebookF className='cursor-pointer'/>
            <FaLinkedinIn className='cursor-pointer'/>
            <FaInstagram className='cursor-pointer'/>
          </div>
          <p className='text-[#6D6D6D] text-[12px] sm:text-[14px] font-dm font-normal text-center sm:text-right'>
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
