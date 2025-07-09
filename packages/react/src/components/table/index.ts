import type { TableProps } from './table';
import { Table as TableRoot } from './table';
import type { TableBodyProps } from './table-body';
import { TableBody } from './table-body';
import type { TableCellProps } from './table-cell';
import { TableCell } from './table-cell';
import type { TableFootProps } from './table-foot';
import { TableFoot } from './table-foot';
import type { TableHeadProps } from './table-head';
import { TableHead } from './table-head';
import type { TableHeaderCellProps } from './table-header-cell';
import { TableHeaderCell } from './table-header-cell';
import type { TableRowProps } from './table-row';
import { TableRow } from './table-row';

/**
 * Table component, used to display tabular data. Renders a native HTML table element.
 *
 * @example
 * <Table>
 *   <Table.Head>
 *     <Table.Row>
 *       <Table.HeaderCell>Name</Table.HeaderCell>
 *       <Table.HeaderCell>Age</Table.HeaderCell>
 *     </Table.Row>
 *   </Table.Head>
 *   <Table.Body>
 *     <Table.Row>
 *       <Table.Cell>John</Table.Cell>
 *       <Table.Cell>25</Table.Cell>
 *     </Table.Row>
 *   </Table.Body>
 *   <Table.Foot>
 *     <Table.Row>
 *       <Table.Cell>Total</Table.Cell>
 *       <Table.Cell>2</Table.Cell>
 *     </Table.Row>
 *   </Table.Foot>
 * </Table>
 */
const Table = Object.assign(TableRoot, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeaderCell: TableHeaderCell,
  Foot: TableFoot,
});

Table.displayName = 'Table';
Table.Head.displayName = 'Table.Head';
Table.Body.displayName = 'Table.Body';
Table.Row.displayName = 'Table.Row';
Table.Cell.displayName = 'Table.Cell';
Table.HeaderCell.displayName = 'Table.HeaderCell';
Table.Foot.displayName = 'Table.Foot';

export {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  TableFoot,
};
export type {
  TableProps,
  TableHeadProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
  TableHeaderCellProps,
  TableFootProps,
};
