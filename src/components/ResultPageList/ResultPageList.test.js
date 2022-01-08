import ResultPageList from './ResultPageList';
import {UserContext} from '../../context/Context';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure , mount} from "enzyme";
import Pagination from '../Pagination/Pagination';
import ListItem from '../ListItem/ListItem';
configure({ adapter: new Adapter() });
describe('ResultPageList tests',() => {
    const mockContext = {
        state : {
            filteredUsers : [
                [
                    [
                        "Curran Swanson",
                        "Est Company",
                        "Praesent.luctus.Curabitur@SuspendisseduiFusce.ca",
                        "06/05/2022",
                        "Turkey",
                        "San José"
                    ],
                    [
                        "Melvin Mcgowan",
                        "Phasellus At Augue Incorporated",
                        "magnis.dis.parturient@sedpede.net",
                        "24/06/2021",
                        "Mayotte",
                        "Los Sauces"
                    ],
                    [
                        "Matthew Small",
                        "Nunc Associates",
                        "urna.Nullam.lobortis@velturpis.org",
                        "27/03/2021",
                        "Belarus",
                        "Odintsovo"
                    ],
                ]
            ]
        },
        dispatch:jest.fn()
    }
    beforeEach(() => {})
    test('renders list to screen', () => {
        const wrapper = mount(
            <UserContext.Provider value={mockContext}>
            <ResultPageList />
            </UserContext.Provider>);
        expect(wrapper.find(".pageListWrapper")).toHaveLength(1);
    });
    test('checks pagination buttons', () => {
        const wrapper = mount(
            <UserContext.Provider value={mockContext}>
            <ResultPageList />
            </UserContext.Provider>);
        const pagination = wrapper.find(Pagination);
        expect(pagination.props().allUsers).toEqual(3);
    });
    test('checks first users info rendered correctly',()=>{
        const wrapper = mount(
            <UserContext.Provider value={mockContext}>
            <ResultPageList />
            </UserContext.Provider>);
        const listItem = wrapper.find(ListItem).first().props();
        expect(listItem.name).toEqual("Curran Swanson");
        expect(listItem.email).toEqual("Praesent.luctus.Curabitur@SuspendisseduiFusce.ca");
        expect(listItem.date).toEqual("06/05/2022");
        expect(listItem.country).toEqual("Turkey");
        expect(listItem.state).toEqual("San José");
    })
    test('checks orderBy section rendered correctly',() => {
        const wrapper = mount(
            <UserContext.Provider value={mockContext}>
            <ResultPageList />
            </UserContext.Provider>);
        const button = wrapper.find('button.btn');
        expect(button).toHaveLength(1);
        button.simulate('mouseover');
        expect(wrapper.find('div.orders')).toHaveLength(1);
        const nameAscButton = wrapper.find('button[value="name_asc"]');
        const nameDescButton = wrapper.find('button[value="name_desc"]');
        const yearAscButton =wrapper.find('button[value="year_asc"]');
        const yearDescButton = wrapper.find('button[value="year_desc"]')
        expect(nameAscButton).toHaveLength(1);
        nameAscButton.simulate('click');
        expect(mockContext.dispatch).toHaveBeenCalledWith({ type: "SORT_USERS", payload: 'name_asc'});
        expect(nameDescButton).toHaveLength(1);
        nameDescButton.simulate('click');
        expect(mockContext.dispatch).toHaveBeenCalledWith({ type: "SORT_USERS", payload: 'name_desc'});
        expect(yearAscButton).toHaveLength(1);
        yearAscButton.simulate('click');
        expect(mockContext.dispatch).toHaveBeenCalledWith({ type: "SORT_USERS", payload: 'year_asc'});
        expect(yearDescButton).toHaveLength(1);
        yearDescButton.simulate('click');
        expect(mockContext.dispatch).toHaveBeenCalledWith({ type: "SORT_USERS", payload: 'year_desc'});
    })
})
