import type { Meta, StoryFn } from '@storybook/react-vite';
import { useState } from 'react';

import type { TableHeaderCellProps } from '../../';

import { Checkbox, Table, Textfield } from '../../';
import { useCheckboxGroup } from '../../utilities';

type Story = StoryFn<typeof Table>;

export default {
  title: 'Komponenter/Table',
  component: Table,
} as Meta;

export const Preview: Story = (args) => {
  return (
    <Table {...args}>
      <caption>Table caption</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Header 1</Table.HeaderCell>
          <Table.HeaderCell>Header 2</Table.HeaderCell>
          <Table.HeaderCell>Header 3</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Cell 1</Table.Cell>
          <Table.Cell>Cell 2</Table.Cell>
          <Table.Cell>Cell 3</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell 4</Table.Cell>
          <Table.Cell>Cell 5</Table.Cell>
          <Table.Cell>Cell 6</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.HeaderCell>Footer 1</Table.HeaderCell>
          <Table.HeaderCell>Footer 2</Table.HeaderCell>
          <Table.HeaderCell>Footer 3</Table.HeaderCell>
        </Table.Row>
      </Table.Foot>
    </Table>
  );
};

Preview.args = {
  zebra: false,
  stickyHeader: false,
  border: false,
  hover: false,
};

