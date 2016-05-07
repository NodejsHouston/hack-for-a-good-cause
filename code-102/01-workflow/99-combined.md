# Git 

## Where can I host a project?

* Github
    * free for public projects
    * don't worry, can still control who has write access
    * top quality web interface
    * really good Markdown support
    * repos come with Wiki, issues
    * cost per month for private repos

* Bitbucket
    * free for both public and private repos
    * can organize multiple repos under a single project
    * not as good web interface as Github, but still really good
    * pretty decent Markdown support, but not 100% compatible with Github Flavored Markdown
    * repos come with Wiki, issues
    * costs for teams larger than 5 users (Someone with read or write access to one of your private repositories)

## Tools

* Git command line
* Sourcetree (Windows and OSX)
* Github for Desktop (Windows and OSX)

## Contributing to another repo

The rest mostly deals with the standard flow on Github projects.

* Read the CONTRIBUTORS.md
    * Some repos follow very specific flows (Git Flow, Github Flow)
        * probably Github Flow if none specified, never hurts to ask!
    * Some repos have very specific rules for commits, branches, names
    * Some repos require agreeing to their terms before accepting code
    * Many repos will require some sort of linting, style checks, or test cases

### What the fork?

* Fork the repo => you don't have write access to their repo, but you will on your fork
* Clone your fork => aka download it to your local machine
* Add the upstream remote: `git remote add upstream URL_TO_ORIGINAL_REPO`

### Commence operation winged freedom!

* Check the issue tracker for un-assigned tasks
* Comment on the issue to make sure no one has started and to let others know you have
* Use feature branches? Look at how the others in the project are working.
* Do the thing

### Hmm, there's a few extra screws...

* Bring your fork and/or branch up to date with upstream master
    * Some projects will use `git rebase` and resolve any merge issues
    * Some may just use merge and resolve any merge issues
* Make sure your style matches the style of the codebase and it passes style checks if they have one
* Make sure your code lints correctly if the project uses a linter
* Make sure you did not cause a test case to fail
* Help write tests for your new stuff to keep things at 100%

### Ok, nothing broke. Looks like I'm ready

* Create a Pull Request on the original repo and wait for feedback
* Some repo owners may request squashing of commits. Get used to rebase for those projects.
    * https://www.atlassian.com/git/tutorials/rewriting-history/
* Celebrate your contribution to open source!
