/**
 * development.entry.js
 *
 * 	This is the webpack development entry file. It's only used in the dev env
 * 	so we can independently code/build/test with all required dependencies.
 *
 * 	@NOTE all bootstrap assets are included here via 'bootstrap-webpack'
 */

import React from 'react';
import { render } from 'react-dom';
import Container from './Container';

import Main from './main';

require('bootstrap-webpack');

render(<Container />, document.getElementById('root'));
