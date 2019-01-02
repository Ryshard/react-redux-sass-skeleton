import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'containers/home';

const routes = (
	<div>
		<Route exact path="/" component={Home} />
		<Route exact path="/my-repos" component={Home} />
		<Route exact path="/my-repos/index.html" component={Home} />
	</div>
);

export default routes;
