import { IApi } from '@rodolfosv1/types';

export default (api: IApi) => {
  api.describe({
    key: 'terserOptions',
    config: {
      schema(joi) {
        return joi.object();
      },
    },
  });
};
