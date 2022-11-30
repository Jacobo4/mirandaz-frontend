// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const API = ' https://api.bit.io/v2beta/db/MateoG404/Ingesoft';

const endPoints = {
   server: {
      health_check: `https://qv-api.herokuapp.com/api/v1/health-check`,
   },
   users: {
      create: `${API}/users/`,
      get: (userId) => `${API}/users/${userId}`,
      update: (userId) => `${API}/users/${userId}`,
      delete: (userId) => `${API}/users/${userId}`,
      all: {
         get: `https://qv-api.herokuapp.com/api/v1/users/all/`,
      },
      me: {
         read: `${API}/users/me`,
         update: `${API}/users/me`,
      },
   },
   courses: {
      create: `${API}/courses`,
      get: (courseId) => `${API}/courses/${courseId}`,
      update: (courseId) => `${API}/courses/${courseId}`,
      delete: (courseId) => `${API}/courses/${courseId}`,
      getCourseMembers: (courseId) =>
         `${API}/courses/${courseId}/members`,
      all: `${API}/courses/all`,
      me: {
         read: `${API}/courses/me`,
      },
   },
   teams: {
      create: (courseId) => `${API}/courses/${courseId}/teams`,
      get: (courseId, teamId) =>
         `${API}/courses/${courseId}/teams/${teamId}`,
      update: (courseId, teamId) =>
         `${API}/courses/${courseId}/teams/${teamId}`,
      delete: (courseId, teamId) =>
         `${API}/courses/${courseId}/teams/${teamId}`,
      all: (courseId) => `${API}/courses/${courseId}/teams/all`,
      me: {
         all: (courseId) =>
            `${API}/courses/${courseId}/teams/me/all`,
      },
   },
};

export default endPoints;
