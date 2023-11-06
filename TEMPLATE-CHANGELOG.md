# Изменения в template проекта

## Общие изменения

- Применена архитектурная методология Feature-Sliced Design
- Создан `jsconfig.json`, в котором определён `baseUrl` для боле коротких путей импорта
- Добавлена директория `.github` в которую помещён template для оформления PR

## `package.json`

В конфиг ESLint добавлены правила и настройки:

Для отображения предупреждений когда не используются `{}` в if, else, for, и т.д.:

```json
"eslintConfig": {
  "rules": {
    "curly": [
      "warn",
      "all"
    ]
  }
}
```

Для решения ошибки связанной с использованием `baseUrl` в `jsconfig.json`:

```json
"settings": {
  "import/resolver": {
    "node": {
      "paths": [
        "src"
      ]
    }
  }
}
```
