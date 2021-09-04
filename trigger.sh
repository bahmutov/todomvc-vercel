#! /bin/bash

# to run inject the environment variable using as-a utility
# as-a circleci-user ./trigger.sh

export TEST_URL=https://todomvc-no-tests-vercel-86m2n6fxp-gleb-bahmutov.vercel.app
# trigger this pipeline
export TEST_PIPELINE_URL=https://circleci.com/api/v2/project/gh/bahmutov/todomvc-tests-circleci/pipeline

# if the first branch does not exist, try the default branch
export BRANCH_NAME=delay-ajax

# trigger the run on the given branch first
# if the branch does not exist, try the default branch
# https://github.com/bahmutov/trigger-circleci-pipeline
npx trigger-circleci-pipeline \
  --org bahmutov --project todomvc-tests-circleci --branch $BRANCH_NAME \
  --parameters TEST_URL=$TEST_URL,TEST_BRANCH=$BRANCH_NAME
