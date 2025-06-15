import { GalleryGrid } from "./components/GalleryGrid"
import { GalleryIntro } from "./components/GalleryIntro"
// import { ShareSection } from "./components/ShareSection"


const page = () => {
  return (
    <div className='w-full'>
      <GalleryIntro/>
      <GalleryGrid/>
      {/* <ShareSection/> */}
    </div>
  )
}

export default page
