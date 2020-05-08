import { IApi } from '@rodolfosv1/types';

export default (api: IApi) => {
  api.describe({
    key: 'plugins',
    config: {
      schema(joi) {
        return joi.array().items(joi.string());
      },
    },
  });
};
