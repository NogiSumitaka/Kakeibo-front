export default function PasswordResetForm() {
  return (
    <>
      <div className="mx-auto mt-[100px] w-[450px]">
        <div className="flex flex-col items-center bg-stone-100 h-[450px]">
          <h1 className="text-[2em] mt-4">パスワード再設定</h1>
          <form action="" method="post" className="">
          <div className="my-6">
              <label htmlFor="password" className="block">新しいパスワード</label>
              <input type="password" name="password" id="password" placeholder="パスワード" className="border border-gray-200 rounded-[5px] px-4 py-2 w-[300px] bg-white" />
              <p className="text-[0.8em]">半角英数字のみ・8文字以上</p>
              <p className="text-[0.8em] text-red-500 hidden">パスワードは8文字以上の半角英数字で入力してください</p>
            </div>
            <div className="my-6">
              <label htmlFor="password-check" className="block">新しいパスワード（確認）</label>
              <input type="password" name="password-check" id="password-check" placeholder="パスワード" className="border border-gray-200 rounded-[5px] px-4 py-2 w-[300px] bg-white" />
              <p className="text-[0.8em]">半角英数字のみ・8文字以上</p>
              <p className="text-[0.8em] text-red-500 hidden">パスワードは8文字以上の半角英数字で入力してください</p>
              <p className="text-[0.8em] text-red-500 hidden">正しいパスワードを入力してください</p>
            </div>
            <input
              type="submit"
              value="変更"
              className="px-10 py-2 w-full text-white text-[1em] bg-green-500 rounded-[5px]  cursor-pointer hover:bg-green-400 active:bg-green-600"
            />
          </form>
        </div>
      </div>
    </>
  )
}