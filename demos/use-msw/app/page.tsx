import BookList from '@/app/components/BookList'

export type Book = {
  id: string
  name: string
}

async function getAllBooks(): Promise<Book[]> {
  const { data: books, error } = await fetch(`${process.env.NEXT_PUBLIC_MOCK_URL}/books`).then(res => res.json())
  if (error === 'ok') {
    return books
  }

  throw new Error('Failed To Get All Books')
}

export default async function Home() {
  const books = await getAllBooks()

  return (
    <main className='min-h-screen min-w-full bg-cyan-50'>
      <BookList>
        {books.map((book) => <li key={book.id} data-id={book.id}>{book.name}</li>)}
      </BookList>
    </main>
  )
}
