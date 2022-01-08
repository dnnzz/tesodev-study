import ResultPageHeader from './ResultPageHeader';
import {UserContext} from '../../context/Context';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure , mount} from "enzyme";
configure({ adapter: new Adapter() });
describe("result page header tests",()=>{
  let wrapper;
  const dispatch = jest.fn();
  beforeEach(() => wrapper=mount(
    <UserContext.Provider value={{dispatch:dispatch}}>
      <ResultPageHeader />
      </UserContext.Provider>))

test('renders header to screen', () => {
  expect(wrapper.find('div.header')).toHaveLength(1);
  expect(wrapper.find('img.logo')).toHaveLength(1);
  expect(wrapper.find('input.resultPageInput')).toHaveLength(1);
  expect(wrapper.find('button.resultPageBtn')).toHaveLength(1);
});
test('set query given user input',()=>{
  const input = wrapper.find('input.resultPageInput').at(0);
  input.simulate('change',{target : {name:'query',value:'tur'}});
  wrapper.find('button.resultPageBtn').simulate('click');
  expect(dispatch).toHaveBeenCalledWith({type:'SEARCH_USERS',payload:'tur'});
})
})