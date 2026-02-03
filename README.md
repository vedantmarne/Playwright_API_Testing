npm init -y

npm init playwright@latest

npm playwright -v

npx playwright --help

npx playwright test 

npx playwright test --ui

npx playwright test --workers 3

npx playwright test .\test\example.spec.js

npx playwright test --project=chromium

npx playwright test --project=chromium --headed

npx playwright test "tests/record1_demo.spec.js" --project=chromium --headed

npx playwright test "tests/record1_demo.spec.js" --project=chromium --headed --grep “@smoke”

Opposite of grep  Skip tests with certain tag
npx playwright test "tests/record1_demo.spec.js" --project=chromium --headed --grep-invert “@smoke”

npx playwright show-report

npx playwright codegen

npx playwright codegen --target javascript -o record_example.js

npx playwright codegen --viewport-size=800,600

npx playwright codegen --device="iPhone 11"

npx playwright show-trace ./test-results/record2_demo-test2-chromium-retry1/trace.zip   

