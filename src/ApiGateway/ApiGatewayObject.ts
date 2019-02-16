import {ApiGatewayResponse} from './ApiGatewayResponse'
import {ApiGatewayBase} from './ApiGatewayBase'
import {ApiGatewayRequestOptions} from './ApiGatewayRequestOptions'
import {IncomingMessage} from 'http'

export class ApiGatewayObject extends ApiGatewayBase {
  constructor(private service) {
    super()
  }
  async request(requestOptions: ApiGatewayRequestOptions, requestPayload): Promise<ApiGatewayResponse> {
    return new Promise((resolve, reject) => {
      const req = this.service.request(requestOptions, (res: IncomingMessage) => { resolve(res) })
      req.on('error', (err) => { reject(err) })
      req.end(this.stringify(requestPayload))
    }).then((res) => {
      return this.handleResponse(res).then((responsePayload) => {
        const response = res as ApiGatewayResponse
        response.payload = responsePayload
        return response
      })
    })
  }
  private stringify(value) {
    let result
    try {
      result = JSON.stringify(value)
    } catch (e) {
      result = value.toString()
    }
    return result
  }
  private handleResponse(response): Promise<string> {
    return new Promise((resolve, reject) => {
      let str = ''
      response.on('data', function(chunk) {
        str += chunk
      })
      response.on('end', function() {
        resolve(str)
      })
      response.on('error', function() {
        reject(str)
      })
    })
  }
}
