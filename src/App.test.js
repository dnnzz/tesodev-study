import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header alt text', () => {
  render(<App />);
  const linkElement = screen.getByText("Search Web App");
  expect(linkElement).toBeInTheDocument();
});
