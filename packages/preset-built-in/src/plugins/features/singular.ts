import { IApi } from '@rodolfosv1/types';

export default (api: IApi) => {
  api.describe({
    key: 'singular',
    config: {
      schema(joi) {
        return joi.boolean();
      },
    },
  });
};
