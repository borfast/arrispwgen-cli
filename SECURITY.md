# Security Policy

## Supported Versions

Only the latest published version of `@borfast/arrispwgen-cli` is supported
with security updates.

## Reporting a Vulnerability

Please report vulnerabilities privately via GitHub's
[private vulnerability reporting](https://github.com/borfast/arrispwgen-cli/security/advisories/new)
for this repository. Do not open a public issue for security problems.

## Scope note

This CLI is a thin wrapper around the
[@borfast/arrispwgen](https://github.com/borfast/arrispwgen) library, which
intentionally implements the publicly documented Arris "password of the day"
algorithm. The weakness of that algorithm is the reason these projects exist
and is not a vulnerability. Reports should concern the code, its
dependencies, or the release pipeline — not the vendor algorithm itself.
