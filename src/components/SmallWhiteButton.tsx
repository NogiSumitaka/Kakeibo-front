export default function SmallWhiteButton({ name }: { name: string }) {
  return (
    <button
      type="button"
      className="px-3 text-stone-800 border-1 border-stone-300 bg-white rounded-[5px] hover:border-stone-200 active:border-stone-400">
      {name}
    </button>
  )
}