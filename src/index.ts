const args = process.env.HUSKY_GIT_PARAMS
  ? process.env.HUSKY_GIT_PARAMS.split(' ')
  : process.argv;
process.exit(args[args.length - 1] === '1' ? 0 : 1);
