---
path: "/development/git"
date: "2015-01-08"
title: "Gallantly GIT"
---

So GIT is gallant now? No, I don't know... Maybe. I like it, but it did take some time to get over the first many hurdles. I hope this page can help someone in the same situation as I was in.

* [Show and change remote URL](#show-and-change-remote-url)
* [GIT on Windows](#git-on-windows)
* [Revert local changes](#revert-local-changes)
* [Staging files](#staging-files)
* [Git config](#git-config)
* [Rollback](#rollback)
* [Move your crazy experiment into a seperate branch](#move-your-crazy-experiment-into-a-seperate-branch)
* [Reset file](#reset-file)
* [Branch names](#branch-names)
* [Ignore changes](#ignore-changes)
* [Misc](#misc)
* [GitHub](#github)
* [Credentials](#credentials)
* [Prepare git message with prefix](#prepare-git-message-with-prefix)

## Show and change remote URL
To see the current remote origin URL:
```bash
git remote -v
```

To change the remote origin URL:
```bash
git remote set-url origin <url>
```

## GIT on Windows
GIT on Windows like to checkout every file with CRLF endings. We need LF endings, so there are two things you need to do (from command prompt or Cygwin):

```bash
git config --global core.eol lf
git config --global core.autocrlf false
```

Your .gitconfig file should now contain this (as well as other relevant information):

```bash
[core]
    autocrlf = false
    eol = lf
```

## Revert local changes
To reset all local changes, get the same content as remote master:

```bash
git fetch --all
git reset --hard origin/master
```

## Staging files
Different ways to stage changed files, and why `git add -A` is preferred:

```bash
# stages new and modified, without deleted
git add .
```
```bash
# stages modified and deleted, without new
git add -u
```
```bash
# stages all
git add -A
```

To unstage files:

```bash
# removes added
git reset
```

## Git config
Show content of .gitconfig:

```bash
git config --global --edit 
```

## Rollback
Remove unwanted commits to origin/master, return state to how it looked like at commit id&nbsp;`e3f1e37`:

```bash
git reset --hard e3f1e37
git push --force origin master
```

## Move your crazy experiment into a seperate branch
Let's assume you've been committing code for a crazy experiment to the master branch for a while, then realize this should have been in its own branch:

![Crazy experiment on master](/public/useful-git-commands/crazy-experiment-1.gif)

Create a seperate branch containing this experimental code:

```
git branch crazy-experiment
git push origin crazy-experiment
```

![Crazy experiment on its own branch](/public/useful-git-commands/crazy-experiment-2.gif)

Reset master branch:

```
git reset --hard 8fa7b51
git push --force origin master
```

![The master branch is back to normal](/public/useful-git-commands/crazy-experiment-3.gif)

You can verify your experiment branch is 3 commits ahead of master:

![Crazy experiment branch 3 commits ahead of master](/public/useful-git-commands/crazy-experiment-4.gif)

Now continue working on your experimental branch:

```
git checkout crazy-experiment
```

## Reset file
Overwrite content in file with content from same file located on origin/master:

```bash
git checkout origin/master -- <file>
```

## Branch names 
Show a list of branches on origin:

```bash
git fetch origin
git branch -v -a
```

## Ignore changes
To ignore local changes to a tracked file:

```bash
git update-index --assume-unchanged <file>
```

To reverse it (if you ever want to commit changes to it), use:

```bash
git update-index  --really-refresh --no-assume-unchanged
```

## Misc

```bash
git config core.safecrlf false
```

## GitHub
Create a new repository on GitHub from the command line (if you're on Windows you'll need to install [`curl`](https://www.google.com/search?q=windows+curl) first):

```bash
# Replace USER and REPO
curl -u USER https://api.github.com/user/repos -d '{ "name": "REPO" }'
```

Create a new project and push it to an existing repository on GitHub:

```bash
echo "# REPO" >> README.md
git init
git add README.md
git commit -m "first commit"
# Replace USER and REPO
git remote add origin https://github.com/USER/REPO.git
git push -u origin master
```

## Credentials
Push'ing from the command prompt requires you to type your login information each time. You can enable credential caching to avoid this with:

```bash
git config credential.helper store
```

## Prepare git message with prefix
If your branch were generated with Jira or similar, you get a branch named something like `feature/IU-9547-new-foo-functionality`. If you like commit messages like `IU-9547: updated-bar` but get annoyed with writing the prefix `IU-9547:` on all your commits, then go into your `.git/hooks` folder and create a file called `prepare-commit-msg` containing this:

```bash
#!/bin/bash
BRANCH_NAME=$(git symbolic-ref --short HEAD)
BRANCH_NAME="${BRANCH_NAME##*/}"
BRANCH_IN_COMMIT=$(grep -c "\[$BRANCH_NAME\]" $1)
if [ -n "$BRANCH_NAME" ] && \
    ! [[ $BRANCH_IN_COMMIT -ge 1 ]] && \
    [[ "$BRANCH_NAME" =~ (.*)?IU-[0-9]{4,5}(.*)? ]]
then
    JIRA_ID=$(echo $BRANCH_NAME | awk -F'IU-' '{print $NF}' | awk -F'-' '{print "IU-"$NR}')
    sed -i.bak -e "1s/^/$JIRA_ID: /" $1
fi
```
Make the file executable with `chmod +x prepare-commit-msg`. 

Next time you commit something, the prefix will be the branch name stripped from everything except the Jira ID, for example: `IU-9547:`.
    
