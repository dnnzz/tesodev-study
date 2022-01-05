import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

test('renders single item', () => {
  render(<ListItem  name={"test"} email={"test@gmail.com"} country={"turkey"} date={"2016"} state={"antalya"}/>);
  expect(screen.getByText((content)=> content.startsWith("turkey"))).toBeInTheDocument();
  expect(screen.getByText((content)=> content.endsWith("antalya"))).toBeInTheDocument();
  expect(screen.getByText((content) => content.startsWith("test"))).toBeInTheDocument();
  expect(screen.getByText((content) => content.endsWith("2016"))).toBeInTheDocument();
  expect(screen.getByText((content) => content.startsWith("Email:"))).toBeInTheDocument();
  expect(screen.getByText((content) => content.endsWith("test@gmail.com"))).toBeInTheDocument();
});
