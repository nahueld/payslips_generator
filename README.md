# myob_payslips_generator
Generates payslips based on employee details

#### Dependencies
- node ( >= v6.9.5)

#### Building Locally
- Install dependencies ``npm install``
- Run tests: ``npm run test``
- Build: ``npm run build``
- Copy Resources : ``npm run resources``
- Start local server: ``npm start`` (this will run all previous steps).
- Visit: ``http://localhost:3000/``

#### CI (status: [![CircleCI](https://circleci.com/gh/nahueld/myob_payslips_generator/tree/master.svg?style=svg&circle-token=f0026905801966a9e15fe4be88cc83eb37fdbc04)](https://circleci.com/gh/nahueld/myob_payslips_generator/tree/master))
All changes are integrated using circle-ci, request access if necessary.

#### Assumptions and comments
- UI part is done just for completion and doesn't have proper test coverage and/or implementation.
- The exercise mentions: "The following rates for 2017-18 apply from 1 July 2017." but:
  - The employee details retrieved from the endpoint are from previous months.
  - The employee details retrieved don't have year reference.
  - So I assume that this may be an issue in the documentation? In real life I'd ask
  the interested parties to clarify this.
- I assume that the payslips are always monthly, that is, the dates coming from
employee details will always represent 1 month, again, in a real life scenario
I'd confirm this will the stakeholders (i.e: business analyst, PM, etc).
- Tax rates ranges are hardcoded in a file although ideally they should be read from DB.
