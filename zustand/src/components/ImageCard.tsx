import { useState } from "react"

export default function ImageCard({ src }: { src: string }) {
    // to show skeleton while the image is loading
    const [loaded, setLoaded] = useState(false)
    return (
      <div className="rounded overflow-hidden shadow">
         {!loaded && (
            <div className={`absolute inset-0 bg-gray-200 animate-pulse`} />
        )}
        <img src={src} alt="Random" className={`w-full h-auto object-cover ${loaded ? 'opacity-100' : 'opacity-0'}}`} hidden={!loaded} onLoad={()=>setLoaded(true)}/>
      </div>
    )
  }