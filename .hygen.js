const path = require("path");
const changeCase = require("change-case");
const fs = require("fs");

module.exports = {
  helpers: {
    _getComponentDir: function(pathFolder, name) {
      pathFolder = pathFolder || "src/components";
      if (fs.lstatSync(pathFolder).isFile()) {
        pathFolder = path.dirname(pathFolder);
      }

      return path.join(pathFolder, changeCase.camelCase(name));
    },

    getComponentPath: function(pathFolder, name) {
      pathFolder = this._getComponentDir(pathFolder, name);
      return path.join(pathFolder, changeCase.pascalCase(name));
    },

    getModelFilePath: function(pathFolder, name, suffix) {
      pathFolder = this._getComponentDir(pathFolder, name);
      return path.join(pathFolder, changeCase.camelCase(name) + suffix);
    },

    getFilePath: function(pathFolder, name) {
      if (fs.lstatSync(pathFolder).isFile()) {
        pathFolder = path.dirname(pathFolder);
      }

      return path.join(pathFolder, changeCase.camelCase(name));
    },

    getSubfolderFilePath: function(pathFolder, subfolder, name, suffix) {
      if (fs.existsSync(pathFolder) && fs.lstatSync(pathFolder).isFile()) {
        pathFolder = path.dirname(pathFolder);
      }

      if (pathFolder.endsWith(subfolder)) {
        subfolder = "";
      }

      return path.join(pathFolder, subfolder, this.addNameSuffix(changeCase.camelCase(name), suffix));
    },

    getStorybookPath: function(pathFolder, name) {
      pathFolder = pathFolder || "";
      if (fs.lstatSync(pathFolder).isFile()) {
        pathFolder = path.dirname(pathFolder);
      }

      pathFolder = pathFolder.replace("src/components/", "");
      pathFolder = pathFolder
        .split(path.sep)
        .map(part => (part !== "_parts" ? changeCase.pascalCase(part) : part))
        .join(path.sep);

      return path.join(pathFolder, changeCase.pascalCase(name));
    },

    addNameSuffix: function(name, suffix) {
      if (suffix && !name.endsWith(suffix)) {
        name += suffix;
      }

      return name;
    },
  },
};
