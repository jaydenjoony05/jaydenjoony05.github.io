import {readFileSync,readdirSync,existsSync,statSync} from 'node:fs';
import {resolve,dirname,join} from 'node:path';
const root=resolve('dist'); const errors=[];
function files(dir){return readdirSync(dir).flatMap(n=>{const p=join(dir,n);return statSync(p).isDirectory()?files(p):[p]});}
const pages=files(root).filter(p=>p.endsWith('.html'));
for(const file of pages){const html=readFileSync(file,'utf8');const label=file.slice(root.length);
 if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)errors.push(`${label}: expected one h1`);
 if(!/<meta name="description" content="[^"]+"/.test(html))errors.push(`${label}: missing description`);
 for(const match of html.matchAll(/(?:href|src)="([^"#?]+)(?:[?#][^"]*)?"/g)){let u=match[1];if(/^(https?:|mailto:|data:)/.test(u))continue;let p=u.startsWith('/')?join(root,u):resolve(dirname(file),u);if(u.endsWith('/'))p=join(p,'index.html');if(!existsSync(p))errors.push(`${label}: missing ${u}`);}
 for(const match of html.matchAll(/<img\b[^>]*>/g)){if(!/alt="/.test(match[0]))errors.push(`${label}: image missing alt`);}
}
const projects=JSON.parse(readFileSync('src/data/projects.json'));const social=JSON.parse(readFileSync('src/data/playground.json'));
if(projects.length!==20||social.reduce((n,g)=>n+g.images.length,0)!==21)errors.push('Source collection coverage changed: review intentional additions/removals');
if(existsSync('public/CNAME'))errors.push('Domain connection must remain unconfigured until approved');
if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log(`PASS: ${pages.length} HTML pages, internal file links, metadata, alt attributes, 20 projects and 21 social graphics.`);
