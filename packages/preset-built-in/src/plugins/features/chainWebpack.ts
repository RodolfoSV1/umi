import { IApi } from '@rodolfosv1/types';

export default (api: IApi) => {
  api.describe({
    key: 'chainWebpack',
    config: {
      schema(joi) {
        return joi.function();
      },
    },
  });
};
