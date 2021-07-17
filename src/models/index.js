// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LocalBoard, FriendsAmongUs, VolunteerForm } = initSchema(schema);

export {
  LocalBoard,
  FriendsAmongUs,
  VolunteerForm
};