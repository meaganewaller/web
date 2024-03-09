const prettierPlugin = {
	ignorePatterns: ["!.prettierrc"], // we want to lint .prettierrc (ignored by default by eslint)
	extends: ["prettier"],
};

module.exports = prettierPlugin;
