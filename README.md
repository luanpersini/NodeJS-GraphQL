# NodeJS GraphQL

- Query
- Mutations

- Query fields are executed in parallel, mutation fields run in series, one after the other.

## Mutations

### Alias

- Mutation

```javascript
mutation {  
  aliasOne: createUser(
    name: "Any Name", email: "any_email@mail.com"
  ){id, name, email}  
  
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
      "id": "616ce58a7b3091daf2973b76",
      "name": "Any Name",
      "email": "any_email@mail.com"
    },
    "aliasTwo": {
      "id": "616ce58a7b3091daf2973b78",
      "name": "Any Name 2",
      "email": "any_email2@mail.com"
    }
  }
}
```