import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { IApi } from '@rodolfosv1/types';
import { getFile, winPath } from '@rodolfosv1/utils';

export default function (api: IApi) {
  const {
    paths,
    utils: { Mustache },
  } = api;

  api.onGenerateFiles(async (args) => {
    const pluginTpl = readFileSync(join(__dirname, 'plugin.tpl'), 'utf-8');
    const validKeys = await api.applyPlugins({
      key: 'addRuntimePluginKey',
      type: api.ApplyPluginsType.add,
      initialValue: ['patchRoutes', 'rootContainer', 'render', 'onRouteChange'],
    });
    const plugins = await api.applyPlugins({
      key: 'addRuntimePlugin',
      type: api.ApplyPluginsType.add,
      initialValue: [
        getFile({
          base: paths.absSrcPath!,
          fileNameWithoutExt: 'app',
          type: 'javascript',
        })?.path,
      ].filter(Boolean),
    });
    api.writeTmpFile({
      path: 'core/plugin.ts',
      content: Mustache.render(pluginTpl, {
        validKeys,
        runtimePath: winPath(
          dirname(require.resolve('@rodolfosv1/runtime/package.json')),
        ),
        plugins: plugins.map(winPath),
      }),
    });
  });

  api.addUmiExports(() => {
    return {
      specifiers: ['plugin'],
      source: `./plugin`,
    };
  });
}
