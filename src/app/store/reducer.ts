import {createReducer, on} from '@ngrx/store';
import { initialState } from '../store/state';
import {EMP_DATA, VIEW_DATA} from '../store/action'

export const _countReducer = createReducer(initialState,
    on(EMP_DATA, (state)=>{
        return{
        ...state,
        loading: state.data,
        }
    }),
    on(EMP_DATA, (state)=>{
          
    })
);
