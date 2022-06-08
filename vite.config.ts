import solid from 'vite-plugin-solid';
import { UserConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import CSS from 'unocss/vite';
import path from 'path';

const config: UserConfig = {
  plugins: [
    solid(),
    CSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
      ],
      imports: [
        'solid-js',
      ],
    }),
  ],
  resolve: {
    alias: {
      $css: path.join(__dirname, 'src/assets/style/bundle.ts'),
      '~': path.join(__dirname, 'src'),
    },
  },
};

export default config;
