import Image from "next/image";

type props = {
    imageUrl: any,
    title: String,
    description: String
}
export default function Advertisment({ imageUrl, title, description }: props) {

    return <div className='sm:w-[230px] max-sm:w-full flex flex-col shadow-md p-2 m-2 relative dark:bg-[#3B3E47]'>
        <div className="absolute top-0 right-0 px-2 rounded bg-black text-white">Ad</div>
        <div className='h-auto max-sm:w-full overflow-hidden shadow-md rounded'>
            <Image
                src={imageUrl}
                alt=''
                className='object-cover w-full h-full max-sm:w-full aspect-square'
            />
        </div>
        <div className='w-full items-end'>
            <p className='my-3 px-1 font-semibold text-base'>{title}</p>
            <p className='my-3 px-1 text-sm'>{description}</p>
        </div>
    </div>
}
