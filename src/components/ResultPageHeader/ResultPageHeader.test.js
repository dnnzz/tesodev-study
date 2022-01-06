import { render, screen } from '@testing-library/react';
import ResultPageHeader from './ResultPageHeader';
import UserContext from '../../context/Context';

test('renders header to screen', () => {
  render(<UserContext value={{dispatch:jest.fn()}}>
  <ResultPageHeader />
  </UserContext>);
  const altText = screen.getByAltText("tesodev-logo")
  expect(altText).toBeInTheDocument();
  expect(screen.getByText("Search")).toBeInTheDocument();
});
