import Image from 'next/image'
import card1 from '../Assets/Image/card1.jpg'

const Card = ({ product }) => {
    return (
        <div className='mx-3'>
            <Image src={product ? product?.image_url : card1} alt='rgre' height={1000} width={1000} className='rounded-2xl h-[382px] min-w-[312px]' />
            <div className='py-2'>
                <p className='text-[#1C1C1C] text-[14px]'>{product ? product?.name : "Moisturizers"}</p>
                <h1 className='text-[28px] text-[#1C1C1C]'>Glow Guard Serum</h1>
                <h1 className='text-[#657E68]'>$32</h1>
            </div>
        </div>
    )
}
export default Card