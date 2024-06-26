import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const res = [];
  try {
    const user = await signUpUser(firstName, lastName);
    res.push({ status: 'fulfilled', value: user });
  } catch (err) {
    res.push({
      status: 'rejected',
      value: `Error: ${err.message}`,
    });
  }

  try {
    await uploadPhoto(fileName);
    res.push({ status: 'fulfilled', value: `${fileName} processed successfully` });
  } catch (err) {
    res.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
  }
  
  return res;
}
