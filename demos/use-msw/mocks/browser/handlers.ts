import { RestHandler, rest } from 'msw'
import { db } from '../db'

export const handlers: RestHandler[] = [
  rest.get(`/books/:id`, (req, res, ctx) => {
    const params = req.params

    if (!params || !params.id) {
      return res(
        ctx.json({
          error: 'failed',
          data: null,
        })
      )
    }

    
    const book = db.book.findFirst({
      where: {
        id: {
          equals: params.id as string,
        },
      }
    })

    return res(
      ctx.json({
        error: 'ok',
        data: book,
      })
    )
  })
]