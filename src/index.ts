const args = process.argv;
process.exit(args[args.length - 1] === '1' ? 0 : 1);
