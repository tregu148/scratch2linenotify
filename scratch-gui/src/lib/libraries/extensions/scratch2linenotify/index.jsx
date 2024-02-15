import React from 'react';
import { FormattedMessage } from 'react-intl';
import scratch2linenotifyIconURL from './scratch2linenotify.png';
import scratch2linenotifyInsetIconURL from './scratch2linenotify-small.png';

const translationMap = {
  'ja': {
    'gui.extension.scratch2linenotify.description': 'ChatGPT からの返答を得る。'
  },
  'ja-Hira': {
    'gui.extension.scratch2linenotify.description': 'ChatGPT からのへんとうをえる。'
  }
};

const entry = {
  name: 'scratch2linenotify',
  extensionId: 'scratch2linenotify',
  extensionURL: 'https://tregu148.github.io/scratch2linenotify.mjs',
  collaborator: 'tregu148,ichiroc',
  iconURL: scratch2linenotifyIconURL,
  insetIconURL: scratch2linenotifyInsetIconURL,
  description: (
    <FormattedMessage
      defaultMessage="scratch2linenotify Blocks."
      description="Description for scratch2linenotify Blocks"
      id="gui.extension.scratch2linenotify.description"
    />
  ),
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: true,
  helpLink: 'https://github.com/tregu148/scratch2linenotify/',
  translationMap: translationMap
}

export { entry }; // loadable-extension needs this line.
export default entry;
