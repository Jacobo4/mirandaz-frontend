// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const API = ' https://api.bit.io/v2beta/db/MateoG404/Ingesoft/query';

const endPoints = {
   server: {
      health_check: `https://qv-api.herokuapp.com/api/v1/health-check`,
   },
   users: {
      create: `${API}, CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY (id))`,
      get: (userId) => `${API}, SELECT * FROM users WHERE id = ${userId}`,
      update: (userId) => `${API}, UPDATE users SET name = 'Mateo', email = '`,
      delete: (userId) => `${API}, DELETE FROM users WHERE id = ${userId}`,
      all: {
         get: `${API}, SELECT * FROM users`,
      },
      me: {
         read: `${API}, SELECT * FROM users WHERE id = 1`,
         update: `${API}, UPDATE users WHERE id = 1 SET name = 'Mateo', email = ''`,
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
