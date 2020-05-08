import { dirname, join } from 'path';
import { IServiceOpts, Service as CoreService } from '@rodolfosv1/core';

class Service extends CoreService {
  constructor(opts: IServiceOpts) {
    process.env.UMI_VERSION = require('../package').version;
    process.env.UMI_DIR = dirname(require.resolve('../package'));

    super({
      ...opts,
      presets: [
        require.resolve('@rodolfosv1/preset-built-in'),
        ...(opts.presets || []),
      ],
      plugins: [require.resolve('./plugins/umiAlias'), ...(opts.plugins || [])],
    });
  }
}

export { Service };
