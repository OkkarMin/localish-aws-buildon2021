import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type VolunteerFormMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class VolunteerForm {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly address?: string;
  readonly phone?: string;
  readonly daysFree?: string;
  readonly commonLanguage?: string;
  readonly dialects?: string;
  readonly experience?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<VolunteerForm, VolunteerFormMetaData>);
  static copyOf(source: VolunteerForm, mutator: (draft: MutableModel<VolunteerForm, VolunteerFormMetaData>) => MutableModel<VolunteerForm, VolunteerFormMetaData> | void): VolunteerForm;
}