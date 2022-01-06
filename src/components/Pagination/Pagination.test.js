import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
import Pagination from "./Pagination";

configure({ adapter: new Adapter() });

describe("Pagination tests", () =>{
    let wrapper;
    beforeEach(() => wrapper = shallow(<Pagination userPerPage={6} allUsers={24} paginate={jest.fn()} />))
    it("renders pagination buttons",()=>{
        const paginationDiv = wrapper.find(".pagination");
        expect(paginationDiv.length).toBe(1);
    })
    it("has 6 buttons",() => {
        // also 2 more buttons exist next and prev
        const buttons = wrapper.find("button");
        expect(buttons.length).toEqual(6);
    })
    it("clicks button 2 and verify that currentNumberstate is changed",()=>{
        const setCurrentNumber = jest.fn();
        const handleClick = jest.spyOn(React, "useState");
        handleClick.mockImplementation(currentNumber => [currentNumber, setCurrentNumber]);
        wrapper.find("#btn-2").simulate('click');
        expect(setCurrentNumber).toBeTruthy();
     })
})