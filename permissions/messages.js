var Joi = require('joi');

var validation =  Joi.object().keys({
  create: Joi.object().keys({
    allow: Joi.boolean()
  }),
  delete: Joi.object().keys({
    allow: Joi.boolean(),
    bypass: Joi.object().keys({
      owner: Joi.boolean()
    })
  }),
  latest: Joi.object().keys({
    allow: Joi.boolean()
  }),
  findUser: Joi.object().keys({
    allow: Joi.boolean()
  })
});

var superAdministrator = {
  create: { allow: true },
  delete: {
    allow: true,
    bypass: { owner: true }
  },
  latest: { allow: true },
  findUser: { allow: true }
};

var administrator = {
  create: { allow: true },
  delete: {
    allow: true,
    bypass: { owner: true }
  },
  latest: { allow: true },
  findUser: { allow: true }
};

var globalModerator = {
  create: { allow: true },
  delete: {
    allow: true,
    bypass: { owner: true }
  },
  latest: { allow: true },
  findUser: { allow: true }
};

var moderator = {
  create: { allow: true },
  delete: {
    allow: true,
    bypass: { owner: true }
  },
  latest: { allow: true },
  findUser: { allow: true }
};

var user = {
  create: { allow: true },
  delete: { allow: true },
  latest: { allow: true },
  findUser: { allow: true }
};

var banned = {
  create: { allow: true },
  latest: { allow: true },
  findUser: { allow: true }
};

var layout = {
  create: { title: 'Create Messages' },
  delete: {
    title: 'Delete Single Message',
    bypasses: [ { description: 'Ignore Message Ownership', control: 'owner', type: 'boolean' } ]
  },
  latest: { title: 'View Messages' },
  findUser: { title: 'Search for users to Message' }
};

module.exports = {
  validation: validation,
  layout: layout,
  defaults: {
    superAdministrator: superAdministrator,
    administrator: administrator,
    globalModerator: globalModerator,
    moderator: moderator,
    user: user,
    banned: banned,
    anonymous: {},
    private: {}
  }
};
