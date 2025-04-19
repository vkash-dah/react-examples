import { useGalleryStore } from "../store"

export default function Header() {
    const { viewMode, setViewMode, imageCount, setImageCount, fetchImages, loading } = useGalleryStore()
  
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-gray-100 rounded-xl shadow">
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white border'}`}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
          <button
            className={`px-4 py-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white border'}`}
            onClick={() => setViewMode('list')}
          >
            List
          </button>
        </div>
        <div className="flex items-center gap-2">
          <label>Count:</label>
          <input
            type="number"
            min={1}
            max={20}
            value={imageCount}
            onChange={(e) => setImageCount(Number(e.target.value))}
            className="border p-1 w-16 rounded"
          />
          <button
            onClick={fetchImages}
            disabled={loading}
            className="px-4 py-2 bg-green-500 text-white rounded shadow disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Fetch Images'}
          </button>
        </div>
      </div>
    )
  }