import { Hook, HookContext } from '@feathersjs/feathers';
import NeDB from "nedb";
import path from "path";
import app from "../app";

export default (options = {}): Hook => {
  return async (context: HookContext) => {

    const dbPath = app.get('nedb');
    const Model = new NeDB({
      filename: path.join(dbPath, 'login.db'),
      autoload: true
    });


    // for (const user of Model.getAllData()) {
    //   console.log('User: ', user);
    //   if (user.name === context.data.name && user.password === context.data.password) {
    //     context.data = {
    //       state: 'clear',
    //     };
    //   } else {
    //     context.data = {
    //       state: 'unclear',
    //     };
    //   }
    // }
    context.data = {
      state: 'clear',
    };
    return context;
  };
}
