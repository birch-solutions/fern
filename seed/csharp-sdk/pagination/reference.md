# Reference
## Users
<details><summary><code>client.Users.<a href="/src/SeedPagination/Users/UsersClient.cs">ListWithCursorPaginationAsync</a>(ListUsersCursorPaginationRequest { ... }) -> ListUsersPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```csharp
await client.Users.ListWithCursorPaginationAsync(
    new ListUsersCursorPaginationRequest
    {
        Page = 1,
        PerPage = 1,
        Order = Order.Asc,
        StartingAfter = "string",
    }
);
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ListUsersCursorPaginationRequest` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.Users.<a href="/src/SeedPagination/Users/UsersClient.cs">ListWithBodyCursorPaginationAsync</a>(ListUsersBodyCursorPaginationRequest { ... }) -> ListUsersPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```csharp
await client.Users.ListWithBodyCursorPaginationAsync(
    new ListUsersBodyCursorPaginationRequest { Pagination = new WithCursor { Cursor = "string" } }
);
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ListUsersBodyCursorPaginationRequest` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.Users.<a href="/src/SeedPagination/Users/UsersClient.cs">ListWithOffsetPaginationAsync</a>(ListUsersOffsetPaginationRequest { ... }) -> ListUsersPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```csharp
await client.Users.ListWithOffsetPaginationAsync(
    new ListUsersOffsetPaginationRequest
    {
        Page = 1,
        PerPage = 1,
        Order = Order.Asc,
        StartingAfter = "string",
    }
);
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ListUsersOffsetPaginationRequest` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.Users.<a href="/src/SeedPagination/Users/UsersClient.cs">ListWithBodyOffsetPaginationAsync</a>(ListUsersBodyOffsetPaginationRequest { ... }) -> ListUsersPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```csharp
await client.Users.ListWithBodyOffsetPaginationAsync(
    new ListUsersBodyOffsetPaginationRequest { Pagination = new WithPage { Page = 1 } }
);
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ListUsersBodyOffsetPaginationRequest` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.Users.<a href="/src/SeedPagination/Users/UsersClient.cs">ListWithOffsetStepPaginationAsync</a>(ListUsersOffsetStepPaginationRequest { ... }) -> ListUsersPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```csharp
await client.Users.ListWithOffsetStepPaginationAsync(
    new ListUsersOffsetStepPaginationRequest
    {
        Page = 1,
        Limit = 1,
        Order = Order.Asc,
    }
);
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ListUsersOffsetStepPaginationRequest` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.Users.<a href="/src/SeedPagination/Users/UsersClient.cs">ListWithOffsetPaginationHasNextPageAsync</a>(ListWithOffsetPaginationHasNextPageRequest { ... }) -> ListUsersPaginationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```csharp
await client.Users.ListWithOffsetPaginationHasNextPageAsync(
    new ListWithOffsetPaginationHasNextPageRequest
    {
        Page = 1,
        Limit = 1,
        Order = Order.Asc,
    }
);
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ListWithOffsetPaginationHasNextPageRequest` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.Users.<a href="/src/SeedPagination/Users/UsersClient.cs">ListWithExtendedResultsAsync</a>(ListUsersExtendedRequest { ... }) -> ListUsersExtendedResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```csharp
await client.Users.ListWithExtendedResultsAsync(
    new ListUsersExtendedRequest { Cursor = "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32" }
);
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ListUsersExtendedRequest` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.Users.<a href="/src/SeedPagination/Users/UsersClient.cs">ListUsernamesAsync</a>(ListUsernamesRequest { ... }) -> UsernameCursor</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```csharp
await client.Users.ListUsernamesAsync(new ListUsernamesRequest { StartingAfter = "string" });
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ListUsernamesRequest` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.Users.<a href="/src/SeedPagination/Users/UsersClient.cs">ListWithGlobalConfigAsync</a>(ListWithGlobalConfigRequest { ... }) -> UsernameContainer</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```csharp
await client.Users.ListWithGlobalConfigAsync(new ListWithGlobalConfigRequest { Offset = 1 });
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ListWithGlobalConfigRequest` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
