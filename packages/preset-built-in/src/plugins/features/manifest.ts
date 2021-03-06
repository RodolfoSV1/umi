import { IApi } from '@rodolfosv1/types';

export default (api: IApi) => {
  api.describe({
    key: 'manifest',
    config: {
      schema(joi) {
        return joi.object({
          fileName: joi.string(),
          publicPath: joi.string(),
          basePath: joi.string(),
        });
      },
    },
  });
};
