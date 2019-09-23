'use strict';

import axios from 'axios';

const image = document.querySelector('#fileupload');
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/screeeen/upload';
const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_PRESET;

image.addEventListener('change', (e) => {
  const file = e.target.files[0];
  console.log(file);

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData,
  }).then(function (res) {
    console.log(res);
  }).catch(function (err) {
    console.log('errorororo', err);
  });
});