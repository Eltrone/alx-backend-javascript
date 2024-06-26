import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      const [photoRes, userRes] = res;
      console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
      return res;
    })
    .catch(() => {
      console.log('Signup system offline');
      return 'Error';
    });
}
