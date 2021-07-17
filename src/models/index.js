// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FriendsAmongUs, VolunteerForm } = initSchema(schema);

export {
  FriendsAmongUs,
  VolunteerForm
};