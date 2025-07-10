import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { Button, Heading, Paragraph } from '../';
import { Skeleton } from './skeleton';

type Story = StoryObj<typeof Skeleton>;

export default {
  title: 'Komponenter/Loaders/Skeleton',
  component: Skeleton,
  parameters: {
    a11y: {
      config: {
        // Disable a11y empty heading rule as we intentionally set aria-hidden="true" on the Skeleton component inside Headings
        rules: [{ id: 'empty-heading', selector: ':has(.ds-skeleton)' }],
      },
    },
  },
} as Meta;

export const Preview: Story = {
  args: {
    width: 200,
    height: 100,
  },
};

export const Components: StoryFn<typeof Text> = () => {
  return (
    <>
      <Skeleton variant='circle' width='50px' height='50px' />
      <Skeleton variant='rectangle' width='100px' height='50px' />
      <Paragraph>
        <Skeleton variant='text' width='10' />
      </Paragraph>
    </>
  );
};

Components.parameters = {
  customStyles: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '20px',
  },
};

export const UsageExample: StoryFn<typeof Skeleton> = () => {
  return (
    <>
      <Skeleton height='150px' />
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          padding: '5px 0 5px 0',
        }}
      >
        <Skeleton variant='circle' width='30px' height='30px' />
        <Heading>
          <Skeleton variant='text'>En medium tittel</Skeleton>
        </Heading>
      </div>
      <Skeleton variant='text' width='140' />
    </>
  );
};

UsageExample.parameters = {
  customStyles: {
    maxWidth: 400,
  },
};

export const Children: StoryFn<typeof Skeleton> = () => {
  return (
    <Skeleton variant='rectangle'>
      <Paragraph>
        Her er en tekst som blir sendt inn som barn av en Skeleton.
      </Paragraph>
      <Paragraph>
        Se hvordan Skeleton da dekker den samlede bredden og høyden til barna.
      </Paragraph>
      <Button>Knapp</Button>
    </Skeleton>
  );
};

export const Text: StoryFn<typeof Skeleton> = () => (
  <>
    <div style={{ flex: '1 1 200px' }}>
      <Heading>En tittel</Heading>
      <Paragraph data-size='sm'>
        Her er en paragraf som går over flere linjer
      </Paragraph>
    </div>
    <div style={{ flex: '1 1 200px' }}>
      <Heading>
        <Skeleton variant='text'>En tittel</Skeleton>
      </Heading>
      <Paragraph data-size='sm'>
        <Skeleton variant='text' width={40} />
      </Paragraph>
    </div>
  </>
);

Text.parameters = {
  customStyles: { display: 'flex', gap: '20px', maxWidth: 300 },
};
