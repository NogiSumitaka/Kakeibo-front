import Link from "next/link";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function PasswordResetEmail() {
  return (
    <>
      <div className="mx-auto mt-[100px] w-[450px]">
        <div className="flex flex-col items-center bg-stone-100 h-[450px]">
          <h1 className="text-[2em] mt-4">パスワード再設定</h1>
          <p className="w-[300px] mt-6">家計簿に登録したメールアドレスを入力してください．パスワード再設定用メールを送信します．</p>
          <form action="" method="post" className="">
            <div className="my-6">
              <label htmlFor="email" className="block">メールアドレス</label>
              <input type="email" name="email" id="email" placeholder="sample@example.com" className="border border-gray-200 rounded-[5px] px-4 py-2 w-[300px] bg-white" />
              <div className="flex hidden">
                <ErrorOutlineIcon sx={{ width: "16px", height: "20px", color: "red" }} />
                <p className="text-[0.8em] text-red-500 ">正しい形式のメールアドレスを入力してください</p>
              </div>
            </div>
            <input
              type="submit"
              value="送信"
              className="px-10 py-2 w-full text-white text-[1em] bg-green-500 rounded-[5px]  cursor-pointer hover:bg-green-400 active:bg-green-600"
            />
          </form>
          <Link href="/password-reset" className="mt-6"><u>≫パスワードをお忘れの方はこちら</u></Link>
        </div>
      </div>
    </>
  )
}