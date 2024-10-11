```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.container.getAndReturnListOfPrimitives(
	{
		[
			"string",
			"string"
		]
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.container.getAndReturnListOfObjects(
	{
		[
			{
				string: "string"
			},
			{
				string: "string"
			}
		]
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.container.getAndReturnSetOfPrimitives(
	{
		new Set([
			"string"
		])
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.container.getAndReturnSetOfObjects(
	{
		new Set([
			{
				string: "string"
			}
		])
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.container.getAndReturnMapPrimToPrim(
	{
		{
			"string": "string"
		}
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.container.getAndReturnMapOfPrimToObject(
	{
		{
			"string": {
				string: "string"
			}
		}
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
undefined;
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
undefined;
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.endpoints.httpMethods.testGet("id");
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.endpoints.httpMethods.testPost({
  string: "string",
});
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.endpoints.httpMethods.testPut("id", {
  string: "string",
});
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.endpoints.httpMethods.testPatch("id");
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.endpoints.httpMethods.testDelete("id");
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
undefined;
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.endpoints.object.getAndReturnWithRequiredField({
  string: "string",
});
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.endpoints.object.getAndReturnWithMapOfMap({
  map: {
    map: {
      map: "map",
    },
  },
});
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
undefined;
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.endpoints.object.getAndReturnNestedWithRequiredField("string", {
  string: "string",
});
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.object.getAndReturnNestedWithRequiredFieldAsList(
	{
		[
			{
				string: "string"
			},
			{
				string: "string"
			}
		]
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.endpoints.params.getWithPath("param");
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.endpoints.params.getWithQuery({
  query: "query",
  number: 1,
});
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.endpoints.params.getWithAllowMultipleQuery({
  query: "query",
  numer: 1,
});
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.endpoints.params.getWithPathAndQuery("param", {
  query: "query",
});
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.params.modifyWithPath(
	"param",
	{
		"string"
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.primitive.getAndReturnString(
	{
		"string"
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.primitive.getAndReturnInt(
	{
		1
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.primitive.getAndReturnLong(
	{
		1000000
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.primitive.getAndReturnDouble(
	{
		1.1
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.primitive.getAndReturnBool(
	{
		true
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.primitive.getAndReturnDatetime(
	{
		"SGVsbG8gd29ybGQh"
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.primitive.getAndReturnDate(
	{
		"2023-01-15"
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.primitive.getAndReturnUuid(
	{
		"d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.primitive.getAndReturnBase64(
	{
		"SGVsbG8gd29ybGQh"
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.endpoints.union.getAndReturnUnion(
	{
		{ 
			animal : "dog", 
			name: "name",
			likesToWoof: true
		}
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.inlinedRequests.postWithObjectBodyandResponse({
  string: "string",
  integer: 1,
});
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.noAuth.postWithNoAuth(
	{
		{"key":"value"}
	}
)
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.noReqBody.getWithNoRequestBody();
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({
  environment: "YOUR_BASE_URL",
  token: "YOUR_TOKEN",
});
await client.noReqBody.postWithNoRequestBody();
 
```                        


```typescript
import { SeedExhaustiveClient } from "@fern/exhaustive";

const client = new SeedExhaustiveClient({ environment: "YOUR_BASE_URL", token: "YOUR_TOKEN" });        
await client.reqWithHeaders.getWithCustomHeader(
	{
		xTestEndpointHeader: "X-TEST-ENDPOINT-HEADER",
		"string"
	}
)
 
```                        


