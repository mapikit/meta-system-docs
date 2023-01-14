---
sidebar_position: 5
---


# Meta-System CLI
Meta-System has a pretty simple CLI to use, and here we will list all that it supports.
You can get an overview of the CLI by simply running `meta-system` with no commands.
## Commands
As of version V0.3 Mercury, there's just two commands, `run` and `test-bop`.

### run
This is the main command for using MSYS. it uses the specified configuration to configure your system, validate it, and subsequently run it.
- Example: `meta-system run ./path-to/configuration.json`
- Syntax: `meta-system run [options] <path-to-configuration>`

Type `meta-system help run` to get more information on the options you can pass to this command.

### test-bop
Use this function to test how a BOp of yours is responding without needing to spin up all your system and protocols. When using this command, after your configuration is validated, you will be prompted for the required inputs of your Business Operation.

- Example: `meta-system test-bop ./path-to/configuration.json bopName`
- Syntax: `meta-system test-bop <config> <bop>`

There are no options for this command.