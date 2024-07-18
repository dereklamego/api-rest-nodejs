import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionId = request.cookies.sessionId
  console.log(sessionId)
  if (!sessionId) {
    return reply.code(401).send({
      error: 'Unauthorized',
    })
  }
}
