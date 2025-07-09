import { render as renderRtl, screen } from '@testing-library/react';
import { List } from '.';
import type { ListUnorderedProps } from './lists';

const render = (props: Partial<ListUnorderedProps> = {}) => {
  const allProps: ListUnorderedProps = {
    children: <List.Item>Test</List.Item>,
    ...props,
  };
  return renderRtl(<List.Unordered {...allProps} />);
};

describe('List', () => {
  it('Renders the list', () => {
    render();

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('Renders an unordered list', () => {
    render();
    const list = document.querySelector('ul');
    expect(list).toBeInTheDocument();
  });

  it('Renders an ordered list', () => {
    renderRtl(
      <List.Ordered>
        <List.Item>Test</List.Item>
      </List.Ordered>,
    );
    const list = document.querySelector('ol');
    expect(list).toBeInTheDocument();
  });

  it('Renders the children', () => {
    render();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should have the passed size', () => {
    render({ 'data-size': 'lg' });
    expect(screen.getByRole('list')).toHaveAttribute('data-size', 'lg');
  });
});
