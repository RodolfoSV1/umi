import { IApi } from '@rodolfosv1/types';

export default (api: IApi) => {
  api.describe({
    key: 'postcssLoader',
    config: {
      schema(joi) {
        return joi.object();
      },
    },
  });
};
