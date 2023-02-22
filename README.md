# GitHub Action - Update JSON values
This GitHub Action replaces the provided values on a provided JSON file

## Usage

Add this step in your workflow file
```yaml
- name: Update json-values description
  uses: restack/update-json-values@v1.0.0
  with:
    file: my-file.json
    values: "{'TEMPLATE_VALUE_TO_REPLACE': 'value_here', 'ANOTHER_VALUE_TO_REPLACE': 'value_here'}"
```

### Input Variables

- `file`: File name/path to edit. e.g `package.json`
- `values`: Values to replace on the json: `{'TEMPLATE_VALUE_TO_REPLACE': 'value_here', 'ANOTHER_VALUE_TO_REPLACE: 'value_here'}`


#### Example - Updating `package.json` Version

```yaml
name: Build and Release

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

env:
  GITHUB_TOKEN: ${{ github.token }}

jobs:
  build:
    name: Build and Release
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
    - uses: actions/checkout@v3
 
    - name: Update package.json version
      uses: restackio/update-json-values@v1.0.0
      with:
        file: package.json
        values: "{\"TEMPLATE_VALUE_TO_REPLACE\": \"new value\"}"
```
