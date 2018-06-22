import {
  Action,
  ActionCreator
} from 'redux';

import { Participant } from './participant';

export interface SetCurrentParticipantAction extends Action {
  participant: Participant;
}

export const CREATE_PARTICIPANT: string = 'CREATE_PARTICIPANT';
export const create_participant: ActionCreator<SetCurrentParticipantAction>  = (currentParticipant) => ({
  type: CREATE_PARTICIPANT,
  participant: currentParticipant
});

export const CLEAR_STATE: string = 'CLEAR_STATE';
export const clear_state: ActionCreator<SetCurrentParticipantAction>  = (currentParticipant) => ({
  type: CLEAR_STATE,
  participant: currentParticipant
});