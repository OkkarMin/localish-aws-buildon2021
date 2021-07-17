import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





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
  constructor(init: ModelInit<LocalBoard>);
  static copyOf(source: LocalBoard, mutator: (draft: MutableModel<LocalBoard>) => MutableModel<LocalBoard> | void): LocalBoard;
}

export declare class FriendsAmongUs {
  readonly id: string;
  readonly name?: string;
  readonly interests?: string;
  readonly others?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FriendsAmongUs>);
  static copyOf(source: FriendsAmongUs, mutator: (draft: MutableModel<FriendsAmongUs>) => MutableModel<FriendsAmongUs> | void): FriendsAmongUs;
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
  constructor(init: ModelInit<VolunteerForm>);
  static copyOf(source: VolunteerForm, mutator: (draft: MutableModel<VolunteerForm>) => MutableModel<VolunteerForm> | void): VolunteerForm;
}