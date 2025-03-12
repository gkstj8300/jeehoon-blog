module.exports = {
	customSyntax: 'postcss-scss',
	plugins: [
		'stylelint-order',
		'stylelint-scss',
		'stylelint-rational-order-plugin',
	],
	extends: [
		'stylelint-config-standard',
		'stylelint-config-css-modules',
		'stylelint-config-prettier',
	],
	rules: {
		indentation: 'tab',
		'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'order/order': [
			[
				{
					type: 'at-rule',
				},
				{
					type: 'at-rule',
					hasBlock: true,
				},
				{
					type: 'at-rule',
					name: 'include',
				},
				{
					type: 'at-rule',
					name: 'include',
					hasBlock: true,
				},
				'dollar-variables',
				'custom-properties',
				'declarations',
				'rules',
			],
		],
		'plugin/rational-order': [
			true,
			{
				'border-in-box-model': false,
				'empty-line-between-groups': false,
			},
		],
		'length-zero-no-unit': true,
		'color-named': 'never',
		'color-hex-length': 'short',
		'shorthand-property-no-redundant-values': true,
		'no-invalid-double-slash-comments': true,
		'alpha-value-notation': 'number',
		'function-url-quotes': 'never',
		"value-no-vendor-prefix": null,
	},
};
