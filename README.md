Intro
=====

Example to deploy an ERC777, that requires ERC1820Registry, using openzeppelin-test-helpers.

Installation
============

```
npm i -g truffle
npm i -g windows-build-tools
```

```
git clone https://github.com/sebasgoldberg/erc777-erc1820.git
cd erc777-erc1820
npm i
```

Test That Multiple Migrations Works
===================================

```
truffle console
migrate --reset
migrate --reset
```
