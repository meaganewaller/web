const transparencyColors = [
  'pink-100',
  'pink-300',
  'pink-400',
  'pink-500',
  'pink-700',
  'pink-900',
  'purple-100',
  'purple-300',
  'purple-400',
  'purple-500',
  'purple-700',
  'purple-900',
  'blue-100',
  'blue-300',
  'blue-400',
  'blue-500',
  'blue-700',
  'blue-900',
  'yellow-100',
  'yellow-300',
  'yellow-500',
  'yellow-700',
  'yellow-900',
  'neutral-100',
  'neutral-300',
  'neutral-500',
  'neutral-700',
  'neutral-900',
  'red-100',
  'red-500',
  'red-700',
  'red-900',
  'green-100',
  'green-500',
  'green-700',
  'green-900',
  'orange-100',
  'orange-500',
  'orange-900',
  'navy-600',
  'navy-900',
] as const;
type TransparencyColor = (typeof transparencyColors)[number];

const normalColors = ['transparent'] as const;
type NormalColor = (typeof normalColors)[number];

const rainbowColors = ['transparent', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'] as const;
type RainbowColor = (typeof rainbowColors)[number];
type GradientColor = `gradient-${RainbowColor}`;
type ShadowColor = `shadow-${RainbowColor}`;

const gradientColors: Array<GradientColor> = rainbowColors.map((it) => `gradient-${it}` as GradientColor);

const shadowColors: Array<ShadowColor> = rainbowColors.map((it) => `shadow-${it}` as ShadowColor);

const colorToTransparencyTailwindVar = (colorName: TransparencyColor) => ({
  [colorName]: `rgba(var(--color-${colorName}) / <alpha-value>)`,
});

const colorToTailwindVar = (colorName: NormalColor | GradientColor | ShadowColor) => ({
  [colorName]: `var(--color-${colorName})`,
});

const reduceObjArray = <T>(objs: Array<T>) => objs.reduce((r, c) => Object.assign(r, c), {});

export const colors = {
  ...reduceObjArray(transparencyColors.map(colorToTransparencyTailwindVar)),
  ...reduceObjArray(normalColors.map(colorToTailwindVar)),
  ...reduceObjArray(gradientColors.map(colorToTailwindVar)),
  ...reduceObjArray(shadowColors.map(colorToTailwindVar)),
};
