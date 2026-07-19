# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.0.0] - 2026-07-16

### Breaking

- Node.js >= 24.18.0 (current LTS) is now required.

### Fixed

- `--help` now prints usage once and exits 0. Previously it printed usage,
  fell through to argument parsing, complained about an unrecognized
  argument, printed usage again and exited 1.

### Changed

- `@borfast/arrispwgen` updated to 6.x (same API, modernized internals).
- Complete toolchain modernization matching the library: TypeScript 7 with
  plain `tsc`, Biome for lint/format, Vitest with end-to-end CLI tests
  (the first tests this package has had), GitHub Actions CI, npm trusted
  publishing (OIDC) with provenance on version tag pushes.
- Removed leftover Babel and Travis configuration.

## [5.0.2] and earlier

See the git history.
