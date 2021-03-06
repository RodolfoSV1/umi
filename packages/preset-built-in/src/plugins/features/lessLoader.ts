import { IApi } from '@rodolfosv1/types';

export default (api: IApi) => {
  api.describe({
    key: 'lessLoader',
    config: {
      schema(joi) {
        return joi.object();
      },
    },
  });
};
