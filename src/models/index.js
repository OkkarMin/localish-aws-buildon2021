// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AccessControl, LocalAnnoucement, LocalNewsComment, LocalNews, VolunteerForm2, LocalBoard, FriendsAmongUs, VolunteerForm } = initSchema(schema);

export {
  AccessControl,
  LocalAnnoucement,
  LocalNewsComment,
  LocalNews,
  VolunteerForm2,
  LocalBoard,
  FriendsAmongUs,
  VolunteerForm
};