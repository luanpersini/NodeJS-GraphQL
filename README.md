# NodeJS GraphQL

- **Query**: retrieve information
- **Mutations**: create, update, delete (mutate the backend)

- Query fields are executed in parallel, mutation fields run in series, one after the other.

## Mutations

We can use graphQL **Alias** to run multiple mutations.

- Mutations

```javascript
mutation {    
  aliasOne: createUser(
    name: "Any Name", email: "any_email@mail.com", phone:"111-111"
  ){id, name, email, phone}  
  
  aliasTwo: createUser(
    name: "Any Name 2", email: "any_email2@mail.com"
  ){id, name, email}    
}
```

- Result

```javascript
{
  "data": {
    "aliasOne": {
      "id": "616cec1d3be90c37fce8898c",
      "name": "Any Name",
      "email": "any_email@mail.com",
      "phone": "111-111"
    },
    "aliasTwo": {
      "id": "616cec1d3be90c37fce8898e",
      "name": "Any Name 2",
      "email": "any_email2@mail.com"
    }
  }
}
```