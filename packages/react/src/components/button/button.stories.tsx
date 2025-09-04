import { PencilWritingIcon } from '@navikt/aksel-icons';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import themeConfig from '../../../../cli/configs/digdir.config.json';
import { Button, type ButtonProps } from './button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Komponenter/Button',
  component: Button,
  parameters: {
    customStyles: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'var(--ds-size-4)',
    },
  },
};

export default meta;

const colorVariants = [
  ...Object.keys(themeConfig.themes.digdir.colors.main),
  ...Object.keys(themeConfig.themes.digdir.colors.support),
  'neutral',
  'danger',
];

export const Preview: Story = {
  render: ({ ...args }) => {
    return <Button {...args} />;
  },
  args: {
    children: 'Knapp',
    disabled: false,
    variant: 'primary',
    icon: false,
  },
};

export const Variants: StoryFn<typeof Button> = () => (
  <>
    <Button variant='primary'>Primary</Button>
    <Button variant='secondary'>Secondary</Button>
    <Button variant='tertiary'>Teritiary</Button>
  </>
);

export const Colors: StoryFn<typeof Button> = () => (
  <>
    {colorVariants.map((color) => (
      <Button
        key={color}
        data-color={color as ButtonProps['data-color']}
        variant='primary'
      >
        {color}
      </Button>
    ))}
  </>
);

export const ColorsHover = Colors.bind({});
ColorsHover.parameters = {
  pseudo: { hover: true },
  chromatic: { modes: { mobile: { disable: true } } },
};

export const ColorsPressed = Colors.bind({});
ColorsPressed.parameters = {
  pseudo: { active: true },
  chromatic: { modes: { mobile: { disable: true } } },
};

export const Icons: StoryFn<typeof Button> = () => (
  <>
    <Button icon aria-label='Rediger'>
      <PencilWritingIcon aria-hidden />
    </Button>
    <Button>
      <PencilWritingIcon aria-hidden />
      Rediger
    </Button>
  </>
);

export const CombinedColors: StoryFn<typeof Button> = () => (
  <>
    <Button variant='primary' data-color='neutral'>
      Publiser
    </Button>
    <Button variant='secondary' data-color='neutral'>
      Lagre kladd
    </Button>
    <Button variant='tertiary' data-color='danger'>
      Slett
    </Button>
  </>
);

export const AsLink: StoryFn<typeof Button> = () => (
  <Button asChild>
    <a target='_blank' rel='noreferrer' href='https://www.designsystemet.no'>
      Gå til designsystemet.no
    </a>
  </Button>
);

export const Loading: StoryFn<typeof Button> = () => (
  <>
    <Button variant='primary' loading>
      Laster...
    </Button>
    <Button variant='secondary' loading>
      Laster...
    </Button>
    <Button variant='tertiary' loading>
      Laster...
    </Button>
  </>
);
