const defaultRestrictedImportPatterns = ['*../**'];

module.exports = {
	root: true,
	plugins: ['unused-imports', 'sort-keys-fix'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
	],
	settings: {
		'import/resolver': 'webpack',
	},
	rules: {
		'lines-between-class-members': ['error', 'always'],
		// Suppress to conflict to @typescript-eslint/explicit-member-accessibility
		'member-access': 'off',
		'no-console': 'error',
		'no-debugger': 'error',
		'no-dupe-keys': 'error',
		'no-eval': 'error',
		'no-restricted-imports': [
			'error',
			{
				patterns: defaultRestrictedImportPatterns,
			},
		],
		'no-restricted-syntax': ['error', 'TSEnumDeclaration'],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: 'function',
				next: 'function',
			},
			{
				blankLine: 'always',
				prev: 'block-like',
				next: 'block-like',
			},
		],
		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					exceptions: ['-', '='],
				},
				block: {
					balanced: true,
				},
				markers: ['/'],
			},
		],
		'react/display-name': 'off',
		'react-hooks/exhaustive-deps': [
			'warn',
			{
				enableDangerousAutofixThisMayCauseInfiniteLoops: true,
			},
		],
		'import/no-duplicates': ['error'],
		'import/no-namespace': ['error'],
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
				},
				'newlines-between': 'never',
			},
		],
		'unused-imports/no-unused-imports': 'error',
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			rules: {
				'no-any': 'off',
				'no-dupe-class-members': 'off',
				'@typescript-eslint/explicit-member-accessibility': [
					'error',
					{
						accessibility: 'no-public',
					},
				],
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'@typescript-eslint/no-empty-interface': 0,
				'@typescript-eslint/no-explicit-any': 'error',
			},
		},
		{
			files: ['src/i18n/*/resources/*/translation/**/*.ts'],
			rules: {
				'sort-keys-fix/sort-keys-fix': 'error',
			},
		},
		{
			files: ['src/**/*.i18n.*.ts'],
			rules: {
				'no-restricted-imports': [
					'error',
					{
						patterns: defaultRestrictedImportPatterns.concat('@/**/*i18n.*'),
					},
				],
			},
		},
		{
			files: ['src/i18n/*/resources/*/translation/index.ts'],
			rules: {
				'no-restricted-imports': [
					'error',
					{
						patterns: ['@/**/*i18n.*'],
					},
				],
			},
		},
	],
};
