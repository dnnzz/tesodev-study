import { render, screen } from '@testing-library/react';
import Header from './Header';
import UserContext from '../../context/Context';

test('renders header to screen', () => {
  render(
  <UserContext value={{dispatch:jest.fn()}}>
  <Header />
  </UserContext>);
  const linkElement = screen.getByText("Search Web App");
  const altText = screen.getByAltText("tesodev-logo")
  expect(linkElement).toBeInTheDocument();
  expect(altText).toBeInTheDocument();
});
