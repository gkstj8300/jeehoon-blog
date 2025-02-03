/* eslint-disable no-console */
import fs from 'fs';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import chalk from 'chalk';
import flat from 'flat';
import glob from 'glob';
import { get } from 'lodash';
import { resources } from '@/i18n/resources';

const translations: Record<string, string> = flat({
	...resources.ko.translation,
	...resources.en.translation,
});

const foundKeys: Record<string, true> = {};

console.time('Total');
glob('../../src/**/*.{ts,tsx}', (err: Error|null, files: string[]) => {
	files.forEach(filePath => {
		const warnings: string[] = [];
		const errors: string[] = [];
		const content = fs.readFileSync(filePath, { encoding: 'utf-8' });
		const ast = parse(content, {
			sourceType: 'module',
			plugins: ['jsx', 'typescript'],
		});
		traverse(ast, {
			enter(path) {
				let key = '';
				if (
					path.node.type === 'JSXOpeningElement' &&
					path.node.name.type === 'JSXIdentifier' &&
					path.node.name.name === 'Trans'
				) {
					const attribute = path.node.attributes.find(
						attr => attr.type === 'JSXAttribute' && attr.name.name === 'i18nKey'
					);
					if (
						attribute?.type === 'JSXAttribute' &&
						attribute.value?.type === 'StringLiteral'
					) {
						key = attribute.value.value;
						foundKeys[key] = true;

						if (!get(translations, key)) {
							errors.push(`Missing key ${key}`);
						}
					}
				}

				if (
					path.node.type === 'CallExpression' &&
					path.node.callee.type === 'Identifier' &&
					path.node.callee.name === 't'
				) {
					const firstArg = path.node.arguments[0];
					if (firstArg.type === 'StringLiteral') {
						key = firstArg.value;
						foundKeys[key] = true;

						if (!get(translations, key)) {
							errors.push(`Missing key ${key}`);
						}
					}
				}
			},
		});
		if (warnings.length || errors.length) {
			console.log('In', filePath);
			errors.forEach(text => console.log(chalk.red(text)));
			warnings.forEach(text => console.log(chalk.yellow(text)));
		}
	});

	// Find unused i18n keys
	console.log('Finding unused keys...');
	Object.keys(translations).forEach(key => {
		if (!get(foundKeys, key)) {
			console.log(chalk.yellow('Unused key:', key));
		}
	});
	console.timeEnd('Total');
});
