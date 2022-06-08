import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  presetWind,
} from 'unocss';
import twConfig from './tailwind.config.cjs';

export default defineConfig({
  shortcuts: [
    /* Example
    ['name','uno-classes'],
    */
  ],
  variants: [
    (matcher) => {
      if (!matcher.startsWith('<')) return matcher;

      const mediaPx = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      }[matcher.substring(1, matcher.indexOf(':'))] || 0;

      return {
        matcher: matcher.slice(4),
        parent: `@media (max-width: ${mediaPx}px)`,
      };
    },
    (matcher) => {
      if (!matcher.startsWith('hocus:')) return matcher;

      return {
        matcher: matcher.slice(6),
        selector: (s) => `${s}:hover, ${s}:focus`,
      };
    },
    (matcher) => {
      if (!matcher.startsWith('group-hocus:')) return matcher;

      return {
        matcher: matcher.slice(12),
        selector: (s) => `.group:hover ${s}, .group:focus ${s}`,
      };
    },
  ],
  theme: twConfig.theme.extend,
  presets: [
    presetWind(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
});
