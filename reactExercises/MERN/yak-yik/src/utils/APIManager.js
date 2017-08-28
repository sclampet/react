//Master class for all API calls
import superagent from 'superagent';


export default {
  //what we need for a get request: URL/Path, Params, and a Callback;
  get: (url, params, callback) => {
    superagent
			.get(url)
			.query(params)
			.set('Accept', 'application/json')
			.end((err, res) => {
				if(err) {
          callback(err, null)
					alert('ERROR: ' + err);
					return;
				};

        const confirmation = res.body.confirmation;
        if(confirmation != 'success') {
          callback({message: res.body.message}, null);
          return;
        }

        //superagent gives you respons object in the body (res.body)
				callback(null, res.body);
			});
  },

  post: (url, body, callback) => {
    superagent
      .post(url)
      .send(body)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if(err) {
          callback(err, null);
          alert('ERROR: ' + err);
          return;
        };

        const confirmation = res.body.confirmation;
        if(confirmation != 'success') {
          callback({message: res.body.message}, null);
          return;
        }

        //superagent gives you respons object in the body (res.body)
        callback(null, res.body);

      });
  },

  put: () => {

  },

  delete: () => {

  },
};
