import {combineReducers} from 'redux'
import stepsReducer from './steps/steps.reducer'


export default combineReducers({
   steps: stepsReducer,
})