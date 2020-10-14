import fs from 'fs';
import grayMatter from 'gray-matter';
import remark from 'remark';
import remarkHtml from 'remark-html';

export async function parseMarkdown(code) {
    const processedCode = await remark().use(remarkHtml).process(code);
    return processedCode.toString();

}

export function loadMarkdownData(filePath) {
    const data = grayMatter(fs.readFileSync(filePath, 'utf8'));
    return data;
}
