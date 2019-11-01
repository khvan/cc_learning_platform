# Learning Streaming Platform
This is a learning platform where you can add and share live streams
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites 
Run:
> npm install 

To set up the database, you will need to install **postgres** and **knex**
After the installation, inside **psql**, run: 

> CREATE DATABASE database-name

After creating database, run the migrations with knex:

>knex migrate:latest

In the root folder of the application **('cc_fp')**

> npm install node-media-server rtmp-server

Then you need **cd** into newly created rtmp-server, and create index.js
include the following config into index.js

```
 const NodeMediaServer = require('node-media-server');
  const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};
const nms = new NodeMediaServer(config)
nms.run();
```
### Running the project 
To start up **react client** and **express backend** use:
> npm run dev 
To start up the **rtmp server**, inside rtmp-server directory, run: 
> npm start 
After that you may register or login with Google OAuth. To begin streaming, get the stream id by creating a stream


This is the landing page before where you can login with **GoogleAuth** 
![image](https://user-images.githubusercontent.com/50936934/68056903-91616180-fcb1-11e9-859c-6debd73ce1fb.png)

After authentication you will be able to create new streams, edit and delete the streams that you have already authored. 
![image](https://user-images.githubusercontent.com/50936934/68056860-70990c00-fcb1-11e9-95d9-43901d9f761f.png)

To view your stream, click on the title of the stream 
![image](https://user-images.githubusercontent.com/50936934/68056826-552e0100-fcb1-11e9-8eeb-96f53a694aff.png)

### To start streaming 
You will need to use OBS or any other tool of your preference to start streaming to:
> rtmp://localhost/live

### Built with: 
[Node.js, Express.js](expressjs.com)
[React.js](reactjs.org)
[postgreSQL](postgresql.org)
[Redux](redux.js.org)

### Authors:
Made and brought to you with love by:
[Boris Khvan](https://www.linkedin.com/in/boriskhvan/),
[Yuriy Dmytrash](https://www.linkedin.com/in/yuriy-dmytrash/)




