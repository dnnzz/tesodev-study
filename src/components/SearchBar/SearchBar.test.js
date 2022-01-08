import SearchBar from './SearchBar';
import {UserContext} from '../../context/Context';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure , mount} from "enzyme";
configure({ adapter: new Adapter() });
describe('SearchBar tests',() => {
    let wrapper;
    const dispatch = jest.fn();
    beforeEach(() => wrapper = mount(<UserContext.Provider value={{dispatch:dispatch}}>
        <SearchBar />
        </UserContext.Provider>))
    test('renders searchBar to screen', () => {
        expect(wrapper.find(".searchBarWrapper")).toHaveLength(1);
        expect(wrapper.find('div.searchBarInnerDiv')).toHaveLength(1);
        expect(wrapper.find('input.searchBarInput')).toHaveLength(1);
        expect(wrapper.find('button.searchButton')).toHaveLength(1);
    });
    test('checks given input dispatched correctly',()=>{
        const input = wrapper.find('input.searchBarInput');
        expect(input).toHaveLength(1);
        input.simulate('change',{target : {name:'query',value:'test'}});
        wrapper.find('button.searchButton').simulate('click');
        expect(dispatch).toHaveBeenCalledWith({type:'SEARCH_USERS',payload:'test'});
    })
})
