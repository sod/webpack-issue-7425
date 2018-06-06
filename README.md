# webpack-issue-7425

## Issue in --mode production:

```bash
npm install
npm run prod
```

Open http://localhost:3000 and see in the console `Observable.prototype.skip: – undefined`

## Works in --mode development:

```bash
npm install
npm run dev
```

Open http://localhost:3000 and see in the console `Observable.prototype.skip: – function skip()...`

