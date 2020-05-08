import { IApi } from '@rodolfosv1/types';

export default (api: IApi) => {
  api.describe({
    key: 'theme',
    config: {
      schema(joi) {
        return joi.object().pattern(joi.string(), joi.string());
      },
    },
  });
};
