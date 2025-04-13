export default function PasswordResetEmailComplete() {
  return (
    <>
      <div className="mx-auto mt-[100px] w-[450px]">
        <div className="flex flex-col items-center bg-stone-100 py-10">
          <h1 className="text-[2em] mt-4">パスワード再設定メール送信</h1>
          <p className="mx-6 mt-6">パスワード再設定用メールを送信しました．30分以内にメール内のURLからパスワードの再設定を行ってください．</p>
          
        </div>
      </div>
    </>
  )
}