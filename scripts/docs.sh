#!/bin/bash
set -euo pipefail


## --- Base --- ##
# Getting path of this script file:
_SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
_PROJECT_DIR="$(cd "${_SCRIPT_DIR}/.." >/dev/null 2>&1 && pwd)"
cd "${_PROJECT_DIR}" || exit 2


# Loading .env file (if exists):
if [ -f ".env" ]; then
	# shellcheck disable=SC1091
	source .env
fi


if [ -z "$(which mkdocs)" ]; then
	echo "[ERROR]: 'mkdocs' not found or not installed!"
	exit 1
fi

# if [ -z "$(which mike)" ]; then
# 	echo "[ERROR]: 'mike' not found or not installed!"
# 	exit 1
# fi
## --- Base --- ##


## --- Main --- ##
echo "[INFO]: Starting documentation server..."
#shellcheck disable=SC2086
mkdocs serve -a 0.0.0.0:${DOCS_PORT:-8000}
# mike serve -a 0.0.0.0:${DOCS_PORT:-8000}
echo "[OK]: Done."
## --- Main --- ##
