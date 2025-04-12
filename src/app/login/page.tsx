export default function Login() {
  return (
    <>
      <div className="mx-auto mt-[30%] w-[450px]">
        <div className="flex flex-col items-center bg-stone-100 h-[450px]">
          <h1 className="text-[2em] mt-4">ログイン</h1>
          <form action="" method="post" className="">
            <div className="my-6">
              <label htmlFor="email" className="block">メールアドレス</label>
              <input type="email" name="email" id="email" placeholder="sample@example.com" className="border border-gray-200 rounded-[5px] px-4 py-2 w-[300px] bg-white" />
              <p className="text-[0.8em] text-red-500 hidden">正しい形式のメールアドレスを入力してください</p>
              <p className="text-[0.8em] text-red-500 hidden">このメールアドレスは登録されていません</p>
            </div>
            <div className="my-6">
              <label htmlFor="email" className="block">パスワード</label>
              <input type="password" name="password" id="password" placeholder="パスワード" className="border border-gray-200 rounded-[5px] px-4 py-2 w-[300px] bg-white" />
              <p className="text-[0.8em]">半角英数字のみ・8文字以上</p>
              <p className="text-[0.8em] text-red-500 hidden">パスワードは8文字以上の半角英数字で入力してください</p>
              <p className="text-[0.8em] text-red-500 hidden">正しいパスワードを入力してください</p>
            </div>
            <input
              type="submit"
              value="ログイン"
              className="px-10 py-2 w-full text-white text-[1em] bg-green-500 rounded-[5px]  cursor-pointer"
            />
          </form>
          <a href="/" className="mt-6"><u>≫パスワードをお忘れの方はこちら</u></a>
        </div>

        <div className="flex my-8">
          <p>会員登録がお済でない方</p>
          <p className="w-[60%] border-b-1 border-gray-400"></p>
        </div>


        <a href="/" className="block text-center text-white bg-black py-2 rounded-[5px]">
          新規会員登録
        </a>
      </div>
    </>
  )
}