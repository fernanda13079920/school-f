import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'c3508000-fb17-470c-a4ba-000a793dd860',
};

export const sampleWithPartialData: IAuthority = {
  name: 'be757618-ed43-4a80-be70-620fd31670db',
};

export const sampleWithFullData: IAuthority = {
  name: '5b915ee1-5fe1-478c-bfe8-c07e9edeeb30',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
