import {IncomingMessage} from 'http'
export class ApiGatewayResponse extends IncomingMessage {
  payload?
}
