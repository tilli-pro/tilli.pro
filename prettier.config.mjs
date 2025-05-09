/**
 * @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions}
 */
const config = {
	// Formatting rules
	trailingComma: 'es5',
	singleQuote: false,
	printWidth: 80,
	arrowParens: 'always',
	useTabs: false,
	tabWidth: 2,
	semi: true,
	bracketSameLine: false,
	endOfLine: 'lf',

	// Plugins and import sorting
	plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
	importOrder: [
		'^react$', // React imports
		'<THIRD_PARTY_MODULES>', // Third-party modules
		// "@tilli-pro/(.*)$",      // Package imports
		'^~/.*$', // Absolute imports
		'^[./]', // Relative imports
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderGroupNamespaceSpecifiers: true,
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators'],
};

export default config;
