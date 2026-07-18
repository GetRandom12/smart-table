import {rules, createComparison, defaultRules} from "../lib/compare.js";


export function initSearching(searchField) {
    const compare = createComparison(
        defaultRules.skipEmptyTargetValues,
        rules.searchMultipleFields (searchField, ['date', 'customer', 'seller'], false)
    );

    // @todo: #5.1 — настроить компаратор

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data.filter(row => compare(row, state));
    }
}