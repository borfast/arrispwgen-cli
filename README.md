# Arris Password of the Day Generator - Command Line Interface

-----------------------------------

**PLEASE READ THIS!**

1 - In the past few years, some internet service providers have been changing their modem configurations in ways that prevent this tool from working. If it doesn't work with your modem and your modem is in the supported modems list, I'm afraid there's nothing I can do about it.

2 - I am not Spanish or from Latin America. Please don't assume I can speak Spanish or that I have to reply to you in Spanish.

-----------------------------------

[![NPM Version](https://img.shields.io/npm/v/@borfast/arrispwgen-cli.svg?style=flat)](https://npmjs.org/package/@borfast/arrispwgen-cli)
![License](https://img.shields.io/github/license/borfast/arrispwgen-cli)
[![Build Status](https://travis-ci.org/borfast/arrispwgen-cli.svg?branch=master)](https://travis-ci.org/borfast/arrispwgen-cli)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/borfast/arrispwgen-cli/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/borfast/arrispwgen-cli/?branch=master)
[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B61NQ8A)

Do you need an Arris modem password? Are you stuck with your Arris modem, in a message that says "in order to access advanced features you must enter the password of the day"? Then you came to the right place!

## Description

This is the _Command Line Interface_ for the [Arris password of the day generator](https://arrispwgen.borfast.com) for various Arris cable modems.

If you just want to generate passwords, your easiest option is probably the [online generator](https://arrispwgen.borfast.com). You may also be interested in the [Android app](https://play.google.com/store/apps/details?id=com.grounduphq.arrispwgen) (which is also [open source](https://github.com/borfast/arrispwgen-android)) or, if you're a developer, perhaps you're looking for the [library](https://github.com/borfast/arrispwgen-cli) instead.

For a list of supported modems, troubleshooting options and more information, please visit the [help page](https://arrispwgen.borfast.com/help).


## How to use

Install the arrispwgen package with npm:

`npm install -g arrispwgen-cli`

If you want the password for the current day, just call `arrispwgen` with no arguments:

``` bash
$ arrispwgen

┌─────────┬──────────────────────────┬──────────────┐
│ (index) │           date           │   password   │
├─────────┼──────────────────────────┼──────────────┤
│    0    │ 'Fri, December 09, 2016' │ '64Y3MV3L7G' │
└─────────┴──────────────────────────┴──────────────┘
```

To get the password for a given day, pass `arrispwgen` the date for which you want the password. For example:

``` bash
$ arrispwgen 2016-12-08

┌─────────┬──────────────────────────┬──────────────┐
│ (index) │           date           │   password   │
├─────────┼──────────────────────────┼──────────────┤
│    0    │ 'Thu, December 08, 2016' │ '1R3IG4R4RH' │
└─────────┴──────────────────────────┴──────────────┘
```

In case you need to use a custom seed you can pass the `--seed` argument. The format must be `--seed=SEED`. For example:

``` bash
$ arrispwgen 2016-12-08 --seed=ABCDEFGHIJ

┌─────────┬──────────────────────────┬──────────────┐
│ (index) │           date           │   password   │
├─────────┼──────────────────────────┼──────────────┤
│    0    │ 'Thu, December 08, 2016' │ '9KEWMO5JKE' │
└─────────┴──────────────────────────┴──────────────┘
```

You can also get the passwords for a range of days by passing a start date and an end date, in that order (i.e. the start date argument must come before the end date argument):

``` bash
$ arrispwgen 2016-12-08 2016-12-13

┌─────────┬──────────────────────────┬──────────────┐
│ (index) │           date           │   password   │
├─────────┼──────────────────────────┼──────────────┤
│    0    │ 'Thu, December 08, 2016' │ '1R3IG4R4RH' │
│    1    │ 'Fri, December 09, 2016' │ '64Y3MV3L7G' │
│    2    │ 'Sat, December 10, 2016' │ 'KMAR88TPKY' │
│    3    │ 'Sun, December 11, 2016' │ 'ZOU3M83Z9E' │
│    4    │ 'Mon, December 12, 2016' │ 'WIVIK4INFD' │
│    5    │ 'Tue, December 13, 2016' │ 'G6TBPWYH6J' │
└─────────┴──────────────────────────┴──────────────┘
```
