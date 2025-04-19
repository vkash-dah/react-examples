import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store"
import { useEffect } from "react";
import { fetchCharacters, setPage } from "./charactersSlice";
import Loader from "../../components/Loader";
import CharacterCard from "../../components/CharacterCard";
import Pagination from "../../components/Pagination";

export default function CharactersPage() {

    const dispatch = useDispatch<AppDispatch>();
    const {items, status, error, page, totalPages} = useSelector((state: RootState) => state.characters)
    console.log(items, status, error, page, totalPages);
    useEffect(() => {
        dispatch(fetchCharacters(page))
    }, [dispatch, page])

    const handlePageChange: (newPage: number)=>void = (newPage: number) => {
        if(newPage >= 1 && newPage <= totalPages){
            dispatch(setPage(newPage));
        }
    }

    return <>
     <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Rick & Morty Characters</h1>

        <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />

        {status === 'loading' && <Loader />}
        {status === 'failed' && <p className="text-red-500 text-center">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {status === 'succeeded' &&
          items.map((char: any) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
     </div>
    </>
    
}