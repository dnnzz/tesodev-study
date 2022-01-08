import {UserContext} from '../../context/Context';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure , mount} from "enzyme";
import UserList from './UserList';
import { MemoryRouter } from "react-router-dom";
import ListItem from '../ListItem/ListItem';
configure({ adapter: new Adapter() });

describe("UserList tests",() => {
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
    let wrapper;
    beforeEach(() => wrapper =mount(
    <MemoryRouter>
    <UserContext.Provider value={mockContext}>
        <UserList />
    </UserContext.Provider>
    </MemoryRouter>))
    test("renders userList to screen correctly",() => {
        expect(wrapper.find('div.userListWrapper')).toHaveLength(1);
        expect(wrapper.find('div.userListInner')).toHaveLength(1);
        const listItem = wrapper.find(ListItem).first().props();
        expect(listItem.name).toEqual("Curran Swanson");
        expect(listItem.email).toEqual("Praesent.luctus.Curabitur@SuspendisseduiFusce.ca");
        expect(listItem.date).toEqual("06/05/2022");
        expect(listItem.country).toEqual("Turkey");
        expect(listItem.state).toEqual("San José");
    })
    test("expect showMore button in screen",() =>{
        expect(wrapper.find('div.showMore')).toHaveLength(1);
        expect(wrapper.find('button.btn')).toHaveLength(1);
    })
})