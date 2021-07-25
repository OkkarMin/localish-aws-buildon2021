// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LocalAnnoucement, LocalNewsComment, LocalNews, VolunteerForm2, LocalBoard, FriendsAmongUs, VolunteerForm } = initSchema(schema);

export {
  LocalAnnoucement,
  LocalNewsComment,
  LocalNews,
  VolunteerForm2,
  LocalBoard,
  FriendsAmongUs,
  VolunteerForm
};