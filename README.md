# React Serverless Framework Deploy

Learning how a deploy a React App with AWS services

I used this video [here](https://www.youtube.com/watch?v=sMZm8HASKlM)

We can even go further and setup a Github Actions config for this project. I loved how easy is to do a pipeline here, an example of Serverless Framework Lambda functions deploy can be seen [here](https://github.com/jhonpedro/sls-gh-actions)

### How to deploy here

1. First you need to setup your credentials in serverless cli
2. You go to `/sls-react` folder and run `yarn build`
3. You come back to root dir and run `sls deploy`

That's it, at the end of `sls deploy` you will have a page in the name of your bucket
