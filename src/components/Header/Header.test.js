import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header to screen', () => {
  render(<Header />);
  const linkElement = screen.getByText("Search Web App");
  const altText = screen.getByAltText("tesodev-logo")
  expect(linkElement).toBeInTheDocument();
  expect(altText).toBeInTheDocument();
});
