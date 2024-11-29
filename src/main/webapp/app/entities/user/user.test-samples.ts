import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 9076,
  login: 'G@yADoEB',
};

export const sampleWithPartialData: IUser = {
  id: 9223,
  login: '0paDP',
};

export const sampleWithFullData: IUser = {
  id: 22111,
  login: '3X',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
