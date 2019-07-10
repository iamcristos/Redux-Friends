import axois from 'axios';

export default function () {
  const token = localStorage.getItem('userToken');
  debugger
  return axois.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  });
}
