# What do we want to do?

Report on Assignment Grade's from Bob's Grade Jr. High Moodle Accont.

We will do that by extracting all the assignments from Bob's Dad's Moodle account
where Bob is a `Mentee` (moodle term).

# URLs

- Home - https://thehub.fsd38.ab.ca/
-

## as a Student

- Grade Report
  - https://thehub.fsd38.ab.ca/grade/report/user/index.php?id=702
  - Limited to seeing only one subject at a time.


### Navigation URLs
1. Subject Home - https://thehub.fsd38.ab.ca/course/view.php?id=671
2. Subject Grades - https://thehub.fsd38.ab.ca/grade/report/user/index.php?id=671



## as a Parent

- ## Grade Report

---

# Login Page

```html
<form
  class="loginform"
  id="login"
  method="post"
  action="https://thehub.fsd38.ab.ca/login/index.php"
>
  <div class="form-group" id="yui_3_17_2_1_1612030860828_41">
    <label for="login_username" id="yui_3_17_2_1_1612030860828_46">
      Username
    </label>
    <input
      type="text"
      name="username"
      id="login_username"
      class="form-control"
      value=""
      autocomplete="username"
    />
  </div>
  <div class="form-group">
    <label for="login_password">Password</label>
    <input
      type="password"
      name="password"
      id="login_password"
      class="form-control"
      value=""
      autocomplete="current-password"
    />
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input
        type="checkbox"
        name="rememberusername"
        id="rememberusername"
        class="form-check-input"
        value="1"
      />
      Remember username
    </label>
  </div>
  <div class="form-group">
    <input type="submit" class="btn btn-primary btn-block" value="Log in" />
  </div>
  <input
    type="hidden"
    name="logintoken"
    value="RSTlEuogWoXWUc8ByiTZVQcbwsgZLSmQ"
  />
</form>
```


# Unexpected
## Parent Report doesn't have same detail as Student's Report
Will have to go through each Student report instead.



## ONLY Social Studies Report has more detail...that's why it's like that.
Checked and it's the only grade.
I really like that level of detail.

- item
- weight
- grade
- range
- percentage
- feedback

