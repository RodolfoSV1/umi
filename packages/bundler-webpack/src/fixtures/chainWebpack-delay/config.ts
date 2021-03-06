import { delay } from '@rodolfosv1/utils';

export default {
  async chainWebpack(webpackConfig: any) {
    await delay(200);
    webpackConfig.resolve.alias.set('react', './react.ts');
    return webpackConfig;
  },
}
