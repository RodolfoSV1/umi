import { IApi } from '@rodolfosv1/types';

export default (api: IApi) => {
  api.describe({
    key: 'styleLoader',
    config: {
      schema(joi) {
        return joi.object();
      },
    },
  });
};
