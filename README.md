# BlogM1
# Front-end Candidate Exercise

## MembersFirst Front-end Candidate Exercise

Using this API: https://jsonplaceholder.typicode.com/
-----------------------------------------------------------------------------------
Please create a simple webpage, using Bootstrap, that shows a list of posts belonging to a specific user, and allows them to create new ones using an AJAX form post.
-----------------------------------------------------------------------------------
## Criteria

● Use Bootstrap

● Use vanilla JS or jQuery. No other frameworks or libraries.

● Use a single html page

● On page load, you should see a list of posts belonging to a specific user
    ○ The user ID for the user is 1
    ○ The page should display the users name (please use your name)
    ○ A button to add a new post
    ○ Below the name should be a list of posts belonging to the user
    ○ Each post should display:

■ Clickable Title that links to a new page
    ➢ New page should open in a new tab
    ➢ Do not build the new page, just a clickable link is fine

■ First 15 characters of the body, followed by an ellipsis (...)

● The button to add the new post should open a bootstrap modal

● The modal will contain
    ○ a form to create a new post
    ○ A button to submit the newly created post
    ○ On submit, the form should validate that there is a title and text in the body
    ○ Submitting should close the modal, and add the new post to the bottom of the list
-----------------------------------------------------------------------------------
## Notes
● None of the data will persist, so refreshing won’t have the newly created post.
● The JS should not be minified
● Style the page so it looks like a simple blog.
● Store the code in a GitHub repo and submit only the URL to the repo.