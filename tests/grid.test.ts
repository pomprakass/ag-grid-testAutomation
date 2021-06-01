import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

describe("Load AG Grid", () => {
  before(() => {
    Page.open();
  });

  it("Should display the grids", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is displayed.
     */
    GridPage.columnHeader.forEach((el) => {
      expect(el.isDisplayed()).to.eql(true);
    });

  });
  /**
   * @Modified by: OmPrakash
   * @modified Date: 1-June-2021
   * Added new tests
   */
  it("Should display grid side bar",()=>{
    GridPage.sideBar.waitForDisplayed();
    expect(GridPage.sideBar.isDisplayed()).to.eql(true);
  });

  /**
   * @Modified by: OmPrakash
   * @modified Date: 1-June-2021
   * Added new tests
   */
   it("Should display main grid",()=>{
    GridPage.mainGrid.waitForDisplayed();
    expect(GridPage.mainGrid.isDisplayed()).to.eql(true);
  });
});
