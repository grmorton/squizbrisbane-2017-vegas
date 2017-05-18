# brisvegas

Status: In Development

Static design templates for [brisvegas].

## Getting Started

If you have just checked out this repository, you will need to run some commands to get up and running.

First, navigate to the root folder of this project on your local drive:

```bash
cd /local/path/to/brisvegas
```

Install Node modules:

```bash
npm install
```

Install Bower modules:

```bash
bower install
```

Run Gulp to compile dist files:

```bash
gulp
```

Run a local web server to view the design templates:

```bash
gulp serve
```

View the files on the local web server using a browser:

http://localhost:9002

### Static Cutup Preview

Build and optimise the distribution files:

```bash
gulp
gulp optimise
```

Upload the distribution files to the [static cutup preview server](http://implementation.squiz.net/preview/brisvegas/master):

```bash
npm run upload
```

You will need to manually set up a unique user name and [encrypted password](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) in [.htpasswd](scripts/data/.htpasswd), record the authentication details on the Squiz Intranet and update this README file with a link to the authentication details.

This script will always use the current branch name as the remote directory. It can be used to preview branches if you substitute `BRANCH` with the branch name:

`http://implementation.squiz.net/preview/brisvegas/BRANCH`

## Tasks

| Command | Description |
| ---- | ---- |
| ```gulp``` | This is the default "build" task for the boilerplate and will read all source files and create a new directory. The destination directory is defined by the `config.json` "dest" property (defaults to `dist`). |
| ```gulp watch``` | Watch the file system for changes and perform any builds based on the file type that was changed. |
| ```gulp serve``` | Starts a HTTP server to allow proper previewing of files in the `dist` directory. If live reload is available appropriate scripts are injected to allow for dynamic browser refreshes. |
| ```gulp test``` | Run all associated tests for the Boilerplate including jshint, qunit and htmlcs. |
| ```gulp optimise``` | Run optimisation tasks including svgmin, imagemin, uglifyjs and beautification tasks. This should be run before transferring the files to a production system. |
| ```gulp clean``` | This will remove any content output in the destination directory. Useful for purging the directory before a rebuild. :warn: Note: this will remove the entire directory. |

## Help

Reference articles on Squiz Boilerplate are available at the official wiki:

[Squiz Boilerplate Wiki](https://gitlab.squiz.net/boilerplate/squiz-boilerplate/wikis/home)
