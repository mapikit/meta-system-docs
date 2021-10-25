---
sidebar_position: 5
---


# Meta-System CLI
> This Page is under construction

Meta-System has a pretty simple CLI to use, and here we will list all that it supports.

To begin with, there are no other commands than just "run".

## The Arguments
Whenever you use the `meta-system` command, the next argument is the path for the configuration file you are trying to run:

`meta-system <file-to-path>`

## The Flags and Options
### Version
Firstly, `-v` shows you the version you are running of Meta-System.

### Prop Validation Bypass
Next, we also have a validation bypass flag `--skip-prop-validation`. This skips the types and arguments validation of the functions inside your BOps. Such validation is still in beta, but in the future, using this flag will show an "unsafe" warning.

### Watch JSON file (Dev mode) 
It is possible to make Meta-System watch for file changes in your configuration files and restart upon changes. To do so, just add the `-dev` flag.
