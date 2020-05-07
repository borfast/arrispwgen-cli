#!/usr/bin/env node
// TODO: Allow setting the default seed for future use. Use this: https://www.npmjs.com/package/preferences
import * as arrispwgen from '@borfast/arrispwgen';

function printUsageAndExit(exitCode?: number) {
    console.log(`\nUsage: ${process.argv0} start_date [end_date] [--seed=custom_seed]\n`);
    console.log('If you only want the password for one specific date, specify only "start_date".');
    console.log('If "end_date" is also passed, a password for each day between "start_date" and "end_date" will be generated.');
    console.log('The --seed parameter allows you to use a custom seed for the password generator. A seed must be 8 to 10 characters long.');
    console.log('The dates should be specified in ISO 8601 format, i.e. "YYYY-MM-DD". Example for Christmas day 2016: "2016-12-25".');

    if (exitCode) {
        process.exit(exitCode);
    }
}

const args = process.argv.slice(2);

if (args.indexOf('--help') > -1 || args.indexOf('-h') > -1) {
    printUsageAndExit(0);
}
if (args.length > 3) {
    console.log('Too many arguments.\n');
    printUsageAndExit(1);
}

const dates: Date[] = [];
let seed = arrispwgen.DEFAULT_SEED;
const dateRegex = /\d{4}-\d{2}-\d{2}/;
args.forEach((arg: string) => {
    if (arg.match(dateRegex)) {
        dates.push(new Date(arg));
    } else if (arg.indexOf('--seed=') == 0) {
        const s = arg.split('=')[1];
        if (s.length >= 8 && s.length <= 10) {
            seed = arg.split('=')[1];
        } else {
            const problem = s.length < 8 ? 'short' : s.length > 10 ? 'long' : ' unrecognized';
            console.log(`Seed is too ${problem}: ${s}.\nIt's ${s.length} characters but it must be between 8 and 10.`);
            printUsageAndExit(1);
        }
    } else {
        console.log(`Unrecognized argument: ${arg}.`);
        printUsageAndExit(1);
    }
});


const date_format_options = { weekday: 'short', year: 'numeric', month: 'long', day: '2-digit' };
const date_formatter = new Intl.DateTimeFormat('default', date_format_options);

let data = [];

// If no date is given, default to outputting the password for the current date.
if (dates.length === 0) {
    dates.push(new Date());
}

if (dates.length === 1) {
    const long_date = date_formatter.format(dates[0]);
    const potd = arrispwgen.generate(dates[0], seed);
    data.push({
        date: long_date,
        password: potd
    });
} else {
    const start_date = dates[0];
    const end_date = dates[1];
    try {
        const potd = arrispwgen.generate_multi(start_date, end_date, seed);

        for (const p of potd) {
            data.push({
                date: date_formatter.format(p['date']),
                password: p['password']
            });
        }
    } catch (e) {
        if (e instanceof arrispwgen.InvalidDateRangeError) {
            console.log('The given dates are out of order. Your start date is after the end date.');
            printUsageAndExit();
        } else {
            console.log(`Unknown error occurred: ${e.message}`);
        }
    }
}

console.log();
console.table(data, ['date', 'password']);
