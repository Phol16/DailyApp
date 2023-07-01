import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers:[
    CredentialsProvider({
      name:'Credentials',
      credentials:{
        email:{label:'Email', type:'email', placeholder:'Email'},
        password:{label:'Password', type:'password', placeholder:'Email'},
      },
      async authorize(credentials, req){
        
        return null
      }
    })
  ]
})

export {handler as GET, handler as POST};
