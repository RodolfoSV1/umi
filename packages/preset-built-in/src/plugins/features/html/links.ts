import { IApi } from '@rodolfosv1/types';

export default function (api: IApi) {
  api.describe({
    key: 'links',
    config: {
      schema(joi) {
        return joi.array();
      },
    },
  });

  api.addHTMLLinks(() => {
    return api.config?.links || [];
  });
}
