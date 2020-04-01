import { Server, Model, Response } from 'miragejs';

const makeServer = () =>
  new Server({
    models: {
      user: Model,
      news: Model,
    },
    seeds(server) {
      server.db.loadData({
        users: [
          {
            id: 1,
            name: 'Ivan Garcia',
            email: 'ivan@hivelocity.co.jp',
            password: 'password',
            photo: 'url/here',
          },
        ],
        news: [
          {
            id: 1,
            title: 'Title 1',
            body:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum iste eveniet ab blanditiis quod, reprehenderit neque, omnis voluptate vel veniam eos aut rerum, repellendus in corrupti doloremque ducimus harum dolor!',
          },
        ],
      });
    },
    routes() {
      this.post('/auth/login', (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);

        const user = schema.users.findBy({ email: email });

        if (user.password !== password || !user) {
          return new Response(401, { errors: ['Invalid Credentials'] });
        } else {
          user.password = null;
          return { token: null, user };
        }
      });
      this.post('/auth/check', (schema, request) => {
        // console.log(request);
        // return schema.users.find(1);
        return new Response(401, { some: 'header' }, { errors: ['name cannot be blank'] });
      });
      this.get('/users');
      this.get('/news');
    },
  });

export default makeServer;
