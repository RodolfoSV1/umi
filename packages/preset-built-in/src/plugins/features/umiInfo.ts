import { IApi } from '@rodolfosv1/types';

export default (api: IApi) => {
  api.addHTMLHeadScripts(() => [
    {
      content: `//! umi version: ${process.env.UMI_VERSION}`,
    },
  ]);

  api.addEntryCode(
    () => `
    window.g_umi = {
      version: '${process.env.UMI_VERSION}',
    };
  `,
  );
};
