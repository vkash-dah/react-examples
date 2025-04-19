import { create } from 'zustand'

/**
 * View Mode type
 */
type ViewMode = 'grid' | 'list';

/**
 * Gallery action
 */
type GalleryAction = {
    setViewMode: (mode: ViewMode) => void
    setImageCount: (count: number) => void
    fetchImages: () => Promise<void>
}

/**
 * Type for gallery state
 */
type GalleryState = {
    viewMode: ViewMode
    imageCount: number
    images: string[]
    loading: boolean
    
}

/**
 * Zustand gallery store which includes the state, getter and setter functions
 */
export const useGalleryStore = create<GalleryState & GalleryAction>((set, get) => ({
    viewMode: 'grid',
    imageCount: 10,
    images: [],
    loading: false,
    setViewMode: (viewMode) => set({viewMode}),
    setImageCount: (imageCount) => set({imageCount}),
    fetchImages: async() => {
        set({loading: true});
        const { imageCount } = get();
        const images: string[] = Array.from({length: imageCount}, (_, i) => (
            `https://picsum.photos/400/300?random=${Date.now() + i}`
        ));
        setTimeout(() => {
            set({images, loading: false});
        }, 1000);
    },
}));