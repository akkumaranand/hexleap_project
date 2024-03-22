import CollectionSpotlight from '@/Components/CollectionSpotlight'
import SportsComponent from '@/Components/SportsComponent'
import Darkmode from '@/Components/Dark mode/Darkmode'

export default function page() {
  return (
    <div className='dark:bg-black dark:text-white'>
      <div className='flex items-center justify-center my-10 gap-5'>
        <p>Switch modes (Dark/light)</p>
        <Darkmode />
      </div>
      <SportsComponent />
      <CollectionSpotlight />
    </div>
  )
}
