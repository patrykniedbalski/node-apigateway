#simple usage:
```typescript
const defaultRequestOptions = {
 hostname: 'www.example.com',
 path: '/api/'
}

const builder = new ApiGatewayServiceBuilder();
const apiGateway = builder.setRequestOptions(defaultRequestOptions).buildHttpsApiGatewayService();
let response = await apiGateway.get('/path');
```

#more complex usage:
Use builder to decorate service with custom interceptors (classes that implements ApiGatewayResponseInterceptor or ApiGatewayRequestInterceptor)
```typescript
const builder = new ApiGatewayServiceBuilder();
builder.setRequestOptions(defaultRequestOptions)
builder.addRequestInterceptor()
builder.addResponseInterceptor()
```
or use decorate service with request or response interceptors for custom one time usage:
```typescript
apiGateway = apiGateway.interceptRequest(new ApiGatewayRequestOptionsInterceptor({path: 'subApiPath'}));
apiGateway = apiGateway.interceptResponse(new ApiGatewayResponseJsonParserInterceptor());
```