export const Numbers: Story = (args) => (
  <Table
    style={{
      tableLayout: 'fixed',
      fontVariantNumeric: 'tabular-nums',
    }}
    {...args}
  >
    <caption>Antall søknader per måned</caption>
    <Table.Head>
      <Table.Row>
        <Table.HeaderCell scope='col'>Måned</Table.HeaderCell>
        <Table.HeaderCell scope='col' style={{ textAlign: 'right' }}>
          2023
        </Table.HeaderCell>
        <Table.HeaderCell scope='col' style={{ textAlign: 'right' }}>
          2024
        </Table.HeaderCell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.HeaderCell scope='row'>Januar</Table.HeaderCell>
        <Table.Cell style={{ textAlign: 'right' }}>1 230</Table.Cell>
        <Table.Cell style={{ textAlign: 'right' }}>1 450</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell scope='row'>Februar</Table.HeaderCell>
        <Table.Cell style={{ textAlign: 'right' }}>980</Table.Cell>
        <Table.Cell style={{ textAlign: 'right' }}>1 120</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell scope='row'>Mars</Table.HeaderCell>
        <Table.Cell style={{ textAlign: 'right' }}>1 150</Table.Cell>
        <Table.Cell style={{ textAlign: 'right' }}>1 300</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

Numbers.args = {
  zebra: true,
  border: true,
};

const dummyData = [
  {
    id: 1,
    navn: 'Lise Nordmann',
    epost: 'lise@nordmann.no',
    telefon: '22345678',
  },
  {
    id: 2,
    navn: 'Kari Nordmann',
    epost: 'kari@nordmann.no',
    telefon: '87654321',
  },
  {
    id: 3,
    navn: 'Ola Nordmann',
    epost: 'ola@nordmann.no',
    telefon: '32345678',
  },
  {
    id: 4,
    navn: 'Per Nordmann',
    epost: 'per@nordmann.no',
    telefon: '12345678',
  },
];

export const Sortable: Story = (args) => {
  const [sortField, setSortField] = useState<
    keyof (typeof dummyData)[0] | null
  >(null);
  const [sortDirection, setSortDirection] =
    useState<TableHeaderCellProps['sort']>(undefined);

  const handleSort = (field: keyof (typeof dummyData)[0]) => {
    if (sortField === field && sortDirection === 'descending') {
      setSortField(null);
      setSortDirection(undefined);
    } else {
      setSortField(field);
      setSortDirection(
        sortField === field && sortDirection === 'ascending'
          ? 'descending'
          : 'ascending',
      );
    }
  };

  const sortedData = [...dummyData].sort((a, b) => {
    if (sortField === null) return 0;
    if (a[sortField] < b[sortField])
      return sortDirection === 'ascending' ? -1 : 1;
    if (a[sortField] > b[sortField])
      return sortDirection === 'ascending' ? 1 : -1;
    return 0;
  });

  return (
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell
            sort={sortField === 'navn' ? sortDirection : 'none'}
            onClick={() => handleSort('navn')}
          >
            Navn
          </Table.HeaderCell>
          <Table.HeaderCell>Epost</Table.HeaderCell>
          <Table.HeaderCell
            sort={sortField === 'telefon' ? sortDirection : 'none'}
            onClick={() => handleSort('telefon')}
          >
            Telefon
          </Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {sortedData.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.navn}</Table.Cell>
            <Table.Cell>{row.epost}</Table.Cell>
            <Table.Cell>{row.telefon}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
Sortable.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const StickyHeader: Story = (args) => {
  const rows = Array.from({ length: 50 }, (_, i) => i + 1);
  return (
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Header 1</Table.HeaderCell>
          <Table.HeaderCell>Header 2</Table.HeaderCell>
          <Table.HeaderCell>Header 3</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map((row) => (
          <Table.Row key={row}>
            <Table.Cell>{`Cell ${row}1`}</Table.Cell>
            <Table.Cell>{`Cell ${row}2`}</Table.Cell>
            <Table.Cell>{`Cell ${row}3`}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

StickyHeader.args = {
  stickyHeader: true,
  tabIndex: 0,
};

StickyHeader.parameters = {
  customStyles: { height: '280px', overflow: 'auto', padding: 0 },
};

export const WithFormElements: Story = (args) => {
  const { getCheckboxProps } = useCheckboxGroup({
    name: 'my-checkbox',
    value: ['Kari Nordmann'],
  });

  return (
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>
            <Checkbox
              aria-label='Velg alle ansatte'
              {...getCheckboxProps({ allowIndeterminate: true })}
            />
          </Table.HeaderCell>
          <Table.HeaderCell>Navn</Table.HeaderCell>
          <Table.HeaderCell>Stilling</Table.HeaderCell>
          <Table.HeaderCell>Kommentar</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {['Kari Nordmann', 'Ola Nordmann', 'Jens Nordmann'].map((row) => (
          <Table.Row key={row}>
            <Table.Cell>
              <Checkbox
                aria-label={`Velg ${row}`}
                {...getCheckboxProps(String(row))}
              />
            </Table.Cell>
            <Table.Cell>{row}</Table.Cell>
            <Table.Cell>Rådgiver</Table.Cell>
            <Table.Cell>
              <Textfield data-size='sm' aria-label={`Textfield ${row}`} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
WithFormElements.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const FixedTable: Story = (args) => {
  const rows = Array.from({ length: 3 }, (_, i) => i + 1);
  return (
    <Table
      {...args}
      style={{
        tableLayout: 'fixed',
      }}
    >
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Header 1</Table.HeaderCell>
          <Table.HeaderCell>Header 2</Table.HeaderCell>
          <Table.HeaderCell>Header 3</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map((row) => (
          <Table.Row key={row}>
            <Table.Cell>{`Cell ${row}1`}</Table.Cell>
            <Table.Cell>{`Cell ${row}2`}</Table.Cell>
            <Table.Cell>{`Cell ${row}3`}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export const MultipleHeaderRows: Story = (args) => {
  const rows = Array.from({ length: 50 }, (_, i) => i + 1);
  return (
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Header 1</Table.HeaderCell>
          <Table.HeaderCell colSpan={2}>Header 2</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Header 3</Table.HeaderCell>
          <Table.HeaderCell>Header 4</Table.HeaderCell>
          <Table.HeaderCell>Header 5</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map((row) => (
          <Table.Row key={row}>
            <Table.Cell>{`Cell ${row}1`}</Table.Cell>
            <Table.Cell>{`Cell ${row}2`}</Table.Cell>
            <Table.Cell>{`Cell ${row}3`}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export const WithBorder: Story = (args) => {
  const rows = Array.from({ length: 3 }, (_, i) => i + 1);
  return (
    <>
      <Table {...args}>
        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={row}>
              <Table.Cell>{`Cell ${row}1`}</Table.Cell>
              <Table.Cell>{`Cell ${row}2`}</Table.Cell>
              <Table.Cell>{`Cell ${row}3`}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={row}>
              <Table.Cell>{`Cell ${row}1`}</Table.Cell>
              <Table.Cell>{`Cell ${row}2`}</Table.Cell>
              <Table.Cell>{`Cell ${row}3`}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Table {...args}>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Header 3</Table.HeaderCell>
            <Table.HeaderCell>Header 4</Table.HeaderCell>
            <Table.HeaderCell>Header 5</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={row}>
              <Table.Cell>{`Cell ${row}1`}</Table.Cell>
              <Table.Cell>{`Cell ${row}2`}</Table.Cell>
              <Table.Cell>{`Cell ${row}3`}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Table {...args}>
        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={row}>
              <Table.Cell>{`Cell ${row}1`}</Table.Cell>
              <Table.Cell>{`Cell ${row}2`}</Table.Cell>
              <Table.Cell>{`Cell ${row}3`}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Foot>
          <Table.Row>
            <Table.HeaderCell>Footer 1</Table.HeaderCell>
            <Table.HeaderCell>Footer 2</Table.HeaderCell>
            <Table.HeaderCell>Footer 3</Table.HeaderCell>
          </Table.Row>
        </Table.Foot>
      </Table>
    </>
  );
};

WithBorder.args = {
  border: true,
};

WithBorder.parameters = {
  customStyles: { display: 'grid', gap: '1rem' },
};
