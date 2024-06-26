import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const responses = [];
  try {
    const userSignUpResult = await signUpUser(firstName, lastName);
    responses.push({ status: 'fulfilled', value: userSignUpResult });
    await uploadPhoto(fileName);
  } catch (error) {
    responses.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
  }
  return responses;
}
