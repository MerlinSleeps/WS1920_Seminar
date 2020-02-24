// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

export default (options = {}): Hook => {
  return async (context: HookContext) => {
    const { app, method, result, params } = context;

    // Ensure contacts is an array. If it's a single contact, wrap it into an array
    const contacts = method === "find" ? result.data : [result];

    // Fetch user object from each contact's createdBy
    await Promise.all(
      contacts.map(async (contact: any) => {
        contact.user = await app
          .service("users")
          .get(contact.createdBy, params);
      })
    );

    return context;
  };
}
