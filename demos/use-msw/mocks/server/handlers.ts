import { RestHandler, rest } from 'msw'
import { db, url } from '../db'

export const handlers: RestHandler[] = [
  rest.get(`${url}/books`, (_req, res, ctx) => {
    const books = db.book.getAll()
    return res(
      ctx.json({
        error: 'ok',
        data: books,
      }),
    )
  })
]