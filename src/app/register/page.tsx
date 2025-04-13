import Link from "next/link";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function Register() {
  return (
    <>
      <div className="mx-auto mt-[100px] w-[450px]">
        <div className="flex flex-col items-center bg-stone-100 h-[550px]">
          <h1 className="text-[2em] mt-4">会員登録</h1>
          <form action="" method="post" className="">
            <div className="my-6">
              <label htmlFor="name" className="block">ユーザー名</label>
              <input type="text" name="name" id="name" placeholder="ユーザー名" className="border border-gray-200 rounded-[5px] px-4 py-2 w-[300px] bg-white" />
              <p className="text-[0.8em]">16文字以内</p>
              <div className="flex hidden">
                <ErrorOutlineIcon sx={{ width: "16px", height: "20px", color: "red" }} />
                <p className="text-[0.8em] text-red-500">ユーザー名は16文字以内で入力してください</p>
              </div>
            </div>
            <div className="my-6">
              <label htmlFor="email" className="block">メールアドレス</label>
              <input type="email" name="email" id="email" placeholder="sample@example.com" className="border border-gray-200 rounded-[5px] px-4 py-2 w-[300px] bg-white" />
              <div className="flex hidden">
                <ErrorOutlineIcon sx={{ width: "16px", height: "20px", color: "red" }} />
                <p className="text-[0.8em] text-red-500">正しい形式のメールアドレスを入力してください</p>
                <p className="text-[0.8em] text-red-500">このメールアドレスは登録されていません</p>
              </div>
            </div>
            <div className="my-6">
              <label htmlFor="email" className="block">パスワード</label>
              <input type="password" name="password" id="password" placeholder="パスワード" className="border border-gray-200 rounded-[5px] px-4 py-2 w-[300px] bg-white" />
              <p className="text-[0.8em]">半角英数字のみ・8文字以上</p>
              <div className="flex hidden">
                <ErrorOutlineIcon sx={{ width: "16px", height: "20px", color: "red" }} />
                <p className="text-[0.8em] text-red-500">パスワードは8文字以上の半角英数字で入力してください</p>
                <p className="text-[0.8em] text-red-500">正しいパスワードを入力してください</p>
              </div>
            </div>
            <input
              type="submit"
              value="新規登録"
              className="px-10 py-2 w-full text-white text-[1em] bg-green-500 rounded-[5px]  cursor-pointer hover:bg-green-400 active:bg-green-600"
            />
          </form>
          <Link href="/password-reset-email" className="mt-6"><u>≫パスワードをお忘れの方はこちら</u></Link>
        </div>

        <div className="flex my-8">
          <p>会員登録がお済みの方</p>
          <p className="w-[60%] border-b-1 border-gray-400"></p>
        </div>


        <Link href="/login" className="block text-center text-white bg-black py-2 rounded-[5px] cursor-pointer hover:bg-stone-700 active:bg-black">
          ログイン
        </Link>
      </div>
    </>
  )
}