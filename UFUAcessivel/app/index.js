import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import AppNavigator from './config/routes';

EStyleSheet.build({
  $white: '#FFFFFF',
  $darkText: '#343434',
  $border: '#949494',
});

export default () => <AppNavigator />;
