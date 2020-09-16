import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'talk-components',
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/variables.scss'],
    }),
  ],
  outputTargets: [
    {
      type: 'dist'
    },
    angularOutputTarget({
      componentCorePackage: 'talk-components',
      directivesProxyFile: '../angular-project/src/directives/proxies.ts',
      // valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};