# 🔰 Portfolio

- This repository hold the code for my portfolio website deployed at **[link](https://scienmanas.xyz)**, The website used NextJS as frontend and framer for animaitions. Additionally aws lambda function is used to send emails upon form filling leviaging the power of serverless.

- The frontend is deployed on `vercel` and the lambda function is deplyed on `aws api-gateway`. Additonally for security, only `scienmanas.xyz` is allowed to access the lambda function, preventing attacks on the service.

- `Vercel Analytics` is can be enabled for user monitoring.

## 📚 Tech Stack

- **Frontend:** Next JS, TailwindCSS, Framer Motion
- **Serverless:** lambda function, aws api-gateway

## 🔩 Environment Variables

This project requirement .env configuration in `Frontend` folder to handle the dynamicity of the metadata generated when deployed everytime. The `.env` file should be created in the `Frontend` folder with the following variables:


| Varibale    | Description                                         |
| :---------- | :-------------------------------------------------- |
| `DOMAIN`    | Domain name of the website (https://scienmanas.xyz) |
| `SITE_NAME` | Name of the site (Here I kept it- Manas)             |


## 🔨 Setting Up

- `This project doesn't requires backend, the backend is only given only to store the newsletter user and send emails`



## Few Notes

- The backend is only used to store the newsletter user and send emails.
- To add new blog just add files according to the format in `Frontend/public/blog` folder. The blog will be automatically added to the website.
- The beackend in turned off in the frontend, so the newsletter will not work in the frontend, you need to uncomment the onsubmit function in the form (in Footer.tsx - Frontend)

## Deployment

- The frontend can be deployed on `vercel`, `netlify`, `github pages`, `render.com` etc.
- The backend can be deployed on `EC2`, `render.com`, `heroku`, `netlify`, `vercel` etc.

1. To deploy the frontend, run the following command in the `Frontend` folder:

- `configure the .env file`
- `npm install`
- `npm run build`

2. To deploy the backend, run the following command in the `Backend` folder:

- `configure the .env file`
- `npm run build`
- `npm deplloy`

## ⚡ Features

- Very easy to customize and deploy just be changing variables values
- Static blog section, which doesn't require backend setup.

## 📁 File Structure :

```
.
├── AWS Lambda Function
│   │── index.mjs
│   │── package.json
│   │── package-lock.json
│   └── aws-lambda-emailer.zip (zipped file for deployment, node_modules are included)
├── Frontend
│   │── app
│   │   ├── (default_site)
│   │   │   ├── _blog
│   │   │   │   ├── [slug]
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   ├── lib
│   │   │   └── definition.ts
│   │   ├── utils
│   │   │   ├── dateformatter.ts
│   │   │   └── getBlogData.ts
│   │   ├── ui
│   │   │   ├── components
│   │   │   │   ├── to be added..
│   │   │   ├── landing
│   │   │   │    ├── Hero.tsx
│   │   │   │    ├── Skills.tsx
│   │   │   │    ├── Projects.tsx
│   │   │   │    ├── Flex.tsx
│   │   │   │    ├── CommunityWork.tsx
│   │   │   │    ├── MoreAboutMe.tsx
│   │   │   │    └── Contact.tsx
│   │   │   ├── universal
│   │   │   │    ├── Navbar.tsx
│   │   │   │    └── Footer.tsx
│   │   │   ├── blog
│   │   │   │    └── blog-card.tsx
│   │   │   └── loaders.tsx
│   │   ├── favicon.ico
│   │   ├── global.css
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── notfound.tsx
│   │── public
│   │   ├── Manas_CV.pdf
│   │   ├── blog
│   │   │   └── ... folder with blog files
│   │   └── assets
│   │       └── ... folder with assets
│   │── .eslinktrc.jsom
│   │── next-env.d.ts
│   │── package.json
│   │── package-lock.json
│   │── next.config.mjs (enabled cross image fetching)
│   │── .env
│   │── next-sitemap.js
│   └── ..... Other configuration files (unaltered)
├── .gitignore
├── LICENSE
└── README.md
```

- `site map` and `robots.txt` are automatically generating by using `next-sitemap` using post build script in `package.json` file.

## 🔥 Contributing

Contributions are always welcome! Additionally you can contact me by my email: **manas@scienmanas.xyz**. I am currently working on a .md based blog engine for this template

## 📷 Video

 To be added ...

## 🙌 Credits & Acknowledgements

- The website is inspired by the portfolio of **[Nikhil Raj](https://github.com/nikhil25803)**  & **[Smile Gupta](https://github.com/smilegupta)**. There are some changes made to the original design. You can access their original portfolio from at [Nikhil Raj](https://nikhilraj.live/) & [Smile Gupta](https://smilegupta.github.io/portfolio-smilegupta/).

## 🔒 License

This repository is open source and under [MIT](https://choosealicense.com/licenses/mit/) License.
