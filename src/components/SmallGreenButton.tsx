export default function SmallGreenButton({ name }: { name: string }) {
  return (
    <button
      type="button"
      className="px-3 text-white border-1 border-green-600 bg-green-500 rounded-[5px] hover:bg-green-400 active:bg-green-600">
      {name}
    </button>
  )
}