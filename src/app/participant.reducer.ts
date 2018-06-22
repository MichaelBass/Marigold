
import { Reducer, Action } from 'redux';
import { AppState } from './app.state';
import { Participant } from './participant';

import {
  CREATE_PARTICIPANT,
  CLEAR_STATE,
  SetCurrentParticipantAction
} from './participant.actions';

const initialState: AppState = { participant: {record_id: '',redcap_event_name: '', user_id:'', email:'', password:'',enrollment_date:'',study_arm:'',registration_complete:''} };

// Create our reducer that will handle changes to the state
export const participantReducer: Reducer<AppState> =
  (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {

    case CREATE_PARTICIPANT:
      const currentParticipant: Participant = (<SetCurrentParticipantAction>action).participant;
      return {participant: currentParticipant};

    case CLEAR_STATE:
      return initialState;

    default:
      return state;
    }
  };