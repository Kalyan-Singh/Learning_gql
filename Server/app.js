const express=require('express');
const {graphqlHTTP}=require('express-graphql');
const { renderGraphiQL } = require('express-graphql/renderGraphiQL');
const schema=require('./Graphql/Schema');





const app=express();

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true,
}));


app.listen(4000,()=>{
    console.log("App running!")
})