#!/usr/bin/env node

import { create } from 'create-create-app';
import { resolve } from 'path';

const templateRoot = resolve(__dirname, '..', 'templates');

const caveat = `
This is a caveat!
You can change this in \`src/cli.ts\`.
`;

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create('create-strawberry', {
  templateRoot,
  extra: {
    doStem: {
      type: 'checkbox',
      describe: 'Create a strawberry-stem project? (beta)',
      prompt: "if-no-arg",
      choices: ["stem"]
    },
    features: {
      type: 'checkbox',
      describe: 'What features should this bot include?',
      prompt: "if-no-arg",
      choices: ["multi-server", "slash-commands", "commands", "database"]
    },
  },
  after: ({ answers }) => console.log(`Ok you chose ${answers.doStem}.`),
  caveat,
});
