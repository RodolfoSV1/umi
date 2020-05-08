import { yargs } from '@rodolfosv1/utils';
import AppGenerator from './AppGenerator/AppGenerator';

export default async ({
  cwd,
  args,
}: {
  cwd: string;
  args: yargs.Arguments;
}) => {
  const generator = new AppGenerator({
    cwd,
    args,
  });
  await generator.run();
};
