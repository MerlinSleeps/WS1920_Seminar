// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';
import Twit from 'twit';



export default (options = {}): Hook => {
  return async (context: HookContext) => {
    console.log(context);
    const T = new Twit({
      consumer_key: '6bkLybOEMnhgrMyc26A3cKSj4',
      consumer_secret: 'RoVbHU9sJyGkSTxqofzZdmQR66EcoWuGcKiQ5SM4v2OKzokrid',
      access_token: '1231226255053393921-TGi1QlmWE5TRC4zZzt9XHBbtP1oP35',
      access_token_secret: 'TbK6cTUG2oe6qN2OsgVTd4ssnmIJmo0sP4FUSrmPkloq1'
    });

    const output: any[] = [];
    let promise = new Promise(resolve => {
      T.get('statuses/user_timeline',
        {screen_name: 'netflix', count:10},
        function (err, data: any, response) {
          for (const tweetObj of data){
            output.push(tweetObj.text);
          }
          resolve(output);
        });
    });

    await promise
      .then((result) => {
        console.log('Fetch: ', result);
        context.data = {
          result: result
        };
      });

    return context;
  };
}
