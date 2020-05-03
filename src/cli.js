#!/usr/bin/env node
// TODO: Allow setting the default seed for future use. Use this: https://www.npmjs.com/package/preferences
import chalk from 'chalk';
import columnify from 'columnify';
import minimist from 'minimist';

import * as arrispwgen from '@borfast/arrispwgen';


const options = {
    string: ['seed', 's'],
    alias: {s: 'seed', h: 'help'},
    default: {seed: arrispwgen.DEFAULT_SEED}
};

const argv = minimist(process.argv.slice(2), options);

const dates = argv['_'];
const seed = argv['seed'];

function print_usage() {
    console.log(chalk.yellow('\nUsage: ' + process.argv[0] + ' start_date [end_date] [--seed|-s custom_seed]\n'));
    console.log('If you only want the password for a specific date, specify only \'start_date\'.');
    console.log('If \'end_date\' is also passed, a password for each day between \'start_date\' and \'end_date\' will be generated.');
    console.log('The --seed or -s parameter allows you to use a custom seed for the password generator.');
    console.log('The dates should be specified in ISO 8601 format, i.e. "YYYY-MM-DD". Example for Christmas day 2016: "2016-12-25".');
}

if (argv.hasOwnProperty('help')) {
    print_usage();
    process.exit();
}

if (dates.length > 2) {
    console.log(chalk.red('Can only process one or two dates at once.'));
    print_usage();
    process.exit(1);
}

const date_format_options = { weekday: 'short', year: 'numeric', month: 'long', day: '2-digit' };
const date_formatter = new Intl.DateTimeFormat('default', date_format_options);

let data = [];

// If no date is given, default to outputting the password for the current date.
if (dates.length === 0) {
    dates.push(new Date());
}

if (dates.length === 1) {
    const date = new Date(Date.parse(dates[0]));
    const long_date = date_formatter.format(date);
    const potd = arrispwgen.generate(date, seed);
    data.push({
        date: long_date,
        password: potd
    });
} else {
    const start_date = new Date(Date.parse(dates[0]));
    const end_date = new Date(Date.parse(dates[1]));
    try {
        const potd = arrispwgen.generate_multi(start_date, end_date, seed);

        console.log(potd);
        for (const p of potd) {
            console.log(p);
            data.push({
                date: date_formatter.format(p['date']),
                password: p['password']
            });
        }
    } catch (e) {
        // TODO: Be more specific in the exception that we're catching.
        console.log(chalk.red('The given dates are out of order.'));
        print_usage();
    }
}

console.log();
console.log(columnify(data, {
    columnSplitter: ' | '
}));
