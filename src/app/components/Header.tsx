import Image from 'next/image';
import logo from '../../public/icons/logos_netflix-icon.svg'

function Header() {
const Menu = ['Tv Shows' ,'Movies', 'My List']
  return (
    <div className='fixed top-[24px] flex justify-center items-center w-[375px] h-[57px] z-50'>
        <div className='mr-[25px]'>
            <Image
            src = {logo}
            alt='logo'
            width={56.67}
            height={57}
            />
        </div>
        <div className='flex space-x-[25px]'>
            {
                Menu.map((menu) => {
                    return(
                        <span className='font-normal text-header'key={menu}>
                            {menu}
                        </span>
                    )
                }
                )
            }
        </div>
    </div>
  )
}

export default Header