# PEN-NY-CHAT
AEDA week 3 project

PEN-NY: an interactive website that focuses on peer to group communication.

Using the provided API, we were able to implement user log in, sign up, user posts and group posts.

            FUNCTIONALITY

        LANDING-PAGE

    Upon entering the site, you will be greeted by a landing-page.

    A nav bar featuring our three pages is fully functional.  Allowing you to navigate the website with ease.

    The landing-page also features a log-in field that populates a modal where the end user can input their log-in credentials.

    For the sake of this project and as per the API parameters, the log-in credentials include username, password and user email.

    The API fetch values are embedded into the field inputs of the modal.

    Once the fields are completed, you can either cancel out of the request by pressing the cancel button or move forward with the log-in request by pressing submit.

    On-submit, the user will be directed to the profile page.

    If the user does not have existing log-in credentials, she may hit the "enter" button and be directed to the profile-page.

        PROFILE-PAGE

    Upon redirect to the profile-page, the user will see input fields for "sign up".

    If the user does not have existing log-in credentials, she may input the aforementioned log-in requirements and hit submit.

    Upon submitting the required info in the signup fields, the user can navigate to the "what's on your mind?" and "tell us about it" fields.

    A title and description for a post can be input into these fields and will populate on the "content wall."

    Each message will have a "delete" and "comment" button that are currently only front-end designs.

    The profile-page also features an update profile option that will populate a modal on click.

    This modal will prompt the user for an additional e-mail, a phone number and an address to effectively "update" their profile information (unfortunately, the API functionality of this request will return an error 401 due to some bearer authorization debugging that we are still in the process of implementing.

        HOME PAGE

    To view group or public posts, the user can navigate to the "Penny" tab where they will be greeted with the same "posting fields" available in the profile page.  The main difference is that the content wall of the Penny page features both user and group posts.

    An API get request powers the functionality of the public post wall.

    User and group posts populate with delete and comment buttons that still lack back-end functionality.  

    Once again, these are unfortunately, still a work in progress.

            GENERAL APPROACH

        TIMELINE:

    Our goal was to have general design outlined in CSS and HTML by Monday.

    API functionality would then be implemented to the bare design ad hoc as the week progressed.

    As the adage typically goes, form must meet function, and instead of working around our original design, we decided to re-design the web-site user flow based on the functionality we were able to implement.

    The landing page first featured a built in log-in and sign-up field.  We decided to use the landing-page as an entry way into the profile-page, which houses more of the site's main features.

    Our timeline became less organized as we "discovered" the ability to implement certain functionalities through the API.

    This forced us to pivot continuously between embedding API fetch calls within functions & call-backs to our HTML, and re-designing the site to house the API functionality.  Our use of modals is the main example of these pivots.  Instead of using up more real-estate on each page or adding additional page, we decided it was best to use pop-up windows to gather more user information.

        THE UNSOLVED MYSTERIES OF THE API

    While the fetch requests are present within our code, we were unable to fully implement the delete post, update profile and comment on post functions.

    I am still unclear on why the error 401 persists when these functions are invoked, but am convinced that there is a deficiency along the lines of our log-in and/or sign-up processes.

        GITHUB NIGHTMARES

    We actually rebooted our repo due to some persistent github issues early on.  (Another timeline issue).

    Once we made a new repository, the github issues generally subsided.

        PLANNING DOCUMENTATION

https://docs.google.com/presentation/d/1e5vG0iM1sKKpUTAdHejLI4O4lg-3y5W3rAz6ITr73r0/edit?usp=sharing
