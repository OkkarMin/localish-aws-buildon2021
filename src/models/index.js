// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { VolunteerForm2, LocalBoard, FriendsAmongUs, VolunteerForm } = initSchema(schema);

export {
  VolunteerForm2,
  LocalBoard,
  FriendsAmongUs,
  VolunteerForm
};