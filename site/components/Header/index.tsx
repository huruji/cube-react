import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.styl';

const PureComponent = React.PureComponent;

export default class Header extends PureComponent {
	render() {
		return (
			<header>
				<div className="header-container">
					<nav>
						<ul>
							<li>
								<Link to="/">首页</Link>
							</li>
							<li>
								<Link to="/document/start">文档</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}