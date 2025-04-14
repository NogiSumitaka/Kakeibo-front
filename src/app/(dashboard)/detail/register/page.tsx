import SmallGreenButton from "@/components/SmallGreenButton";
import { outgoingCategories } from "@/constants/CategoryConst";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const KakeiRegisterTableHeader = ["日付", "収入or支出", "カテゴリ", "名前", "金額"];
export default function KakeiRegister() {
  return (
    <>
      <div className="px-10 pt-8 w-full">
        <h1 className="text-[1.5em]">収支登録</h1>
        {/* 収支登録フォーム */}
        <div className="flex flex-col items-center gap-8 bg-white border-1 border-stone-300 shadow-lg rounded-[5px] px-8 py-8">
          <div className="flex gap-4">
            <h2 className="text-[1.2em]">家計簿に新しい記録をつける</h2>
            <SmallGreenButton name="行追加" />
          </div>
          <form action="" method="post" className="flex flex-col items-center gap-10">
            <table>
              <thead>
                <tr>
                  {KakeiRegisterTableHeader.map((header) => {
                    return (
                      <th key={header}>{header}</th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="date" name="date" id="date" placeholder="yyyy/mm/dd" className="border border-gray-200 rounded-[5px] px-4 py-2 w-[300px] bg-white" />
                    <div className="flex">
                      <ErrorOutlineIcon sx={{ width: "16px", height: "20px", color: "red" }} />
                      <p className="text-[0.8em] text-red-500">必須</p>
                    </div>
                  </td>
                  <td>
                    <select name="transaction_type_id" className="border border-gray-200 rounded-[5px] px-4 py-[10.5px] w-[300px] bg-white">
                      <option value={1}>収入</option>
                      <option value={2}>支出</option>
                    </select>
                    <div className="flex">
                      <ErrorOutlineIcon sx={{ width: "16px", height: "20px", color: "red" }} />
                      <p className="text-[0.8em] text-red-500">必須</p>
                    </div>
                  </td>
                  <td>
                    <select name="category_id" className="border border-gray-200 rounded-[5px] px-4 py-[10.5px] w-[300px] bg-white">
                      {outgoingCategories.map((category) => {
                        return (
                          <option key={category.id} value={category.id}>{category.name}</option>
                        )
                      })}
                    </select>
                    <div className="flex">
                      <ErrorOutlineIcon sx={{ width: "16px", height: "20px", color: "red" }} />
                      <p className="text-[0.8em] text-red-500">必須</p>
                    </div>
                  </td>
                  <td>
                    <input type="text" name="name" id="name" placeholder="登録名" className="border border-gray-200 rounded-[5px] px-4 py-2 w-[300px] bg-white" />
                    <div className="flex">
                      <ErrorOutlineIcon sx={{ width: "16px", height: "20px", color: "red" }} />
                      <p className="text-[0.8em] text-red-500">必須</p>
                    </div>
                  </td>
                  <td>
                    <input type="number" name="amount" id="amount" placeholder="￥" className="border border-gray-200 rounded-[5px] px-4 py-2 w-[300px] bg-white" />
                    <div className="flex">
                      <ErrorOutlineIcon sx={{ width: "16px", height: "20px", color: "red" }} />
                      <p className="text-[0.8em] text-red-500">金額を入力してください</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              type="button"
              className="bg-black text-white px-4 py-2 w-[80%] max-w-[600px] rounded-[5px] shadow-md hover:bg-stone-800 active:bg-black mx-[60px]"
            >登録
            </button>
          </form>

        </div>
      </div>
    </>
  )
}