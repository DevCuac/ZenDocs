import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white to-sky-100 bg-clip-text text-transparent select-none">
          {appName}
        </span>
      ),
    },
    githubUrl: gitConfig.repo
      ? `https://github.com/${gitConfig.user}/${gitConfig.repo}`
      : `https://github.com/${gitConfig.user}`,
  };
}
