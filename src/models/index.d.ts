import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AccessControlMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocalAnnoucementMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocalNewsCommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocalNewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VolunteerForm2MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocalBoardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FriendsAmongUsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VolunteerFormMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class AccessControl {
  readonly id: string;
  readonly phoneNumber?: string;
  readonly accessLevel?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AccessControl, AccessControlMetaData>);
  static copyOf(source: AccessControl, mutator: (draft: MutableModel<AccessControl, AccessControlMetaData>) => MutableModel<AccessControl, AccessControlMetaData> | void): AccessControl;
}

export declare class LocalAnnoucement {
  readonly id: string;
  readonly date?: string;
  readonly content_full?: string;
  readonly image?: string;
  readonly link?: string;
  readonly title?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LocalAnnoucement, LocalAnnoucementMetaData>);
  static copyOf(source: LocalAnnoucement, mutator: (draft: MutableModel<LocalAnnoucement, LocalAnnoucementMetaData>) => MutableModel<LocalAnnoucement, LocalAnnoucementMetaData> | void): LocalAnnoucement;
}

export declare class LocalNewsComment {
  readonly id: string;
  readonly date?: string;
  readonly user_name?: string;
  readonly user_image?: string;
  readonly content?: string;
  readonly LocalNews?: LocalNews;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LocalNewsComment, LocalNewsCommentMetaData>);
  static copyOf(source: LocalNewsComment, mutator: (draft: MutableModel<LocalNewsComment, LocalNewsCommentMetaData>) => MutableModel<LocalNewsComment, LocalNewsCommentMetaData> | void): LocalNewsComment;
}

export declare class LocalNews {
  readonly id: string;
  readonly title?: string;
  readonly date?: string;
  readonly user_image?: string;
  readonly user_name?: string;
  readonly content?: string;
  readonly content_full?: string;
  readonly topic?: string;
  readonly image?: string;
  readonly image_alt?: string;
  readonly likes?: number;
  readonly dislikes?: number;
  readonly headline?: string;
  readonly theme?: string;
  readonly read_more?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LocalNews, LocalNewsMetaData>);
  static copyOf(source: LocalNews, mutator: (draft: MutableModel<LocalNews, LocalNewsMetaData>) => MutableModel<LocalNews, LocalNewsMetaData> | void): LocalNews;
}

export declare class VolunteerForm2 {
  readonly id: string;
  readonly name?: string;
  readonly nric?: string;
  readonly dateOfBirth?: string;
  readonly gender?: string;
  readonly race?: string;
  readonly maritalStatus?: string;
  readonly nationality?: string;
  readonly countryOfBirth?: string;
  readonly religion?: string;
  readonly commonLanguage?: string;
  readonly dialects?: string;
  readonly highestEducation?: string;
  readonly address?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly typeOfDwelling?: string;
  readonly occupation?: string;
  readonly employerName?: string;
  readonly experience?: string;
  readonly daysFree?: string;
  readonly avatarKey?: string;
  readonly postalCode?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<VolunteerForm2, VolunteerForm2MetaData>);
  static copyOf(source: VolunteerForm2, mutator: (draft: MutableModel<VolunteerForm2, VolunteerForm2MetaData>) => MutableModel<VolunteerForm2, VolunteerForm2MetaData> | void): VolunteerForm2;
}

export declare class LocalBoard {
  readonly id: string;
  readonly category?: string;
  readonly location?: number;
  readonly time?: string;
  readonly date_posted?: string;
  readonly content?: string;
  readonly user_name?: string;
  readonly user_image?: string;
  readonly tip?: number;
  readonly email?: string;
  readonly phone?: string;
  readonly theme?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LocalBoard, LocalBoardMetaData>);
  static copyOf(source: LocalBoard, mutator: (draft: MutableModel<LocalBoard, LocalBoardMetaData>) => MutableModel<LocalBoard, LocalBoardMetaData> | void): LocalBoard;
}

export declare class FriendsAmongUs {
  readonly id: string;
  readonly name?: string;
  readonly interests?: string;
  readonly others?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FriendsAmongUs, FriendsAmongUsMetaData>);
  static copyOf(source: FriendsAmongUs, mutator: (draft: MutableModel<FriendsAmongUs, FriendsAmongUsMetaData>) => MutableModel<FriendsAmongUs, FriendsAmongUsMetaData> | void): FriendsAmongUs;
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
  readonly avatarKey?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<VolunteerForm, VolunteerFormMetaData>);
  static copyOf(source: VolunteerForm, mutator: (draft: MutableModel<VolunteerForm, VolunteerFormMetaData>) => MutableModel<VolunteerForm, VolunteerFormMetaData> | void): VolunteerForm;
}