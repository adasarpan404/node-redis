import { strict as assert } from 'assert';
import { itWithClient } from '../test-utils.js';
import { transformArguments } from './DEL.js';

describe('DEL', () => {
    describe('transformArguments', () => {
        it('multiple keys', () => {
            assert.deepEqual(
                transformArguments('key1', 'key2'),
                ['DEL', 'key1', 'key2']
            );
        });
    });

    itWithClient('client.del', {}, async client => {
        assert.equal(
            await client.del('key1', 'key2'),
            0
        );
    });
});
