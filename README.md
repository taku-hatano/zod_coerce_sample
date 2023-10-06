# zod_coerce_sample

`npm run dev`でアプリを起動

- http://localhost:3000/sample?id=1 にリクエストした場合
  - zod のバリデーションエラーが発生
- http://localhost:3000/sample_with_preprocess?id=1 にリクエストした場合
  - OK
- http://localhost:3000/sample_with_transform?id=1 にリクエストした場合
  - OK
- http://localhost:3000/sample_with_coerce?id=1 にリクエストした場合
  - OK
