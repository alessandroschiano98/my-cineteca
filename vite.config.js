import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs/promises';
const path = new URL('./src/data/catalog.json', import.meta.url);
const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
export default defineConfig({cacheDir:'.vite',server:{host:'127.0.0.1'},plugins:[react(),{name:'local-editor',configureServer(server){server.middlewares.use('/api/catalog',async(req,res)=>{
res.setHeader('Content-Type','application/json');res.setHeader('Cache-Control','no-store');
if(req.headers.origin && req.headers.origin !== `http://${req.headers.host}`){res.statusCode=403;return res.end('{}');}
if(req.method==='GET')return res.end(await fs.readFile(path,'utf8'));
if(req.method!=='POST'){res.statusCode=405;return res.end('{}');}
try{if(!req.headers['content-type']?.startsWith('application/json'))throw Error('Formato non valido');let body='';for await(const chunk of req){body+=chunk;if(body.length>20000)throw Error('Dati troppo grandi');}const m=JSON.parse(body);m.title=String(m.title||'').trim();m.year=Number(m.year);m.director=String(m.director||'').trim();
if(!m.title||m.title.length>200||!Number.isInteger(m.year)||m.year<1888||m.year>new Date().getFullYear()+2||!m.director||!Array.isArray(m.genres)||!m.genres.length||m.genres.some(g=>typeof g!=='string'||g.length>60))throw Error('Controlla titolo, anno, regista e genere.');
const all=JSON.parse(await fs.readFile(path,'utf8'));if(all.some(f=>normalize(f.title)===normalize(m.title)&&f.year===m.year)){res.statusCode=409;return res.end(JSON.stringify({error:'Film già presente.'}));}
const poster=String(m.poster||'').trim();if(poster&&!/^https?:\/\//i.test(poster))throw Error('Usa un link http o https per la locandina.');
const synopsis=String(m.synopsis||'').trim();if(synopsis.length>1200)throw Error('La trama deve essere al massimo di 1200 caratteri.');
const voiceActors=Array.isArray(m.voiceActors)?m.voiceActors.map(String).map(s=>s.trim()).filter(Boolean):[];if(voiceActors.some(name=>!m.actors?.some(actor=>normalize(actor)===normalize(name))))throw Error('Inserisci tra i doppiatori solo nomi presenti nel cast.');
const movie={id:normalize(m.title)+'-'+m.year,title:m.title,year:m.year,director:m.director,genres:[...new Set(m.genres)],poster,synopsis,voiceActors,actors:Array.isArray(m.actors)?m.actors.map(String).slice(0,30):[],addedAt:new Date().toISOString()};all.push(movie);await fs.writeFile(path,JSON.stringify(all,null,2)+'\n');res.statusCode=201;res.end(JSON.stringify(movie));}catch(e){res.statusCode=400;res.end(JSON.stringify({error:e.message}));}
});}}]});
