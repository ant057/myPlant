import { AppActions, AppActionTypes } from './app.actions';
import { Lists } from '../models/app/list';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Household } from '../models/household/household';

export interface AppState {
    lists: Lists[];
    households: Household[];
    selectedHousehold: Household;
    householdsLoading: boolean;
}

const initialState: AppState = {
    lists: undefined,
    households: undefined,
    selectedHousehold: undefined,
    householdsLoading: false
};

const getAppFeatureState = createFeatureSelector<AppState>('app');
// export const getLists = state => state.lists;

export const getLists = createSelector(
     getAppFeatureState,
     state => state.lists
 );

export const getHouseholds = createSelector(
    getAppFeatureState,
    state => state.households
);

export const getSelectedHousehold = createSelector(
    getAppFeatureState,
    state => state.selectedHousehold
);

export const getHouseholdsLoading = createSelector(
    getAppFeatureState,
    state => state.householdsLoading
);

export function reducer(state = initialState, action: AppActions): AppState {
    switch (action.type) {

        case AppActionTypes.LoadLists:
            return {
                ...state
            };

        case AppActionTypes.LoadListsSuccess:
            return {
                ...state,
                lists: action.payload
            };

        case AppActionTypes.LoadListsError:
            return {
                ...state
            };

        case AppActionTypes.LoadHouseholds:
            return {
                ...state,
                householdsLoading: true
            };

        case AppActionTypes.LoadHouseholdsSuccess:
            return {
                ...state,
                households: action.payload,
                householdsLoading: false
            };

        case AppActionTypes.LoadHouseholdsError:
            return {
                ...state,
                householdsLoading: false
            };

        case AppActionTypes.SelectHousehold:
            return{
                ...state,
                selectedHousehold: action.payload
            };

        default:
            return state;

    }
}
