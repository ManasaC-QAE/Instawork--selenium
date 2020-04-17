$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Instawork.feature");
formatter.feature({
  "line": 2,
  "name": "Login Profile",
  "description": "",
  "id": "login-profile",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify Instawork company is displayed first on the search page for the given keyword",
  "description": "",
  "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@id1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on Google Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search Instawork Company",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify Instawork company website is displayed first on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "InstaworkSteps.i_am_on_google_search_page()"
});
formatter.result({
  "duration": 11127324900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Instawork Company",
      "offset": 9
    }
  ],
  "location": "InstaworkSteps.iSearchForKeyword(String)"
});
formatter.result({
  "duration": 6421545200,
  "status": "passed"
});
formatter.match({
  "location": "InstaworkSteps.iVerifyInstaworkCompanyWebsiteIsDisplayedFirstOnThePage()"
});
formatter.result({
  "duration": 4655280400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify Instawork company is displayed first on the search page for the given keyword",
  "description": "",
  "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@id2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Google Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I search \u003ckeyword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I find the position of website for \u003ckeyword\u003e on the list",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword;",
  "rows": [
    {
      "cells": [
        "keyword"
      ],
      "line": 15,
      "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword;;1"
    },
    {
      "cells": [
        "Instawork"
      ],
      "line": 16,
      "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword;;2"
    },
    {
      "cells": [
        "Instawork bangalore"
      ],
      "line": 17,
      "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword;;3"
    },
    {
      "cells": [
        "Instawork gigs"
      ],
      "line": 18,
      "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword;;4"
    },
    {
      "cells": [
        "Instawork Reviews"
      ],
      "line": 19,
      "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword;;5"
    },
    {
      "cells": [
        "Instawork app reviews"
      ],
      "line": 20,
      "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Instawork company is displayed first on the search page for the given keyword",
  "description": "",
  "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@id2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Google Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I search Instawork",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I find the position of website for Instawork on the list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstaworkSteps.i_am_on_google_search_page()"
});
formatter.result({
  "duration": 9846067600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Instawork",
      "offset": 9
    }
  ],
  "location": "InstaworkSteps.iSearchForKeyword(String)"
});
formatter.result({
  "duration": 5925017300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Instawork",
      "offset": 35
    }
  ],
  "location": "InstaworkSteps.iFindThePositionOfWebsiteApperanceOnTheList(String)"
});
formatter.result({
  "duration": 119269200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Instawork company is displayed first on the search page for the given keyword",
  "description": "",
  "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@id2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Google Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I search Instawork bangalore",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I find the position of website for Instawork bangalore on the list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstaworkSteps.i_am_on_google_search_page()"
});
formatter.result({
  "duration": 9785904700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Instawork bangalore",
      "offset": 9
    }
  ],
  "location": "InstaworkSteps.iSearchForKeyword(String)"
});
formatter.result({
  "duration": 6007442000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Instawork bangalore",
      "offset": 35
    }
  ],
  "location": "InstaworkSteps.iFindThePositionOfWebsiteApperanceOnTheList(String)"
});
formatter.result({
  "duration": 547543100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify Instawork company is displayed first on the search page for the given keyword",
  "description": "",
  "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@id2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Google Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I search Instawork gigs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I find the position of website for Instawork gigs on the list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstaworkSteps.i_am_on_google_search_page()"
});
formatter.result({
  "duration": 10989329900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Instawork gigs",
      "offset": 9
    }
  ],
  "location": "InstaworkSteps.iSearchForKeyword(String)"
});
formatter.result({
  "duration": 5381149000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Instawork gigs",
      "offset": 35
    }
  ],
  "location": "InstaworkSteps.iFindThePositionOfWebsiteApperanceOnTheList(String)"
});
formatter.result({
  "duration": 383842800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify Instawork company is displayed first on the search page for the given keyword",
  "description": "",
  "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@id2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Google Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I search Instawork Reviews",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I find the position of website for Instawork Reviews on the list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstaworkSteps.i_am_on_google_search_page()"
});
formatter.result({
  "duration": 9928610300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Instawork Reviews",
      "offset": 9
    }
  ],
  "location": "InstaworkSteps.iSearchForKeyword(String)"
});
formatter.result({
  "duration": 5551794800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Instawork Reviews",
      "offset": 35
    }
  ],
  "location": "InstaworkSteps.iFindThePositionOfWebsiteApperanceOnTheList(String)"
});
formatter.result({
  "duration": 742455100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify Instawork company is displayed first on the search page for the given keyword",
  "description": "",
  "id": "login-profile;verify-instawork-company-is-displayed-first-on-the-search-page-for-the-given-keyword;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@id2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Google Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I search Instawork app reviews",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I find the position of website for Instawork app reviews on the list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstaworkSteps.i_am_on_google_search_page()"
});
formatter.result({
  "duration": 10128998600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Instawork app reviews",
      "offset": 9
    }
  ],
  "location": "InstaworkSteps.iSearchForKeyword(String)"
});
formatter.result({
  "duration": 6396050600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Instawork app reviews",
      "offset": 35
    }
  ],
  "location": "InstaworkSteps.iFindThePositionOfWebsiteApperanceOnTheList(String)"
});
formatter.result({
  "duration": 1082613600,
  "status": "passed"
});
});