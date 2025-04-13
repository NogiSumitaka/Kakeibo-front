import SmallGreenButton from "@/components/SmallGreenButton";
import SmallWhiteButton from "@/components/SmallWhiteButton";
import { incomeCategories, outgoingCategories } from "@/constants/CategoryConst";
import { CagetoryType } from "@/types/types";







export default function Category() {
  return (
    <>
      <div className="px-10 pt-8 w-full">
        <h1 className="text-[1.5em]">Category</h1>
        {/* 収入カテゴリ表 */}
        <div className="bg-white w-[400px] h-[500px] border border-gray-300 rounded-[10px] shadow-lg px-10 py-6 float-left my-10 mr-20">
          <h2 className="text-[1.2em]">収入カテゴリ</h2>
          <table className="w-full my-6">
            <tbody>
              {incomeCategories.map((category: CagetoryType) => {
                return (
                  <tr key={category.id} className="border-b-1 border-b-stone-200">
                    <td className="w-[188px] py-2">{category.name}</td>
                    <td className="w-[130px] flex justify-between py-2"><SmallGreenButton name="編集" /><SmallWhiteButton name="削除" /></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <button
            type="button"
            className="bg-black text-white px-8 py-2 rounded-[5px] shadow-md hover:bg-stone-800 active:bg-black mx-[60px]"
          >
            収入カテゴリ追加
          </button>
        </div>

        {/* 支出カテゴリ表 */}
        <div className="bg-white w-[400px] h-[500px] border border-gray-300 rounded-[10px] shadow-lg px-10 py-6 float-left my-10 mr-20">
          <h2 className="text-[1.2em]">支出カテゴリ</h2>
          <table className="w-full my-6">
            <tbody>
              {outgoingCategories.map((category: CagetoryType) => {
                return (
                  <tr key={category.id} className="border-b-1 border-b-stone-200">
                    <td className="w-[188px] py-2">{category.name}</td>
                    <td className="w-[130px] flex justify-between py-2"><SmallGreenButton name="編集" /><SmallWhiteButton name="削除" /></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <button
            type="button"
            className="bg-black text-white px-8 py-2 rounded-[5px] shadow-md hover:bg-stone-800 active:bg-black mx-[60px]"
          >支出カテゴリ追加</button>
        </div>
      </div>

    </>
  );
}