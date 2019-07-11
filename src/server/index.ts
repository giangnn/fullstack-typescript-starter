// Server entry point. The module must export a cleanup() function 
// that will be called once the module is reloaded

import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';
import {Request, Response} from 'express';

const app = express();
app.use(express.static('dist/public'));
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: false }));

app.post('/foo', (req, res) => {
	req.body.value = 'foo';
	res.send(req.body);
});

var server = app.listen(8080, () => console.log('Listening on port 8080'));

export function cleanup(){
	if(server && server.listening){
		server.close();
		console.log("Closed server");
	} 
}