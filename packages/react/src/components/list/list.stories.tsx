import type { Meta, StoryFn } from '@storybook/react-vite';
import { Heading, Link } from '../';
import { List } from './';

type Story = StoryFn<typeof List.Unordered>;

export default {
  title: 'Komponenter/List',
  component: List.Unordered,
} satisfies Meta;

export const Preview: Story = (args) => (
  <List.Unordered {...args}>
    <List.Item>List Item 1</List.Item>
    <List.Item>List Item 2</List.Item>
    <List.Item>List Item 3</List.Item>
  </List.Unordered>
);

export const Sortert: StoryFn<typeof List.Ordered> = (args) => (
  <>
    <Heading
      level={2}
      data-size='xs'
      style={{ marginBottom: 'var(--ds-size-2)' }}
    >
      Slik gjør du:
    </Heading>
    <List.Ordered {...args}>
      <List.Item>
        Tørk over kyllingfiletene før du krydrer og steker. Dette vil gi en
        finere stekeskorpe på kjøttet. Ikke bruk kjøkkenpapir som loer.
        Papirbiter i maten er ikke noe særlig.
      </List.Item>
      <List.Item>
        Ha salt og pepper på filetene og eventuelt annet krydder for ekstra
        smak. Hvitløkpepper, paprika eller provence kan gi en god smak!
      </List.Item>
      <List.Item>
        Stek filetene på sterk varme i to minutter på hver side. Sett deretter
        på lokk og stek videre på svak varme i syv minutter på hver side.
      </List.Item>
    </List.Ordered>
  </>
);

export const Usortert: Story = (args) => (
  <>
    <Heading
      level={2}
      data-size='xs'
      style={{ marginBottom: 'var(--ds-size-2)' }}
    >
      Foreningen har plikt til å ha revisor hvis de har
    </Heading>
    <List.Unordered {...args}>
      <List.Item>
        et gjennomsnittlig antall ansatte som tilsvarer ti årsverk eller mer
      </List.Item>
      <List.Item>balansesum som er 27 millioner kroner eller mer</List.Item>
      <List.Item>
        driftsinntekter for sin samlede virksomhet på 7 millioner kroner eller
        mer
      </List.Item>
    </List.Unordered>
  </>
);

export const Innrykk: Story = (args) => (
  <List.Unordered {...args}>
    <List.Item>
      <Heading
        level={3}
        data-size='xs'
        style={{ marginBottom: 'var(--ds-size-2)' }}
      >
        {' '}
        List Item 1
      </Heading>
      <List.Ordered>
        <List.Item>List Item 1.1</List.Item>
        <List.Item>List Item 1.2</List.Item>
        <List.Item>List Item 1.3</List.Item>
      </List.Ordered>
    </List.Item>
    <List.Item>
      <Heading
        level={3}
        data-size='xs'
        style={{ marginBottom: 'var(--ds-size-2)' }}
      >
        {' '}
        List Item 2
      </Heading>
      <List.Unordered>
        <List.Item>List Item 2.1</List.Item>
        <List.Item>List Item 2.2</List.Item>
        <List.Item>List Item 2.3</List.Item>
      </List.Unordered>
    </List.Item>
    <List.Item>
      <Heading
        level={3}
        data-size='xs'
        style={{ marginBottom: 'var(--ds-size-2)' }}
      >
        List Item 3
      </Heading>
      <List.Unordered>
        <List.Item>List Item 3.1</List.Item>
        <List.Item>List Item 3.2</List.Item>
        <List.Item>List Item 3.3</List.Item>
      </List.Unordered>
    </List.Item>
  </List.Unordered>
);

export const ListeMedLenker: Story = (args) => (
  <List.Unordered {...args} style={{ listStyle: 'none', padding: 0 }}>
    <List.Item>
      <Link
        href='https://www.designsystemet.no/no/fundamentals'
        target='_blank'
      >
        Grunnleggende
      </Link>
    </List.Item>
    <List.Item>
      <Link
        href='https://www.designsystemet.no/no/best-practices'
        target='_blank'
      >
        God praksis
      </Link>
    </List.Item>
    <List.Item>
      <Link href='https://www.designsystemet.no/no/patterns' target='_blank'>
        Mønstre
      </Link>
    </List.Item>
  </List.Unordered>
);

export const ListeMedOverskrift: Story = () => (
  <>
    <div>
      <Heading
        level={2}
        data-size='2xs'
        style={{ marginBottom: 'var(--ds-size-2)' }}
      >
        List sm og Heading 2xs
      </Heading>
      <List.Unordered data-size='sm'>
        <List.Item>
          <Link
            href='https://www.designsystemet.no/no/fundamentals'
            target='_blank'
          >
            Grunnleggende
          </Link>
        </List.Item>
        <List.Item>
          <Link
            href='https://www.designsystemet.no/no/best-practices'
            target='_blank'
          >
            God praksis
          </Link>
        </List.Item>
        <List.Item>
          <Link
            href='https://www.designsystemet.no/no/patterns'
            target='_blank'
          >
            Mønstre
          </Link>
        </List.Item>
      </List.Unordered>
    </div>
    <div>
      <Heading
        level={2}
        data-size='xs'
        style={{ marginBottom: 'var(--ds-size-2)' }}
      >
        List md og Heading xs
      </Heading>
      <List.Unordered data-size='md'>
        <List.Item>
          <Link
            href='https://www.designsystemet.no/no/fundamentals'
            target='_blank'
          >
            Grunnleggende
          </Link>
        </List.Item>
        <List.Item>
          <Link
            href='https://www.designsystemet.no/no/best-practices'
            target='_blank'
          >
            God praksis
          </Link>
        </List.Item>
        <List.Item>
          <Link
            href='https://www.designsystemet.no/no/patterns'
            target='_blank'
          >
            Mønstre
          </Link>
        </List.Item>
      </List.Unordered>
    </div>
    <div>
      <Heading
        level={2}
        data-size='sm'
        style={{ marginBottom: 'var(--ds-size-2)' }}
      >
        List lg og Heading sm
      </Heading>
      <List.Unordered data-size='lg'>
        <List.Item>
          <Link
            href='https://www.designsystemet.no/no/fundamentals'
            target='_blank'
          >
            Grunnleggende
          </Link>
        </List.Item>
        <List.Item>
          <Link
            href='https://www.designsystemet.no/no/best-practices'
            target='_blank'
          >
            God praksis
          </Link>
        </List.Item>
        <List.Item>
          <Link
            href='https://www.designsystemet.no/no/patterns'
            target='_blank'
          >
            Mønstre
          </Link>
        </List.Item>
      </List.Unordered>
    </div>
  </>
);

ListeMedOverskrift.parameters = {
  customStyles: { display: 'flex', gap: '2rem', flexWrap: 'wrap' },
};
