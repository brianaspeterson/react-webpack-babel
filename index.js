'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var HelloComponent = React.createClass({
	render: function(){
			return (
				<div>
					hello
				</div>
			);
		}
	});

ReactDOM.render(<HelloComponent/>, document.getElementById('content'));