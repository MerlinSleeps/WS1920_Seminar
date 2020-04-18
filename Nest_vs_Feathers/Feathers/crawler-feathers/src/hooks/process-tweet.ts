// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

export default (): Hook => {
  return async (context: HookContext) => {
    const { data } = context;

    var Twit = require('twit');

    var T = new Twit({
      consumer_key: '6bkLybOEMnhgrMyc26A3cKSj4',
      consumer_secret: 'RoVbHU9sJyGkSTxqofzZdmQR66EcoWuGcKiQ5SM4v2OKzokrid',
      access_token: '1231226255053393921-TGi1QlmWE5TRC4zZzt9XHBbtP1oP35',
      access_token_secret: 'TbK6cTUG2oe6qN2OsgVTd4ssnmIJmo0sP4FUSrmPkloq1'
    });
    let promise = new Promise(resolve => {
      T.get('statuses/user_timeline',
        {screen_name: 'netflix', count:1},
        function (err: Error, data: any, response: any) {
        let text = '';
        for (const tweetObj of data){
            text = tweetObj.text;
          }
          resolve(text);
        });
    });

    // @ts-ignore
    let text: string = await promise.then(result => result);
    let url = '';
    if (text.includes('https')) {
      const index = text.indexOf('https');
      url = text.substring(index);
      text = text.substring(0, index)
    }

    context.data = {
      output: text,
      url: url,
      createdAt: new Date().getTime()
    };

    return context;
  };
}
