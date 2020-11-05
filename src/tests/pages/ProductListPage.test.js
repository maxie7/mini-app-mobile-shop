import React from "react";
import {shallow} from "enzyme";
import ProductListPage from "../../pages/ProductList/ProductListPage.component";

describe('ProductListPage component', () => {
  it('should render component (Product List Page)', () => {
    expect(shallow(<ProductListPage />)).toMatchSnapshot();
  })

  it('should have Searcher component', () => {
    const component = shallow(<ProductListPage />);
    expect(component.find('.Searcher')).toBeTruthy();
  })

  it('should have ProductListPageContainer wrapper', () => {
    const component = shallow(<ProductListPage />);
    expect(component.find('.ProductListPageContainer')).toBeTruthy();
  })

  it('should have at least one MobileItem component', () => {
    const component = shallow(<ProductListPage />);
    expect(component.find('.MobileItem')).toBeTruthy();
  })
})

// TODO: we need to write a test for filteredMobiles method and its behavior
// describe('Filtering content with search input', () =>{
//
//   let wrapper;
//   const setState = jest.fn();
//   const useStateSpy = jest.spyOn(React, "useState")
//   useStateSpy.mockImplementation((init) => [init, setState]);
//
//   beforeEach(() => {
//     wrapper = mount(shallow(<ProductListPage />).get(0))
//   });
//
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
//
//   it('should show product which match the search input field', () => {
//
//   })
// })