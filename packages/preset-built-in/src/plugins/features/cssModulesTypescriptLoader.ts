import { IApi } from '@rodolfosv1/types';

export default (api: IApi) => {
  api.describe({
    key: 'cssModulesTypescriptLoader',
    config: {
      schema(joi) {
        return joi.object({
          mode: joi.string().valid('emit', 'verify').optional(),
        });
      },
    },
  });
};
