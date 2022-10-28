import { builder } from "../builder"

builder.prismaObject("User", {
  fields: (t) => ({
    id:t.exposeID("id"),
    name: t.exposeString("name"),
    messages: t.relation("messages")
  })
})

/*

GraphQL Schema
type User {
  id: ID!
  messages: [Message!]
  name: String!
}

*/