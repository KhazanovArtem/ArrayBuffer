import {getBuffer} from './ArrayBuffer'
import ArrayBufferConverter from './ArrayBufferConverter'

console.log(getBuffer());

const converter = new ArrayBufferConverter();
console.log(converter);
converter.load(getBuffer());
console.log(converter.toString());