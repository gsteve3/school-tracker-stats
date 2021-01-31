/// <reference types="cypress" />

context('Location', () => {
  beforeEach(() => {

    cy.setCookie('MoodleSession', '070gfeo561tf5ehtk41r1qs8t7')
    return

  // it('logs in', () => {
    // cy.visit('https://thehub.fsd38.ab.ca/login/index.php')


    // https://on.cypress.io/type
    cy.get('#username')
      .type('greg@stevens.pro')

    cy.get('#password')
      .type('x2J7RPMkJm@ixJsBf*W4')
      .type('{enter}')
  // })
  })


  it('views grades', () => {
    cy.visit({
      url: 'https://thehub.fsd38.ab.ca/blocks/mymentees/grades.php',
      method: 'POST',
      body: {
        studentid: 10335
      }
    })

    var items = [];

    cy
      .get('.grade-report-user table.user-grade')
      .as('gradeTables')
      .then(() => {
        Cypress.$('.grade-report-user table.user-grade tr').each((index, value) => {

          var gradeItem = {
            title: '',
            url: '',
            weight: '',
            grade: '',
            range: '',
            percentage: '',
            feedback: '',
            cells: []
          }

          var $row = Cypress.$(value)


          gradeItem.title = $row.find('th.item:first').text()
          var $tds = $row.find('td')

          gradeItem.url = $row.find('th.item:first a').attr('href')
          gradeItem.grade = $row.find('td.column-grade').text()

          // date - might have to go to detail page and grab week group from crumb.

          // optional
          gradeItem.weight = $row.find('td.column-weight:first').text()



          Cypress.$(value).find('th.item,td').each((index2, value2) => {
            // cy.log('val: ' + )
            gradeItem.cells.push(Cypress.$(value2).text())
          })

          if (gradeItem.title.length) {
            items.push(gradeItem)
          }

        })

      })

      console.log(items)

      cy.writeFile('cypress/temp-output.json', items)




    return

    // NEW METHOD
    cy
      .get('.grade-report-user table.user-grade')
      .then(($tables) => {
        cy.log('test in tables')

        $tables.each((index, $table) => {
          cy.log('in each')

          cy
            .wrap($table)
            .find('tr')
            .each(($tr) => {

              cy.wrap($tr).children().then(($children) => {
                cy.log('child = this')
                cy.log($tr.find('th').text())
              })

                var gradeItem = {
                  title: '',
                  url: '',
                  weight: '',
                  grade: '',
                  range: '',
                  percentage: '',
                  feedback: '',
                }
              })
        })
      // console.log(this)
      // cy.log($el)
      // Cypress.$(this).find('tr th.item').closest('tr').each(() => {
          cy.log('test');
      // })
     })

    // cy.log(gradeTables.length)


      // Cypress.$(this).find('tr th.item').closest('tr').each(() => {


    cy.log('before return')

    return;


    // OLD METHOD

    // extract assignments
    // https://www.analyticsvidhya.com/blog/2020/12/web-scraping-using-cypress-tool/


    var subjects = [];

    cy.get('[role="main"]  div.grade-report-user table.user-grade')
      .each(($table, index, $rows) => {

        var subject = {}

        // cy.log()
        cy.wrap($table).within(($table) => {
          subject.summary = $table.attr('summary')
          // subject.

          $table.find('tr th.item').closest('tr').each((index, $el) => {

            // cy.debug($el)
            // cy.log(arguments)
            // cy.log($el.children)
            // cy.log($el.find('th').text())
            // cy.debug()
            // $el.children.each((index, $child) => {
              // cy.log($child)
            // })


            // var itemRow = cy
            //   .wrap($th)
            //   .parent('tr')
            //   .then(() => {
            //     cy.log(itemRow)
            //   });

            var gradeItem = {
              title: '',
              url: '',
              weight: '',
              grade: '',
              range: '',
              percentage: '',
              feedback: '',
            }

            // cy.wrap($el).within(($el) => {
            //   gradeItem.title = $el.find('a').text()
            //   gradeItem.url = $el.find('a').attr('href')
            // })

            // var $th = cy.wrap($el).within(($th) => {
            // })


            // Create Item
          })
        })

      })
  })

})
