module.exports = {
  '*.ts': [
    'eslint --cache --fix',
    'prettier --write',
    () => 'npx tsc --skipLibCheck --noEmit',
  ],
  '*.js': [
    'eslint --cache --fix',
  ],
};
