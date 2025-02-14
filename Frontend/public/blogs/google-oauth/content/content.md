---
publishedDate: 2025-02-15T00:00:00Z
title: Google oAuth Implementation
description: Learn how to implement Google oAuth in any web application raw without using any library.
tags:
  - oAuth
  - tech
#  All the comtents of the blog goes here.
---

Hi, I am Manas and in this blog, I will be tell you how to implement Google oAuth in any web application raw without using any library.

Follow the steps fiven below additionally you can watch the video for better understanding.

## Understanding oAuth

1. oAuth is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords. This mechanism is used by companies such as Google, Facebook, Microsoft, and Twitter to permit the users to share information about their accounts with third party applications or websites.

2. Below diagram shows the flow of oAuth.

<div style="text-align: center;">
  <img 
    src="http://scienmanas.xyz/blogs/google-oauth/images/diagram.png" 
    alt="OAuth Flow Diagram" 
    style="max-width: 100%; height: auto;" 
  />
</div>

Now, u need to understand the flow of oAuth.
1. The user clicks on the login button.
2. The user is redirected to the oAuth provider's login page.
3. The user logs in and gives permission to the application.
4. The oAuth provider redirects the user back to the application with a code.
5. The application exchanges the code with the access token and refresh token.
6. The application uses the access token to get the user's information.


## Steps to implement Google oAuth

First thing need to be done in google cloud console.

1. Go to [Google Developer Console](https://console.developers.google.com/).
2. Create a new project.
3. Go to the project and enable the Google oAuth API.
4. Create a new oAuth client ID.
5. Configure Consent Screen
6. Add authorized JavaScript origins.
7. Add the redirect URI.
8. Copy the client ID and client secret.



### Now, let's move to the code.

1. The client is public, so we can store the client ID in the frontend.
2. Client secret is private, so we can't store it in the frontend. We will store it in the backend, and the redirect URI will be the backend endpoint.
3. Create a button in the frontend to login with Google.
4. On click of the button, open a new window with the Google oAuth URL.
6. By redirect URI, Google will redirect to the backend endpoint with the code.
7. In the backend, exchange the code with the access token and refresh token.
8. Use the access token to get the user's information.

That's it. You have successfully implemented Google oAuth in your web application. Now to make your application more secure, you can encrypt the access token and decrypt it in the backend.

All the codes:
- Frontend: [GitHub](https://github.com/scienmanas/My-Pookie/blob/main/app/auth/page.tsx)
- Backend Endpoint: [GitHub](https://github.com/scienmanas/My-Pookie/blob/main/app/api/auth/callback/route.ts)
- Dashboard  enpoint (verification): [GitHub](https://github.com/scienmanas/My-Pookie/blob/main/app/api/auth/user/route.ts)


## Demo

<div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden;">
<iframe 
  src="https://www.youtube.com/embed/tdW67QGn2dY?si=Pdt11PlGWd2VDyfQ"
  width="560" 
  height="315"
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerPolicy="strict-origin-when-cross-origin" 
  allowfullscreen 
  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>

## Message

I debugged many different errors, so if use face any issue, most prooably I may have already debugged it. So feel free to reach out to me. 


Cheers 🥂,  
**Manas**  
[GitHub](https://github.com/scienmanas) | [Email](mailto:iamscientistmanas@gmail.com)
