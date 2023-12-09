import {getBuffer} from '../ArrayBuffer'
import ArrayBufferConverter from '../ArrayBufferConverter'

test('check create ArrayBufferConverter', () => {
    const converter = new ArrayBufferConverter();
    expect(converter).toEqual({});
});

test('check method load', () => {
    const converter = new ArrayBufferConverter();
    converter.load(getBuffer());
    expect(converter).toEqual({data: getBuffer()});
});

test('check method to String', () => {
    const converter = new ArrayBufferConverter();
    converter.load(getBuffer());
    const data = converter.toString();
    expect(data).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
