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

DATE                      | PASSWORD
Friday, December 9th 2016 | 64Y3MV3L7G
```

To get the password for a given day, pass `arrispwgen` the date for which you want the password. For example:

``` bash
$ arrispwgen 2016-12-08

DATE                        | PASSWORD
Thursday, December 8th 2016 | 1R3IG4R4RH
```

In case you need to use a custom seed you can pass the `--seed` or `-s` argument:

``` bash
$ arrispwgen 2016-12-08 --seed ABCDEFGHIJ

DATE                        | PASSWORD
Thursday, December 8th 2016 | 9KEWMO5JKE
```

You can also get the passwords for a range of days by passing a start date and an end date:

``` bash
$ arrispwgen 2016-12-08 2016-12-13

DATE                         | PASSWORD
Thursday, December 8th 2016  | 1R3IG4R4RH
Friday, December 9th 2016    | 64Y3MV3L7G
Saturday, December 10th 2016 | KMAR88TPKY
Sunday, December 11th 2016   | ZOU3M83Z9E
Monday, December 12th 2016   | WIVIK4INFD
Tuesday, December 13th 2016  | G6TBPWYH6J
```
