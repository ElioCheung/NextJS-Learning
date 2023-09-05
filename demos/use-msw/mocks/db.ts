import { factory, primaryKey } from '@mswjs/data'
import { faker } from '@faker-js/faker'
import { DATABASE_INSTANCE } from '@mswjs/data/lib/glossary'

export const url = process.env.NEXT_PUBLIC_MOCK_URL

export const books = [
  {
    id: 'f653a191-fd2f-4044-bfe8-1a377bd022d6',
    name: 'NextJS',
  },
  {
    id: '391c0137-b71c-4c94-9878-a01240407eaa',
    name: 'React',
  },
  {
    id: 'e6c0f45a-2129-4af6-aee0-3448884a588b',
    name: 'Javascript',
  },
]

export const db = factory({
  book: {
    id: primaryKey(faker.string.uuid),
    name: String,
  },
})

books.map(book => {
  db.book.create({
    ...book,
  })
})