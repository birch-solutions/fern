# Reference
## Auth
<details><summary><code>client.Auth.<a href="Auth">GetTokenAsync</a>(GetTokenRequest { ... }) -> TokenResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```csharp
await client.Auth.GetTokenAsync(
    new GetTokenRequest
    {
        ClientId = "string",
        ClientSecret = "string",
        Audience = "https://api.example.com",
        GrantType = "client_credentials",
        Scope = "string",
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

**request:** `GetTokenRequest` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## User
<details><summary><code>client.User.<a href="User">GetAsync</a>() -> IEnumerable<User></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```csharp
await client.User.GetAsync();

```
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
