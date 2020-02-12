import { Action } from '@ngrx/store';
import { Lists } from '../models/app/list';
import { Household } from '../models/household/household';

export enum AppActionTypes {
    LoadLists = '[Load Lists] Try',
    LoadListsSuccess = '[Load Lists] Successful',
    LoadListsError = '[Load Lists] Error',
    LoadHouseholds = '[Load Households] Try',
    LoadHouseholdsSuccess = '[Load Households] Successful',
    LoadHouseholdsError = '[Load Households] Error',
    SelectHousehold = '[Select Household] Success'
}

export class LoadLists implements Action {
    readonly type = AppActionTypes.LoadLists;

    constructor() { }
}

export class LoadListsSuccess implements Action {
    readonly type = AppActionTypes.LoadListsSuccess;

    constructor(public payload: Lists[]) { }
}

export class LoadListsError implements Action {
    readonly type = AppActionTypes.LoadListsError;

    constructor(public payload: string) { }
}

export class LoadHouseholds implements Action {
    readonly type = AppActionTypes.LoadHouseholds;

    constructor(public payload: string) { }
}

export class LoadHouseholdsSuccess implements Action {
    readonly type = AppActionTypes.LoadHouseholdsSuccess;

    constructor(public payload: Household[]) { }
}

export class LoadHouseholdsError implements Action {
    readonly type = AppActionTypes.LoadHouseholdsError;

    constructor() { }
}

export class SelectHousehold implements Action {
    readonly type = AppActionTypes.SelectHousehold;

    constructor(public payload: Household) { }
}

export type AppActions = LoadLists
    | LoadListsSuccess
    | LoadListsError
    | LoadHouseholds
    | LoadHouseholdsError
    | LoadHouseholdsSuccess
    | SelectHousehold;
