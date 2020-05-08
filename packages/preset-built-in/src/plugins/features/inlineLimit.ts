import { IApi } from '@rodolfosv1/types';

export default (api: IApi) => {
  api.describe({
    key: 'inlineLimit',
    config: {
      schema(joi) {
        return joi.number();
      },
    },
  });
};
