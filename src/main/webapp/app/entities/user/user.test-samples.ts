import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 12000,
  login: 'Be42H',
};

export const sampleWithPartialData: IUser = {
  id: 29136,
  login: 'xny@xv\\"On\\3BDaA-\\LJVLB\\YnR9gX\\[j',
};

export const sampleWithFullData: IUser = {
  id: 19746,
  login: '!l?bz@Y\\%Qa\\iAl',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
