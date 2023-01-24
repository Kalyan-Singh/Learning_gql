// const graphql=require('graphql');   
const graphql=require('graphql');
const {GraphQLObjectType} =graphql;

const _=require('lodash');

const dummyData=[
    {name:'Name of', genre:'fantasy',id:'123'},
    {name:'Middle', genre:'fantasy',id:'12'},
    {name:'Final', genre:'sci-fi',id:'1'}
]

const BookType=new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:graphql.GraphQLString},
        name:{type:graphql.GraphQLString},
        genre:{type:graphql.GraphQLString}
    })
})

const rootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:graphql.GraphQLString}},
            resolve(parent,args){
                return _.find(dummyData,{id:args.id});
            }
        }
    }
});

module.exports=new graphql.GraphQLSchema({
    query:rootQuery
})