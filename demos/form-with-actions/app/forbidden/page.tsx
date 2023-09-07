import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-50 flex flex-col items-center justify-center'>
      <h1 className='text-lg text-red-700 font-bold'>Failed to verify, Please try again.</h1>
      <div className='py-5'>
        <Link href='/' className='hover:text-blue-600 text-blue-400'>Go to Login</Link>
      </div>
    </main>
  )
}