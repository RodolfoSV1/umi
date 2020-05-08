import { IApi } from '@rodolfosv1/types';

export default (api: IApi) => {
  api.describe({
    key: 'extraBabelPresets',
    config: {
      schema(joi) {
        return joi.array();
      },
    },
  });
};
