import { IApi } from '@rodolfosv1/types';
import { Generator } from '@rodolfosv1/utils';
import generateFiles from '../../generateFiles';

export default ({ api }: { api: IApi }) => {
  return class TmpGenerator extends Generator {
    constructor(opts: any) {
      super(opts);
    }

    async writing() {
      await generateFiles({
        api,
      });
    }
  };
};
