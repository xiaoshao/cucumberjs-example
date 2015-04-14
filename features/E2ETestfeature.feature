#features/E2ETestfeature.feature
Feature: When you test on a site which call ajax to load pages and waste a long time. You have to wait a while for the ajax call finish.

Scenario: wait for ajax call finish
  Given Access a page with "xiaoshao"
  When Wait for ajax finish
  Then Check whether the components loaded when ajax finished

Scenario: by jsdom
	Given Login rea
	When Access my profile