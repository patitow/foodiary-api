import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { ok } from '../utils/http'
import { parseResponse } from '../utils/parseResponse'

export async function handler(event: APIGatewayProxyEventV2) {
  return parseResponse(
    ok({
      message: 'Go Serverless v4! Your function executed successfully!',
    })
  )
}
