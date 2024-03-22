import React from 'react'
import image1 from '../asset/one/1.jpeg'
import image2 from '../asset/one/2.jpeg'
import image3 from '../asset/one/3.jpeg'
import image4 from '../asset/one/4.jpeg'
import advertismentImage from '../asset/one/adv.jpeg'
import Image from 'next/image'
import Advertisment from './Advertisment'

export default function SportsComponent() {

    type ApiData = {
        imageUrl: any,
        title: String,
        totalEvents: String,
        sport: String,
    }

    const Data: Array<ApiData> = [
        {
            imageUrl: image1,
            title: 'Sacramento River Cats',
            totalEvents: '48 events',
            sport: 'BasketBall',
        },
        {
            imageUrl: image2,
            title: 'Las Vegas Aviators',
            totalEvents: '28 events',
            sport: 'BaseBall',
        },
        {
            imageUrl: image3,
            title: 'New jersey devils',
            totalEvents: '15 events',
            sport: 'Ice Hockey',
        },
        {
            imageUrl: image4,
            title: 'Las Vegas Aviators',
            totalEvents: '28 events',
            sport: 'BaseBall',
        },
    ]
    return (
        <div>
            <h1 className='text-2xl font-semibold underline-offset-8 decoration-blue-700 underline m-6'>Sports</h1>
            <div className='flex flex-wrap justify-center my-4'>
                {Data.map((e, i) => {
                    return <div key={i} className='dark:bg-[#3B3E47] sm:w-[225px] max-sm:w-full flex items-center justify-between flex-col shadow-md p-2 m-2 rounded-md'>
                        <div className='h-[370px] max-sm:w-full overflow-hidden shadow-md rounded'>
                            <Image
                                src={e.imageUrl}
                                alt=''
                                className='object-cover w-full h-full max-sm:w-full'
                            />
                        </div>
                        <div className='w-full '>
                            <p className='my-3 px-1 font-medium'>{e.title}</p>
                            <div className='bg-slate-100/55 dark:bg-[#292B32]  flex items-center justify-between p-2 text-slate-500 text-sm'>
                                <span className='text-left dark:text-slate-100/60'>Total events <br /> <p className='text-black dark:text-white'>{e.totalEvents}</p></span>
                                <span className='text-left dark:text-slate-100/60'>Sport <br /> <p className='text-black dark:text-white'>{e.sport}</p></span>
                            </div>
                        </div>
                    </div>
                })}
                <Advertisment imageUrl={advertismentImage} title={'Advertisement title'} description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium incidunt porro iusto eum quisquam modi quidem deleniti, nostrum esseadipisicing elit. Laudantium incidunt porro iusto eum.'} />
            </div>

            <div className='flex items-center justify-center my-4'>
                <button className='px-4 py-2 bg-[#2C9CF0] text-white rounded-md mx-auto'>See More</button>
            </div>
        </div>
    )
}
