import { Source } from 'callbag';

declare const filter: <I>(condition: (d: I) => boolean) => (source: Source<I>) => Source<I>;
export default filter;
