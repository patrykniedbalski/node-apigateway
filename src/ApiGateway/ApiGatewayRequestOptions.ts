import {RequestOptions as HttpRequestOptions} from 'http'
import {RequestOptions as HttpsRequestOptions} from 'https'
export type ApiGatewayRequestOptions = HttpRequestOptions | HttpsRequestOptions
