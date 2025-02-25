/**
 * MarkDown의 content 포멧
 * @param content
 * @returns string
 */
export const markDownContentFormat = (content: string) => {
    return content.replace(/\\n/g, '\n').replace(/\\`/g, '`').replace(/\n\s*\n/g, '\n\n<br>\n\n');
};