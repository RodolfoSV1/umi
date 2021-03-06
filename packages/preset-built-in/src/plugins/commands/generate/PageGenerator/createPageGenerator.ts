import { join, basename } from 'path';
import { IApi } from '@rodolfosv1/types';
import { Generator, randomColor } from '@rodolfosv1/utils';

export default function ({ api }: { api: IApi }) {
  return class PageGenerator extends Generator {
    constructor(opts: any) {
      super(opts);
    }

    async writing() {
      const [path] = this.args._;
      const jsExt = this.args.typescript ? '.tsx' : '.js';
      const cssExt = this.args.less ? '.less' : '.css';

      this.copyTpl({
        templatePath: join(__dirname, `page${jsExt}.tpl`),
        target: join(api.paths.absPagesPath!, `${path}${jsExt}`),
        context: {
          path,
          name: basename(path),
          cssExt,
        },
      });
      this.copyTpl({
        templatePath: join(__dirname, `page.css.tpl`),
        target: join(api.paths.absPagesPath!, `${path}${cssExt}`),
        context: {
          color: randomColor(),
        },
      });
    }
  };
}
