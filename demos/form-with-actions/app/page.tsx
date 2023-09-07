import { login } from './actions';
import SubmitButton from './components/SubmitButton';

export default function Login() {
  return (
    <main className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <form className='w-1/3 flex flex-col' action={login}>
        <div className='w-full mb-2'>
          <input name='username' className='form-input rounded w-full' type="text" placeholder='请输入账号' required />
        </div>
        <div className='w-full mb-2'>
          <input name='password' className='form-input rounded w-full' type="password" placeholder='请输入密码' required />
        </div>
        <div className='w-full'>
          <SubmitButton />
        </div>
      </form>
    </main>
  )
}
