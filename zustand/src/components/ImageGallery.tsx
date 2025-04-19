import { useGalleryStore } from '../store/useGalleryStore'
import ImageCard from './ImageCard'

export default function ImageGallery() {
  const { images, viewMode } = useGalleryStore()

  if (images.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No images yet. Click "Fetch Images" to get started!</p>
  }

  return (
    <div className={`mt-6 grid ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' : 'grid-cols-1 gap-6'}`}>
      {images.map((src, index) => (
        <ImageCard key={index} src={src} />
      ))}
    </div>
  )
}