import { Config } from "apollo-server-micro";
import LibTask from '../lib/LibTask';
//import LibUser from '../lib/LibUser';

export const resolvers: Config["resolvers"] = {
  Query: {
    hello: () => 'Hello world-222',
    tasks:async () => {
      return await LibTask.getItems();
    },
    async task(parent, args, context, info){
      return await LibTask.getTask(args.id);
    },
    /* user */    
    /*
    user: async(parent: any, args: any, context: any, info: any) => {
      return await LibUser.getUser(args.id);
    },
    userValid: async(parent: any, args: any, context: any, info: any) => {
      const user = await LibUser.validUser(args);
      return user;
    },
    userCount:async () => {
      return await LibUser.userCount();
    },
    */
  },
  Mutation: {
    addTask: async (parent, args, context) => {
      const ret = await LibTask.addTask(args)
      return ret
    },
    updateTask: async (parent: any, args: any, context: any) => {
      const ret = await LibTask.updateTask(args)
      return ret
    },
    deleteTask: async (parent: any, args: any, context: any) => {
      const ret = await LibTask.deleteTask(args)
      return ret
    },
    /* user */    
    /*
    addUser: async (parent: any, args: any, context: any) => {
      const ret = await LibUser.addUser(args)
      return ret
    },              
    */
  }
};