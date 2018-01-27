export const TOGGLE_MENU = 'TOGGLE_MENU';
export const ON_SEARCH = 'ON_SEARCH';

export function toggleMenu() {
  return {
    type: TOGGLE_MENU
  }
}

//implements on search
export function onSearch(searchData) {
  return {
    type: ON_SEARCH,
    searchData: searchData
  };
}