import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Footer from "./components/Footer/Footer";

const Html = ({ htmlAttributes, ...props }) => {
	// render the default markup to a string in a SSR friendly way
	const renderedChildren = renderToStaticMarkup(<Root {...props} />);

	// then dangerously set the inner HTML of the root HTML element
	// including our comment first and then the default markup
	return (
		<html
			{...htmlAttributes}
			dangerouslySetInnerHTML={{
				__html: `
<!--
            _,-'/-'/
.      __,-; ,'( '/
 \\.    \`-.__\`-._\`:_,-._       _ , . \` \`
  \`:-._,------' \` _,\`--\` -: \` gifuzzz \` ,' 
   \`---..__,,--'            \` -'. -'  \`

Hello there, if you need it the source code of this website is available at https://github.com/gifuzzz.me
-->
				${renderedChildren}
			`
			}}
		/>
	);
};

// this is the default component html.js that Gatsby uses
const Root = ({
	headComponents,
	bodyAttributes,
	preBodyComponents,
	body,
	postBodyComponents
}) => (
	<>
		<head>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			{headComponents}
		</head>
		<body {...bodyAttributes}>
			{preBodyComponents}
			<div
				key={`body`}
				id="___gatsby"
				dangerouslySetInnerHTML={{ __html: body }}
			/>
			{postBodyComponents}
		</body>
	</>
);

export default Html;