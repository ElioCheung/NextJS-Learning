'use client'

type Props = React.PropsWithChildren

export default function BookList({ children }: Props) {

  const handleClickCapture = async (e: React.MouseEvent<HTMLOListElement>) => {
    const { id } = (e.target as HTMLLIElement).dataset
    if (id) {
      const { data: book } = await fetch(`/books/${id}`).then(res => res.json())
      alert(`You choose to read 《${book.name}》`)
    }
  }

  return (
    <ul onClickCapture={handleClickCapture}>
      {children}
    </ul>
  )
}