export default function CharacterCard({ character }: { character: any }) {
    return (
      <div className="bg-white rounded shadow hover:shadow-lg p-4 transition">
        <img src={character.image} alt={character.name} className="rounded w-full h-auto mb-2" />
        <h3 className="font-bold text-lg">{character.name}</h3>
        <p className="text-gray-600">{character.species} — {character.status}</p>
      </div>
    )
  }