import { spawnSync } from 'node:child_process';
import { expect, test } from 'vitest';

// These tests exercise the built CLI end-to-end; `npm test` builds first.
function runCli(...args: string[]) {
    const result = spawnSync(process.execPath, ['dist/cli.js', ...args], {
        encoding: 'utf8',
    });
    return { status: result.status, output: result.stdout };
}

test('generates the password for a single date with the default seed', () => {
    const { status, output } = runCli('2016-10-19');
    expect(status).toBe(0);
    expect(output).toContain('RZ631QL7H4');
    expect(output).toContain('October 19, 2016');
});

test('generates passwords for a date range with a custom seed', () => {
    const { status, output } = runCli(
        '2016-10-19',
        '2016-10-21',
        '--seed=ABCDEFGHIJ',
    );
    expect(status).toBe(0);
    expect(output).toContain('ZJC551QLMO');
    expect(output).toContain('BZLLEEPPKS');
    expect(output).toContain('0H0WEOI4WQ');
});

test('generates a password for today when no date is given', () => {
    const { status, output } = runCli();
    expect(status).toBe(0);
    // A password is 10 characters from the 0-9A-Z alphabet.
    expect(output).toMatch(/'[0-9A-Z]{10}'/);
});

test('rejects an unrecognized argument', () => {
    const { status, output } = runCli('not-a-date');
    expect(status).toBe(1);
    expect(output).toContain('Unrecognized argument');
});

test('rejects a seed with invalid length', () => {
    const { status, output } = runCli('2016-10-19', '--seed=short');
    expect(status).toBe(1);
    expect(output).toContain('Seed is too short');
});

test('--help prints usage once and exits successfully', () => {
    const { status, output } = runCli('--help');
    expect(status).toBe(0);
    expect(output.match(/Usage:/g)).toHaveLength(1);
    expect(output).not.toContain('Unrecognized argument');
});

test('explains when the dates are out of order', () => {
    const { output } = runCli('2016-10-21', '2016-10-19');
    expect(output).toContain('out of order');
});
