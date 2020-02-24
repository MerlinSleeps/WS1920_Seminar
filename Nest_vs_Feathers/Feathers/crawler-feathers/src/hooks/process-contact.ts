// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

export default (options = {}): Hook => {
  return async (context: HookContext) => {
    // Get authenticated user
    const user = context.params.user;

    // Extract Submitted Data
    const { data } = context;

    // Add new Fields
    context.data = {
      ...data, // Preserve submitted data
      createdBy: user._id,
      createdOn: new Date()
    };
    return context;
  };
}
