# kwruntime/installer

This project is an installer for [kwruntime/core](https://github.com/kwruntime/core). 
You can use directly `npx`, `pnpx`, this is the recommended way to install.

Preferrable use `nodejs` 14 or superior.

```bash
pnpx @kwruntime/installer 
# or
npx @kwruntime/installer
```

You should see a window like this: 

```bash

	░█─▄▀ ░█──░█ ░█▀▀█ ░█─░█ ░█▄─░█ ▀▀█▀▀ ▀█▀ ░█▀▄▀█ ░█▀▀▀ 
	░█▀▄─ ░█░█░█ ░█▄▄▀ ░█─░█ ░█░█░█ ─░█── ░█─ ░█░█░█ ░█▀▀▀ 
	░█─░█ ░█▄▀▄█ ░█─░█ ─▀▄▄▀ ░█──▀█ ─░█── ▄█▄ ░█──░█ ░█▄▄▄

	 ▀█▀ ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ ─█▀▀█ ░█─── ░█─── ░█▀▀▀ ░█▀▀█ 
	 ░█─ ░█░█░█ ─▀▀▀▄▄ ─░█── ░█▄▄█ ░█─── ░█─── ░█▀▀▀ ░█▄▄▀ 
	 ▄█▄ ░█──▀█ ░█▄▄▄█ ─░█── ░█─░█ ░█▄▄█ ░█▄▄█ ░█▄▄▄ ░█─░█


> Installing KwRuntime, please wait a moment.
Application added to PATH. Maybe you need restart shell.
Welcome to kwruntime/core version 1.1.18

					Press enter to close.
							CLOSE
```

Later, restart the ```terminal``` or ```cmd``` and you can use ```kwrun```

```bash 
> kwrun "github://kwruntime/std@808cb57/util/hello.ts"

[kwruntime] Compiling: https://raw.githubusercontent.com/kwruntime/std/808cb57/util/hello.ts
Welcome to @kwruntime/core 🥝😉
```