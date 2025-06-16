import cat1 from '@assets/img/cats/Cat 3.jpg';
import type { Meta, StoryFn } from '@storybook/react-vite';

import { BriefcaseIcon } from '@navikt/aksel-icons';
import { Avatar, type AvatarProps } from '.';
import { Badge, Dropdown } from '../';
import themeConfig from '../../../../theme/configs/designsystemet.config.json';
type Story = StoryFn<typeof Avatar>;

const meta: Meta<typeof Avatar> = {
  title: 'Komponenter/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
    customStyles: {
      display: 'flex',
      gap: 'var(--ds-size-2)',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  },
};

const colorVariants = [
  ...Object.keys(themeConfig.themes.designsystemet.colors.main),
  ...Object.keys(themeConfig.themes.designsystemet.colors.support),
  'neutral',
];

export default meta;

export const Preview: Story = (args) => <Avatar {...args} />;

Preview.args = {
  'aria-label': 'Ola Nordmann',
  variant: 'circle',
  children: '',
};

export const NoName: Story = () => <Avatar aria-label='Ola' />;

export const Sizes: Story = () => (
  <>
    <Avatar data-size='xs' aria-label='extra small' initials='xs' />
    <Avatar data-size='xs' aria-label='extra small' />
    <Avatar data-size='sm' aria-label='small' initials='sm' />
    <Avatar data-size='sm' aria-label='small' />
    <Avatar data-size='md' aria-label='medium' initials='md' />
    <Avatar data-size='md' aria-label='medium' />
    <Avatar data-size='lg' aria-label='large' initials='lg' />
    <Avatar data-size='lg' aria-label='large' />
  </>
);

export const ColorVariants: Story = () => (
  <>
    {colorVariants.map((color) => (
      <Avatar
        key={color}
        data-color={color as AvatarProps['data-color']}
        aria-label={`color ${color}`}
      />
    ))}
  </>
);

export const ShapeVariants: Story = () => (
  <>
    <Avatar variant='circle' aria-label='variant circle' />
    <Avatar variant='square' aria-label='variant square' />
    <Avatar variant='circle' aria-label='Ola Nordman'>
      ON
    </Avatar>
    <Avatar variant='square' aria-label='Ola Nordman'>
      ON
    </Avatar>
  </>
);

export const WithImage: Story = () => (
  <Avatar aria-label='Ola Nordman'>
    <img src={cat1} alt='' />
  </Avatar>
);

export const InDropdown: Story = () => (
  <Dropdown.TriggerContext>
    <Dropdown.Trigger variant='tertiary'>
      <Avatar aria-label='Ola Nordmann' data-size='sm'>
        ON
      </Avatar>
      Velg Profil
    </Dropdown.Trigger>
    <Dropdown placement='bottom-end' autoPlacement={false} data-size='md' open>
      <Dropdown.List>
        <Dropdown.Item>
          <Dropdown.Button>
            <Badge.Position overlap='circle'>
              <Badge data-color='danger' data-size='sm'></Badge>
              <Avatar aria-label='Ola Nordmann' data-size='xs'>
                ON
              </Avatar>
            </Badge.Position>
            Ola Nordmann
          </Dropdown.Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Button>
            <Avatar data-size='xs' aria-label='Sogndal Kommune'>
              <BriefcaseIcon aria-hidden />
            </Avatar>
            Sogndal kommune
          </Dropdown.Button>
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  </Dropdown.TriggerContext>
);
InDropdown.parameters = {
  layout: 'fullscreen',
  customStyles: {
    height: '320px',
  },
};

export const AsLink: Story = () => (
  <a href='#'>
    <Avatar aria-label='Ola Nordmann' />
  </a>
);
