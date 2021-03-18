# Stream Messages

**Easily display animated messages in an OBS overlay.**

### 1. Installation

- [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository.
- Install dependencies using the `yarn` command.

### 2. Configuration

- Configure your messages in the `src/assets/messages.json` file using JSON.
- Configure the duration of a message and the delay between messages in the `src/constants.js` file.

When done, build the application using `yarn build`.

_Additionally, you can configure the ports used by the application in the `package.json` file and CSS in the `src/style.css` file._

### 3. Usage

- Run the `yarn serve` command and use the [`http://localhost:8282`](http://localhost:8282/) URL to access your overlay and configure OBS.

## License

Licensed under the MIT License, Copyright © HiDeoo.

See [LICENSE](https://github.com/HiDeoo/stream-messages/blob/master/LICENSE) for more information.
