import { IApi, NextFunction, Request, Response } from '@rodolfosv1/types';
import { extname, join } from 'path';
import { matchRoutes, RouteConfig } from 'react-router-config';
import { getHtmlGenerator } from '../htmlUtils';

const ASSET_EXTNAMES = ['.ico', '.png', '.jpg', '.jpeg', '.gif', '.svg'];

export default ({
  api,
  sharedMap,
}: {
  api: IApi;
  sharedMap: Map<string, string>;
}) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    async function sendHtml() {
      const html = getHtmlGenerator({ api });

      let route: RouteConfig = { path: req.path };
      if (api.config.exportStatic) {
        const routes = (await api.getRoutes()) as RouteConfig[];
        const matchedRoutes = matchRoutes(routes, req.path);
        if (matchedRoutes.length) {
          route = matchedRoutes[matchedRoutes.length - 1].route;
        }
      }
      const content = await html.getContent({
        route,
        chunks: sharedMap.get('chunks'),
      });
      res.setHeader('Content-Type', 'text/html');
      res.send(content);
    }

    if (req.path === '/favicon.ico') {
      res.sendFile(join(__dirname, 'umi.png'));
    } else if (ASSET_EXTNAMES.includes(extname(req.path))) {
      next();
    } else {
      await sendHtml();
    }
  };
};
