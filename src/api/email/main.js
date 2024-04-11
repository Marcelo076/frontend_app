

import axios from '@/api/axios.js';

export function sendEmail(data) {
    return axios.post('api/email/check', data);
  }
